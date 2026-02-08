import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/database'

export async function GET() {
  try {
    // Test database connection and see what models are available
    const result = await prisma.$queryRaw`SELECT name FROM sqlite_master WHERE type='table'`
    
    return NextResponse.json({ 
      message: 'Database tables',
      tables: result
    })
  } catch (error) {
    console.error('Database error:', error)
    return NextResponse.json(
      { 
        error: 'Database connection failed',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
}
