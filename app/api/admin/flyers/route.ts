import { NextRequest, NextResponse } from 'next/server'
import { requireAdmin } from '@/lib/auth'
import { writeFile } from 'fs/promises'
import { join } from 'path'
import { prisma } from '@/lib/database'

export async function GET(request: NextRequest) {
  try {
    const auth = await requireAdmin(request)
    if (!auth) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const flyers = await prisma.flyerItem.findMany({
      orderBy: { createdAt: 'desc' }
    })

    return NextResponse.json(flyers)
  } catch (error) {
    console.error('Error fetching flyers:', error)
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
    const image = formData.get('image') as File
    
    if (!title || !image) {
      return NextResponse.json({ error: 'Title and image are required' }, { status: 400 })
    }

    const bytes = await image.arrayBuffer()
    const buffer = Buffer.from(bytes)
    
    const filename = `${Date.now()}-${image.name}`
    const uploadDir = join(process.cwd(), 'public', 'uploads', 'flyers')
    
    try {
      await writeFile(join(uploadDir, filename), buffer)
    } catch (error) {
      console.error('Error saving image:', error)
      return NextResponse.json({ error: 'Failed to save image' }, { status: 500 })
    }

    const flyer = await prisma.flyerItem.create({
      data: {
        title,
        description,
        image: `/uploads/flyers/${filename}`,
        isActive: true
      }
    })

    return NextResponse.json(flyer)
  } catch (error) {
    console.error('Error creating flyer:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
