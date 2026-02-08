const ADMIN_CREDENTIALS = {
  email: 'admin@abhinaya.com',
  password: 'admin123'
}

export { ADMIN_CREDENTIALS }

export interface JWTPayload {
  email: string
  role: string
}

export function verifyToken(token: string): JWTPayload | null {
  try {
    const decoded = Buffer.from(token, 'base64').toString('utf-8')
    const [email] = decoded.split(':')
    
    if (email === ADMIN_CREDENTIALS.email) {
      return {
        email: ADMIN_CREDENTIALS.email,
        role: 'ADMIN'
      }
    }
    
    return null
  } catch (error) {
    return null
  }
}

export function extractTokenFromRequest(request: Request): string | null {
  const authHeader = request.headers.get('Authorization')
  if (authHeader && authHeader.startsWith('Bearer ')) {
    return authHeader.substring(7)
  }
  return null
}

export async function requireAuth(request: Request): Promise<JWTPayload | null> {
  const token = extractTokenFromRequest(request)
  if (!token) {
    return null
  }
  return verifyToken(token)
}

export async function requireAdmin(request: Request): Promise<JWTPayload | null> {
  const payload = await requireAuth(request)
  if (!payload || payload.role !== 'ADMIN') {
    return null
  }
  return payload
}
