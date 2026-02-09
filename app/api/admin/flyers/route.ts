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
          const uploadDir = join(process.cwd(), 'public', 'uploads', 'flyers')
          
          await writeFile(join(uploadDir, filename), buffer)
          imagePath = `/uploads/flyers/${filename}`
        }
      } catch (error) {
        console.error('Error processing image:', error)
        return NextResponse.json({ error: 'Failed to process image' }, { status: 500 })
      }
    }

    const flyer = await prisma.flyerItem.create({
      data: {
        title,
        description,
        image: imagePath || '',
        isActive: true
      }
    })

    return NextResponse.json(flyer)
  } catch (error) {
    console.error('Error creating flyer:', error)
    return NextResponse.json({ error: 'Failed to create flyer' }, { status: 500 })
  }
}
