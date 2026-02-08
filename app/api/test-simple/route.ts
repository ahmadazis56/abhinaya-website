import { NextRequest, NextResponse } from 'next/server'

export async function GET() {
  try {
    // Simple test without Prisma
    return NextResponse.json({ 
      message: 'Test API working',
      timestamp: new Date().toISOString()
    })
  } catch (error) {
    console.error('Test error:', error)
    return NextResponse.json(
      { error: 'Test failed' },
      { status: 500 }
    )
  }
}
