import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  // This is a simplified middleware for demonstration
  // In a production app, you would verify JWT tokens or session cookies

  const isAdminPath = request.nextUrl.pathname.startsWith("/admin")
  const isLoginPath = request.nextUrl.pathname === "/admin/login"

  // Skip middleware for login page and non-admin paths
  if (!isAdminPath || isLoginPath) {
    return NextResponse.next()
  }

  // For client-side auth, we'll let the client component handle the redirect
  // This middleware is just an additional layer of protection
  return NextResponse.next()
}

export const config = {
  matcher: ["/admin/:path*"],
}
