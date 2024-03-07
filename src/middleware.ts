import { TOKEN_STORAGE_KEY } from 'constants/cookies-storage';
import { DASHBOARD_PAGE_PATH, SIGN_IN_PAGE_PATH } from 'constants/routes-paths';
import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const isOnSignInPage = request.nextUrl.pathname === SIGN_IN_PAGE_PATH;
  const isAuthenticated = request.cookies.has(TOKEN_STORAGE_KEY);

  if (isOnSignInPage && isAuthenticated) {
    return NextResponse.redirect(new URL(DASHBOARD_PAGE_PATH, request.nextUrl));
  }

  if (!isOnSignInPage && !isAuthenticated) {
    return NextResponse.redirect(new URL(SIGN_IN_PAGE_PATH, request.nextUrl));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all paths except for:
     * 1. /api/ routes
     * 2. /_next/ (Next.js internals)
     * 4. /_static (inside /public)
     * 5. /_vercel (Vercel internals)
     * 6. images (inside /public)
     * 7. sounds (inside /public)
     * 8. Static files (e.g. /favicon.ico, /sitemap.xml, /robots.txt, etc.)
     */
    '/((?!api/|_next/|_static|_vercel|images|sounds[\\w-]+\\.\\w+).*)',
  ],
};
