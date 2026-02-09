export class ApiError extends Error {
  public statusCode: number
  public isOperational: boolean

  constructor(message: string, statusCode: number = 500, isOperational: boolean = true) {
    super(message)
    this.statusCode = statusCode
    this.isOperational = isOperational
    
    Error.captureStackTrace(this, this.constructor)
  }
}

export class ValidationError extends ApiError {
  public details: any[]

  constructor(message: string, details: any[] = []) {
    super(message, 400)
    this.details = details
  }
}

export class AuthenticationError extends ApiError {
  constructor(message: string = 'Authentication failed') {
    super(message, 401)
  }
}

export class AuthorizationError extends ApiError {
  constructor(message: string = 'Insufficient permissions') {
    super(message, 403)
  }
}

export class NotFoundError extends ApiError {
  constructor(message: string = 'Resource not found') {
    super(message, 404)
  }
}

export class ConflictError extends ApiError {
  constructor(message: string = 'Resource conflict') {
    super(message, 409)
  }
}

export class RateLimitError extends ApiError {
  constructor(message: string = 'Too many requests') {
    super(message, 429)
  }
}

export function handleApiError(error: unknown): Response {
  console.error('API Error:', error)

  if (error instanceof ApiError) {
    return new Response(
      JSON.stringify({
        error: error.message,
        ...(error instanceof ValidationError && { details: error.details }),
        statusCode: error.statusCode,
        timestamp: new Date().toISOString()
      }),
      {
        status: error.statusCode,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )
  }

  // Handle Prisma errors
  if (error && typeof error === 'object' && 'code' in error) {
    const prismaError = error as any
    switch (prismaError.code) {
      case 'P2002':
        return new Response(
          JSON.stringify({
            error: 'Resource already exists',
            statusCode: 409,
            timestamp: new Date().toISOString()
          }),
          {
            status: 409,
            headers: { 'Content-Type': 'application/json' }
          }
        )
      case 'P2025':
        return new Response(
          JSON.stringify({
            error: 'Resource not found',
            statusCode: 404,
            timestamp: new Date().toISOString()
          }),
          {
            status: 404,
            headers: { 'Content-Type': 'application/json' }
          }
        )
      default:
        break
    }
  }

  // Handle Zod errors
  if (error && typeof error === 'object' && 'issues' in error) {
    const zodError = error as any
    return new Response(
      JSON.stringify({
        error: 'Validation failed',
        details: zodError.issues,
        statusCode: 400,
        timestamp: new Date().toISOString()
      }),
      {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      }
    )
  }

  // Generic error
  return new Response(
    JSON.stringify({
      error: process.env.NODE_ENV === 'production' 
        ? 'Internal server error' 
        : (error as Error).message || 'Unknown error',
      statusCode: 500,
      timestamp: new Date().toISOString()
    }),
    {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    }
  )
}

export function logRequest(request: Request, response?: Response) {
  const timestamp = new Date().toISOString()
  const method = request.method
  const url = request.url
  const status = response?.status || 'pending'
  
  console.log(`[${timestamp}] ${method} ${url} - ${status}`)
}

export function logError(error: Error, context?: string) {
  const timestamp = new Date().toISOString()
  const message = error.message
  const stack = error.stack
  const ctx = context ? ` [${context}]` : ''
  
  console.error(`[${timestamp}] ERROR${ctx}: ${message}`)
  if (stack) {
    console.error(stack)
  }
}
