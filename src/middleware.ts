import { withAuth } from 'next-auth/middleware';

import { SIGN_IN_PAGE_PATH } from 'constants/routes-paths';

export default withAuth({
  pages: {
    signIn: SIGN_IN_PAGE_PATH,
    signOut: SIGN_IN_PAGE_PATH,
  },
});

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
