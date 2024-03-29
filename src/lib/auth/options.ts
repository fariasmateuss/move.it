import { NextAuthOptions } from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import CredentialsProvider from 'next-auth/providers/credentials';
import { SIGN_IN_PAGE_PATH } from 'constants/routes-paths';

import { env } from 'env/server.mjs';

import { exclude } from '../utils';
import { prisma } from '../prisma';

import { validatePassword } from '.';

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'text', placeholder: 'Email' },
        password: {
          label: 'Password',
          type: 'password',
          placeholder: 'Password',
        },
      },
      async authorize(credentials) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };

        const user = await prisma.user.findUnique({ where: { email } });

        if (!user) {
          throw new Error('No user found with e-mail! Please sign up...!');
        }

        if (user && user.password) {
          const checkPassword = await validatePassword(password, user.password);

          if (!checkPassword || user.email !== email) {
            throw new Error("Username or password doesn't match!");
          }

          return exclude(user, ['password']);
        }

        return null;
      },
    }),
    GithubProvider({
      clientId: env.GITHUB_ID,
      clientSecret: env.GITHUB_SECRET,
    }),
  ],
  secret: env.NEXTAUTH_SECRET,
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async redirect({ url, baseUrl }) {
      if (url.startsWith('/')) {
        return `${baseUrl}${url}`;
      }

      const urlValue = !url.includes('http')
        ? new URL('https://' + url)
        : new URL(url);

      if (urlValue.origin === baseUrl) {
        return url;
      }

      return baseUrl;
    },
    async session({ token, session }) {
      if (token) {
        session!.user!.id = token.id;
        session!.user!.name = token.name;
        session!.user!.email = token.email;
        session!.user!.image = token.picture;
      }

      return session;
    },
    async jwt({ token, user }) {
      const dbUser = await prisma.user.findUnique({
        where: {
          email: String(token.email || user.email),
        },
      });

      if (!dbUser) {
        if (user) {
          token.id = user.id;
        }
        return token;
      }

      const payload = {
        id: dbUser.id,
        name: dbUser.name,
        email: dbUser.email,
        picture: dbUser.image,
      };

      return payload;
    },
  },
};
