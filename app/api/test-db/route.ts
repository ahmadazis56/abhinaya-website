import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/database'

export async function GET() {
  try {
    // Test database connection
    await prisma.$connect()
    
    // Test query
    const flyers = await prisma.flyerItem.findMany({
      where: { isActive: true },
      orderBy: { createdAt: 'desc' }
    })
    
    await prisma.$disconnect()
    
    return NextResponse.json({ 
      message: 'Database connected successfully',
      count: flyers.length,
      data: flyers
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
