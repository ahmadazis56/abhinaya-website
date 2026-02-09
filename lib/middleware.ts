import { NextRequest, NextResponse } from 'next/server'
import { getToken } from 'next-auth/jwt'

// Rate limiting storage (in production, use Redis)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>()

export async function rateLimit(
  request: NextRequest,
  limit: number = 100,
  windowMs: number = 15 * 60 * 1000 // 15 minutes
): Promise<{ success: boolean; headers: Record<string, string> }> {
  const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'anonymous'
  const now = Date.now()
  const windowStart = now - windowMs

  // Clean old entries
  const keysToDelete: string[] = []
  rateLimitMap.forEach((value, key) => {
    if (value.resetTime < windowStart) {
      keysToDelete.push(key)
    }
  })
  keysToDelete.forEach(key => rateLimitMap.delete(key))

  // Check current rate limit
  const current = rateLimitMap.get(ip)
  if (current && current.resetTime > windowStart) {
    if (current.count >= limit) {
      return {
        success: false,
        headers: {
          'X-RateLimit-Limit': limit.toString(),
          'X-RateLimit-Remaining': '0',
          'X-RateLimit-Reset': current.resetTime.toString(),
          'Retry-After': Math.ceil((current.resetTime - now) / 1000).toString()
        }
      }
    }
    current.count += 1
  } else {
    rateLimitMap.set(ip, { count: 1, resetTime: now + windowMs })
  }

  const remaining = limit - (rateLimitMap.get(ip)?.count || 0)
  
  return {
    success: true,
    headers: {
      'X-RateLimit-Limit': limit.toString(),
      'X-RateLimit-Remaining': remaining.toString(),
      'X-RateLimit-Reset': (now + windowMs).toString()
    }
  }
}

export function corsMiddleware(request: NextRequest) {
  const origin = request.headers.get('origin')
  const allowedOrigins = process.env.ALLOWED_ORIGINS?.split(',') || ['http://localhost:3000']
  
  if (allowedOrigins.includes(origin || '')) {
    return {
      'Access-Control-Allow-Origin': origin || '',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      'Access-Control-Allow-Credentials': 'true'
    }
  }
  
  return {
    'Access-Control-Allow-Origin': allowedOrigins[0]
  }
}

export function securityHeaders() {
  return {
    'X-Content-Type-Options': 'nosniff',
    'X-Frame-Options': 'DENY',
    'X-XSS-Protection': '1; mode=block',
    'Referrer-Policy': 'strict-origin-when-cross-origin',
    'Content-Security-Policy': "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:;",
    'Strict-Transport-Security': 'max-age=31536000; includeSubDomains'
  }
}
