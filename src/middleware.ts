import { NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';
import type { NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
  // Get the pathname of the request
  const path = request.nextUrl.pathname;
  
  // Define paths that are protected (require authentication)
  const isAdminPath = path.startsWith('/admin');

  // Exclude the login page from protection
  const isLoginPage = path === '/admin/login';
  
  // If it's a protected route, check for session/token
  if (isAdminPath && !isLoginPage) {
    const token = await getToken({
      req: request,
      secret: process.env.NEXTAUTH_SECRET,
    });

    // If there is no token and the path is not the login page
    if (!token) {
      // Redirect to the login page
      const url = new URL('/admin/login', request.url);
      url.searchParams.set('callbackUrl', encodeURI(request.url));
      return NextResponse.redirect(url);
    }

    // Check if the token has admin role for admin paths
    if (isAdminPath && token.role !== 'admin') {
      // Redirect to unauthorized page
      return NextResponse.redirect(new URL('/unauthorized', request.url));
    }
  }

  return NextResponse.next();
}

// Add the paths that should be checked by the middleware
export const config = {
  matcher: [
    '/admin/:path*',
    '/api/admin/:path*',
  ],
};