import { NextRequest, NextResponse } from 'next/server'
import { requireAdmin } from '@/lib/auth'
import { writeFile, unlink } from 'fs/promises'
import { join } from 'path'
import { prisma } from '@/lib/database'

export async function GET(request: NextRequest) {
  try {
    const auth = await requireAdmin(request)
    if (!auth) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const gallery = await prisma.gallery.findMany({
      orderBy: { createdAt: 'desc' }
    })

    return NextResponse.json(gallery)
  } catch (error) {
    console.error('Error fetching gallery:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const auth = await requireAdmin(request)
    if (!auth) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const formData = await request.formData()
    
    const title = formData.get('title') as string
    const description = formData.get('description') as string
    const category = formData.get('category') as string
    const image = formData.get('image') as File
    
    if (!title || !image) {
      return NextResponse.json({ error: 'Title and image are required' }, { status: 400 })
    }

    const bytes = await image.arrayBuffer()
    const buffer = Buffer.from(bytes)
    
    const filename = `${Date.now()}-${image.name}`
    const uploadDir = join(process.cwd(), 'public', 'uploads', 'gallery')
    
    try {
      await writeFile(join(uploadDir, filename), buffer)
    } catch (error) {
      console.error('Error saving image:', error)
      return NextResponse.json({ error: 'Failed to save image' }, { status: 500 })
    }

    const galleryItem = await prisma.gallery.create({
      data: {
        title,
        description,
        category,
        image: `/uploads/gallery/${filename}`
      }
    })

    return NextResponse.json(galleryItem)
  } catch (error) {
    console.error('Error creating gallery item:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function PUT(request: NextRequest) {
  try {
    const auth = await requireAdmin(request)
    if (!auth) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const formData = await request.formData()
    
    const id = formData.get('id') as string
    const title = formData.get('title') as string
    const description = formData.get('description') as string
    const category = formData.get('category') as string
    const image = formData.get('image') as File | null
    
    if (!id || !title) {
      return NextResponse.json({ error: 'ID and title are required' }, { status: 400 })
    }

    // Get the existing gallery item
    const existingItem = await prisma.gallery.findUnique({
      where: { id: parseInt(id) }
    })

    if (!existingItem) {
      return NextResponse.json({ error: 'Gallery item not found' }, { status: 404 })
    }

    let imagePath = existingItem.image

    // If a new image is provided, upload it and delete the old one
    if (image) {
      const bytes = await image.arrayBuffer()
      const buffer = Buffer.from(bytes)
      
      const filename = `${Date.now()}-${image.name}`
      const uploadDir = join(process.cwd(), 'public', 'uploads', 'gallery')
      
      try {
        await writeFile(join(uploadDir, filename), buffer)
        
        // Delete the old image file
        if (existingItem.image) {
          try {
            const oldImagePath = join(process.cwd(), 'public', existingItem.image)
            await unlink(oldImagePath)
          } catch (error) {
            console.error('Error deleting old image file:', error)
          }
        }
        
        imagePath = `/uploads/gallery/${filename}`
      } catch (error) {
        console.error('Error saving new image:', error)
        return NextResponse.json({ error: 'Failed to save new image' }, { status: 500 })
      }
    }

    // Update the gallery item
    const updatedItem = await prisma.gallery.update({
      where: { id: parseInt(id) },
      data: {
        title,
        description,
        category,
        image: imagePath
      }
    })

    return NextResponse.json(updatedItem)
  } catch (error) {
    console.error('Error updating gallery item:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const auth = await requireAdmin(request)
    if (!auth) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')
    
    if (!id) {
      return NextResponse.json({ error: 'ID is required' }, { status: 400 })
    }

    // Get the gallery item to find the image path
    const galleryItem = await prisma.gallery.findUnique({
      where: { id: parseInt(id) }
    })

    if (!galleryItem) {
      return NextResponse.json({ error: 'Gallery item not found' }, { status: 404 })
    }

    // Delete the image file from filesystem
    if (galleryItem.image) {
      try {
        const imagePath = join(process.cwd(), 'public', galleryItem.image)
        await unlink(imagePath)
      } catch (error) {
        console.error('Error deleting image file:', error)
        // Continue with database deletion even if file deletion fails
      }
    }

    // Delete the gallery item from database
    await prisma.gallery.delete({
      where: { id: parseInt(id) }
    })

    return NextResponse.json({ message: 'Gallery item deleted successfully' })
  } catch (error) {
    console.error('Error deleting gallery item:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
