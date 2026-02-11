import { NextRequest, NextResponse } from 'next/server'
import { rateLimit, corsMiddleware, securityHeaders } from '@/lib/middleware'

export async function middleware(request: NextRequest) {
  // Apply rate limiting to API routes
  if (request.nextUrl.pathname.startsWith('/api/')) {
    const limit = parseInt(process.env.RATE_LIMIT_MAX_REQUESTS || '100')
    const windowMs = parseInt(process.env.RATE_LIMIT_WINDOW_MS || '900000') // 15 minutes
    
    const rateLimitResult = await rateLimit(request, limit, windowMs)
    
    if (!rateLimitResult.success) {
      const response = new NextResponse(
        JSON.stringify({ error: 'Too Many Requests' }),
        { status: 429 }
      )
      
      // Set headers individually
      response.headers.set('Content-Type', 'application/json')
      Object.entries(rateLimitResult.headers).forEach(([key, value]) => {
        response.headers.set(key, value)
      })
      Object.entries(corsMiddleware(request)).forEach(([key, value]) => {
        response.headers.set(key, value)
      })
      Object.entries(securityHeaders()).forEach(([key, value]) => {
        response.headers.set(key, value)
      })
      
      return response
    }
  }

  // Handle CORS preflight requests
  if (request.method === 'OPTIONS') {
    const response = new NextResponse(null, { status: 200 })
    
    Object.entries(corsMiddleware(request)).forEach(([key, value]) => {
      response.headers.set(key, value)
    })
    Object.entries(securityHeaders()).forEach(([key, value]) => {
      response.headers.set(key, value)
    })
    
    return response
  }

  // Apply security headers to all responses
  const response = NextResponse.next()
  
  // Add security headers
  Object.entries(securityHeaders()).forEach(([key, value]) => {
    response.headers.set(key, value)
  })
  
  // Add CORS headers for API routes
  if (request.nextUrl.pathname.startsWith('/api/')) {
    Object.entries(corsMiddleware(request)).forEach(([key, value]) => {
      response.headers.set(key, value)
    })
  }

  return response
}

export const config = {
  matcher: [
    '/api/:path*'
  ]
}
