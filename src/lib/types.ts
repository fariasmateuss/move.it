import { DefaultSession } from 'next-auth';

declare module 'next-auth' {
  /**  Returned by `useSession`, `getSession`, returned by the `session` callback */
  interface Session {
    user: {
      id?: string;
    } & DefaultSession['user'];
  }
}

declare module 'next-auth/jwt' {
  /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
  interface JWT {
    id: string;
  }
}
