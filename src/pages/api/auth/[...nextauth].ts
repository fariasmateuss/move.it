import NextAuth from 'next-auth/next';

import { authOptions } from 'lib/auth/options';

export default NextAuth(authOptions);
