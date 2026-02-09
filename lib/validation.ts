import { z } from 'zod'

// Common validation schemas
export const paginationSchema = z.object({
  page: z.coerce.number().int().positive().default(1),
  limit: z.coerce.number().int().positive().max(100).default(10),
  search: z.string().optional()
})

export const idSchema = z.object({
  id: z.string().min(1, 'ID is required')
})

// Event validation schemas
export const createEventSchema = z.object({
  title: z.string().min(1, 'Title is required').max(200, 'Title too long'),
  description: z.string().optional(),
  date: z.coerce.date().optional(),
  image: z.string().url('Invalid image URL').optional()
})

export const updateEventSchema = createEventSchema.partial()

// Gallery validation schemas
export const createGallerySchema = z.object({
  title: z.string().min(1, 'Title is required').max(200, 'Title too long'),
  description: z.string().optional(),
  image: z.string().url('Invalid image URL'),
  category: z.string().optional()
})

export const updateGallerySchema = createGallerySchema.partial()

// Flyer validation schemas
export const createFlyerSchema = z.object({
  title: z.string().min(1, 'Title is required').max(200, 'Title too long'),
  description: z.string().optional(),
  image: z.string().url('Invalid image URL'),
  isActive: z.boolean().default(true)
})

export const updateFlyerSchema = createFlyerSchema.partial()

// Admin validation schemas
export const loginSchema = z.object({
  email: z.string().email('Invalid email format'),
  password: z.string().min(1, 'Password is required')
})

export const createAdminSchema = z.object({
  email: z.string().email('Invalid email format'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
  role: z.string().default('ADMIN')
})

// Content validation schemas
export const clientSchema = z.object({
  name: z.string().min(1, 'Name is required').max(100, 'Name too long'),
  logo: z.string().url('Invalid logo URL').optional(),
  website: z.string().url('Invalid website URL').optional(),
  description: z.string().optional()
})

export const partnerSchema = z.object({
  name: z.string().min(1, 'Name is required').max(100, 'Name too long'),
  logo: z.string().url('Invalid logo URL').optional(),
  website: z.string().url('Invalid website URL').optional(),
  type: z.string().optional()
})

// Validation helper functions
export function validateRequest<T>(schema: z.ZodSchema<T>, data: unknown): T {
  const result = schema.safeParse(data)
  
  if (!result.success) {
    const errors = result.error.issues.map(issue => ({
      field: issue.path.join('.'),
      message: issue.message,
      code: issue.code
    }))
    
    throw new Error(`Validation failed: ${errors.map(e => `${e.field}: ${e.message}`).join(', ')}`)
  }
  
  return result.data
}

export function sanitizeString(input: string): string {
  return input
    .trim()
    .replace(/[<>]/g, '') // Remove potential HTML tags
    .replace(/javascript:/gi, '') // Remove javascript: protocol
    .replace(/on\w+=/gi, '') // Remove event handlers
}

export function sanitizeHtml(input: string): string {
  // Basic HTML sanitization - in production, use a library like DOMPurify
  return input
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi, '')
    .replace(/on\w+="[^"]*"/gi, '')
    .replace(/javascript:/gi, '')
}

export function validateFileUpload(file: File): { valid: boolean; error?: string } {
  // Check file size (max 5MB)
  const maxSize = 5 * 1024 * 1024
  if (file.size > maxSize) {
    return { valid: false, error: 'File size must be less than 5MB' }
  }

  // Check file type
  const allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp']
  if (!allowedTypes.includes(file.type)) {
    return { valid: false, error: 'Only JPEG, PNG, GIF, and WebP images are allowed' }
  }

  return { valid: true }
}

export function validateImageUrl(url: string): boolean {
  try {
    const urlObj = new URL(url)
    return ['http:', 'https:'].includes(urlObj.protocol)
  } catch {
    return false
  }
}

// Rate limiting validation
export function validateRateLimit(headers: Record<string, string>): { valid: boolean; remaining?: number; reset?: number } {
  const limit = parseInt(headers['x-ratelimit-limit'] || '100')
  const remaining = parseInt(headers['x-ratelimit-remaining'] || '0')
  const reset = parseInt(headers['x-ratelimit-reset'] || '0')

  return {
    valid: remaining > 0,
    remaining,
    reset
  }
}
