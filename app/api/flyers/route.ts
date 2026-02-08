import { NextRequest, NextResponse } from 'next/server'
import { writeFile } from 'fs/promises'
import { join } from 'path'
import { prisma } from '@/lib/database'

export async function GET() {
  try {
    const flyers = await prisma.flyerItem.findMany({
      where: { isActive: true },
      orderBy: { createdAt: 'desc' }
    })
    
    return NextResponse.json(flyers)
  } catch (error) {
    console.error('Error fetching flyers:', error)
    return NextResponse.json(
      { error: 'Failed to fetch flyers' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    
    const title = formData.get('title') as string
    const description = formData.get('description') as string
    const isActive = formData.get('isActive') === 'true'
    const image = formData.get('image') as File
    
    if (!title || !image) {
      return NextResponse.json(
        { error: 'Title and image are required' },
        { status: 400 }
      )
    }

    const bytes = await image.arrayBuffer()
    const buffer = Buffer.from(bytes)
    
    const filename = `${Date.now()}-${image.name}`
    const uploadDir = join(process.cwd(), 'public', 'uploads', 'flyers')
    
    try {
      await writeFile(join(uploadDir, filename), buffer)
    } catch (error) {
      console.error('Error saving image:', error)
      return NextResponse.json(
        { error: 'Failed to save image' },
        { status: 500 }
      )
    }

    const newFlyer = await prisma.flyerItem.create({
      data: {
        title,
        description,
        isActive,
        image: `/uploads/flyers/${filename}`
      }
    })

    return NextResponse.json(newFlyer)
  } catch (error) {
    console.error('Error creating flyer:', error)
    return NextResponse.json(
      { error: 'Failed to create flyer' },
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

    await prisma.flyerItem.delete({
      where: { id: parseInt(id) }
    })

    return NextResponse.json({ message: 'Flyer deleted successfully' })
  } catch (error) {
    console.error('Error deleting flyer:', error)
    return NextResponse.json(
      { error: 'Failed to delete flyer' },
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
    
    const flyer = await prisma.flyerItem.update({
      where: { id: parseInt(id) },
      data: { isActive }
    })

    return NextResponse.json(flyer)
  } catch (error) {
    console.error('Error updating flyer:', error)
    return NextResponse.json(
      { error: 'Failed to update flyer' },
      { status: 500 }
    )
  }
}
