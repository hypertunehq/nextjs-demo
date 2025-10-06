import { NextResponse, type NextRequest } from 'next/server'

export const config = {
  matcher: '/(.*)',
}

export function middleware(req: NextRequest): NextResponse {
  const res = NextResponse.next()

  return res
}
