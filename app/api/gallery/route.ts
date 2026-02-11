import { NextRequest, NextResponse } from 'next/server'
import { writeFile } from 'fs/promises'
import { join } from 'path'
import { prisma } from '@/lib/database'

export async function GET() {
  try {
    const gallery = await prisma.gallery.findMany({
      where: { isActive: true },
      orderBy: { createdAt: 'desc' }
    })
    
    return NextResponse.json(gallery)
  } catch (error) {
    console.error('Error fetching gallery:', error)
    return NextResponse.json(
      { error: 'Failed to fetch gallery' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    
    const title = formData.get('title') as string
    const description = formData.get('description') as string
    const category = formData.get('category') as string
    const image = formData.get('image') as File
    
    if (!title || !image) {
      return NextResponse.json(
        { error: 'Title and image are required' },
        { status: 400 }
      )
    }

    let imagePath = null
    if (image) {
      try {
        // For Vercel deployment, use cloud storage or skip image upload
        if (process.env.NODE_ENV === 'production') {
          // In production, store image data as base64 or use cloud storage
          const bytes = await image.arrayBuffer()
          const base64 = Buffer.from(bytes).toString('base64')
          imagePath = `data:${image.type};base64,${base64}`
        } else {
          // Local development - save to filesystem
          const bytes = await image.arrayBuffer()
          const buffer = Buffer.from(bytes)
          
          const filename = `${Date.now()}-${image.name}`
          const uploadDir = join(process.cwd(), 'public', 'uploads', 'gallery')
          
          await writeFile(join(uploadDir, filename), buffer)
          imagePath = `/uploads/gallery/${filename}`
        }
      } catch (error) {
        console.error('Error processing image:', error)
        return NextResponse.json(
          { error: 'Failed to process image' },
          { status: 500 }
        )
      }
    }

    const galleryItem = await prisma.gallery.create({
      data: {
        title,
        description,
        category,
        image: imagePath || '',
        isActive: true
      }
    })

    return NextResponse.json(galleryItem)
  } catch (error) {
    console.error('Error creating gallery item:', error)
    return NextResponse.json(
      { error: 'Failed to create gallery item' },
      { status: 500 }
    )
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')
    
    if (!id) {
      return NextResponse.json(
        { error: 'ID is required' },
        { status: 400 }
      )
    }

    await prisma.gallery.delete({
      where: { id: parseInt(id) }
    })

    return NextResponse.json({ message: 'Gallery item deleted successfully' })
  } catch (error) {
    console.error('Error deleting gallery item:', error)
    return NextResponse.json(
      { error: 'Failed to delete gallery item' },
      { status: 500 }
    )
  }
}

export async function PATCH(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')
    
    if (!id) {
      return NextResponse.json(
        { error: 'ID is required' },
        { status: 400 }
      )
    }

    const { isActive } = await request.json()
    
    const gallery = await prisma.gallery.update({
      where: { id: parseInt(id) },
      data: { isActive }
    })

    return NextResponse.json(gallery)
  } catch (error) {
    console.error('Error updating gallery:', error)
    return NextResponse.json(
      { error: 'Failed to update gallery' },
      { status: 500 }
    )
  }
}
