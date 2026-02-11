import { NextRequest, NextResponse } from 'next/server'
import { authenticateAdmin, generateToken } from '@/lib/auth'

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json()
    
    console.log('Login attempt:', { email, passwordLength: password?.length });

    if (!email || !password) {
      return NextResponse.json(
        { error: 'Email and password are required' },
        { status: 400 }
      )
    }

    // Authenticate admin
    console.log('Calling authenticateAdmin...');
    const admin = await authenticateAdmin(email, password)
    console.log('Authentication result:', admin ? 'success' : 'failed');
    
    if (!admin) {
      return NextResponse.json(
        { error: 'Invalid credentials' },
        { status: 401 }
      )
    }

    console.log('Admin found:', { id: admin.id, email: admin.email, role: admin.role });

    // Generate token
    const token = generateToken({
      email: admin.email,
      role: admin.role
    })

    console.log('Token generated successfully');

    // Set HTTP-only cookie
    const response = NextResponse.json({
      message: 'Login successful',
      token,
      user: {
        id: admin.id,
        email: admin.email,
        role: admin.role
      }
    })

    // Set cookie for additional security
    response.cookies.set('adminToken', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 // 24 hours
    })

    console.log('Login successful, cookie set');
    return response
  } catch (error) {
    console.error('Login error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
