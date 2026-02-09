import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/database'
import { createAdminUser } from '@/lib/auth'

export async function POST() {
  try {
    // Create default admin user
    const admin = await createAdminUser(
      process.env.ADMIN_EMAIL || 'admin@abhinaya.com',
      process.env.ADMIN_PASSWORD || 'admin123'
    )

    return NextResponse.json({
      message: 'Admin user created successfully',
      admin: {
        id: admin.id,
        email: admin.email,
        role: admin.role
      }
    })
  } catch (error) {
    console.error('Error creating admin:', error)
    return NextResponse.json(
      { error: 'Failed to create admin user' },
      { status: 500 }
    )
  }
}

export async function GET() {
  try {
    const admins = await prisma.admin.findMany({
      select: {
        id: true,
        email: true,
        role: true,
        createdAt: true,
        updatedAt: true
      }
    })

    return NextResponse.json({
      admins,
      count: admins.length
    })
  } catch (error) {
    console.error('Error fetching admins:', error)
    return NextResponse.json(
      { error: 'Failed to fetch admins' },
      { status: 500 }
    )
  }
}
