import { NextRequest, NextResponse } from 'next/server'
import { ADMIN_CREDENTIALS } from '@/lib/auth'

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json()

    if (email === ADMIN_CREDENTIALS.email && password === ADMIN_CREDENTIALS.password) {
      const token = Buffer.from(`${email}:${password}`).toString('base64')
      
      return NextResponse.json({
        token,
        user: {
          email: ADMIN_CREDENTIALS.email,
          role: 'ADMIN'
        }
      })
    }

    return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 })
  } catch (error) {
    console.error('Login error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
