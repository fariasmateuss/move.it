import { TOKEN_STORAGE_KEY } from 'constants/cookies-storage';
import { DASHBOARD_PAGE_PATH, SIGN_IN_PAGE_PATH } from 'constants/routesPaths';
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
    '/((?!api|_next/static|_next/image|.*\\.png$|.*\\.svg$|callback).*)',
  ],
};
