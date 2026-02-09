import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { prisma } from './database'

const JWT_SECRET = process.env.JWT_SECRET || 'fallback-secret-change-in-production'
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || '24h'

export interface JWTPayload {
  email: string
  role: string
  iat?: number
  exp?: number
}

export interface AdminUser {
  id: string
  email: string
  role: string
  createdAt: Date
  updatedAt: Date
}

export async function hashPassword(password: string): Promise<string> {
  const saltRounds = 12
  return bcrypt.hash(password, saltRounds)
}

export async function verifyPassword(password: string, hashedPassword: string): Promise<boolean> {
  return bcrypt.compare(password, hashedPassword)
}

export function generateToken(payload: Omit<JWTPayload, 'iat' | 'exp'>): string {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN } as jwt.SignOptions)
}

export function verifyToken(token: string): JWTPayload | null {
  try {
    const decoded = jwt.verify(token, JWT_SECRET) as JWTPayload
    return decoded
  } catch (error) {
    console.error('Token verification failed:', error)
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

export async function createAdminUser(email: string, password: string): Promise<AdminUser> {
  const hashedPassword = await hashPassword(password)
  
  const admin = await prisma.admin.upsert({
    where: { email },
    update: { password: hashedPassword },
    create: {
      email,
      password: hashedPassword,
      role: 'ADMIN'
    }
  })
  
  return {
    id: admin.id,
    email: admin.email,
    role: admin.role,
    createdAt: admin.createdAt,
    updatedAt: admin.updatedAt
  }
}

export async function authenticateAdmin(email: string, password: string): Promise<AdminUser | null> {
  try {
    const admin = await prisma.admin.findUnique({
      where: { email }
    })
    
    if (!admin) {
      return null
    }
    
    const isValidPassword = await verifyPassword(password, admin.password)
    if (!isValidPassword) {
      return null
    }
    
    return {
      id: admin.id,
      email: admin.email,
      role: admin.role,
      createdAt: admin.createdAt,
      updatedAt: admin.updatedAt
    }
  } catch (error) {
    console.error('Authentication error:', error)
    return null
  }
}
