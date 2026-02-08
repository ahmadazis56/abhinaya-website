import { NextRequest, NextResponse } from 'next/server'
import { requireAdmin } from '@/lib/auth'
import { writeFile, unlink } from 'fs/promises'
import { join } from 'path'
import { prisma } from '@/lib/database'

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const auth = await requireAdmin(request)
    if (!auth) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const contentType = request.headers.get('content-type')
    const { id: idParam } = await params
    const id = parseInt(idParam)

    // Get current flyer to preserve existing data
    const currentFlyer = await prisma.flyerItem.findUnique({
      where: { id }
    })

    if (!currentFlyer) {
      return NextResponse.json({ error: 'Flyer not found' }, { status: 404 })
    }

    let updateData: any = {}

    if (contentType?.includes('multipart/form-data')) {
      // Handle FormData (for image uploads)
      const formData = await request.formData()
      
      const title = formData.get('title') as string
      const description = formData.get('description') as string
      const image = formData.get('image') as File | null
      
      if (title) updateData.title = title
      if (description !== null) updateData.description = description

      // Handle image upload
      if (image && image.size > 0) {
        const bytes = await image.arrayBuffer()
        const buffer = Buffer.from(bytes)
        
        const filename = `${Date.now()}-${image.name}`
        const uploadDir = join(process.cwd(), 'public', 'uploads', 'flyers')
        
        try {
          await writeFile(join(uploadDir, filename), buffer)
          
          // Delete old image
          if (currentFlyer.image) {
            try {
              const oldImagePath = join(process.cwd(), 'public', currentFlyer.image)
              await unlink(oldImagePath)
            } catch (error) {
              console.error('Error deleting old image file:', error)
            }
          }
          
          updateData.image = `/uploads/flyers/${filename}`
        } catch (error) {
          console.error('Error saving new image:', error)
          return NextResponse.json({ error: 'Failed to save new image' }, { status: 500 })
        }
      }
    } else {
      // Handle JSON (for status updates)
      const body = await request.json()
      
      if (body.title !== undefined) updateData.title = body.title
      if (body.description !== undefined) updateData.description = body.description
      if (body.image !== undefined) updateData.image = body.image
      if (body.isActive !== undefined) updateData.isActive = body.isActive
    }

    const flyer = await prisma.flyerItem.update({
      where: { id },
      data: updateData
    })

    return NextResponse.json(flyer)
  } catch (error) {
    console.error('Error updating flyer:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const auth = await requireAdmin(request)
    if (!auth) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { id: idParam } = await params
    const id = parseInt(idParam)

    // Get the flyer to find the image path
    const flyer = await prisma.flyerItem.findUnique({
      where: { id }
    })

    if (flyer) {
      // Delete the image file
      if (flyer.image) {
        try {
          const imagePath = join(process.cwd(), 'public', flyer.image)
          await unlink(imagePath)
        } catch (error) {
          console.error('Error deleting image file:', error)
        }
      }
    }

    await prisma.flyerItem.delete({
      where: { id }
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error deleting flyer:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
