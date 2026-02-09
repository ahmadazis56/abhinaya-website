import { NextRequest, NextResponse } from 'next/server'
import { requireAdmin } from '@/lib/auth'
import { writeFile, mkdir } from 'fs/promises'
import { join } from 'path'

export async function POST(request: NextRequest) {
  try {
    const auth = await requireAdmin(request)
    if (!auth) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const formData = await request.formData()
    const file = formData.get('file') as File
    const type = formData.get('type') as string // 'events', 'gallery', 'flyers'
    
    if (!file || !type) {
      return NextResponse.json({ error: 'File and type are required' }, { status: 400 })
    }

    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)
    
    const filename = `${Date.now()}-${file.name}`
    const uploadDir = join(process.cwd(), 'public', 'uploads', type)
    
    try {
      // Ensure upload directory exists
      await mkdir(uploadDir, { recursive: true })
      
      await writeFile(join(uploadDir, filename), buffer)
      const url = `/uploads/${type}/${filename}`
      
      console.log('File uploaded successfully:', url)
      return NextResponse.json({ url })
    } catch (error) {
      console.error('Error saving file:', error)
      return NextResponse.json({ 
        error: 'Failed to save file',
        details: error instanceof Error ? error.message : 'Unknown error'
      }, { status: 500 })
    }
  } catch (error) {
    console.error('Upload error:', error)
    return NextResponse.json({ 
      error: 'Internal server error',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 })
  }
}
