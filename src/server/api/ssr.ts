import { createServerSideHelpers } from '@trpc/react-query/server';
import type { GetServerSidePropsContext } from 'next';
import superjson from 'superjson';

import { auth } from 'server/auth';
import { ParsedUrlQuery } from 'querystring';
import { createInnerTRPCContext } from './trpc';
import { AppRouter, appRouter } from './root';

export async function ssrInit<T extends ParsedUrlQuery>({
  req,
  res,
}: GetServerSidePropsContext<T>) {
  const session = await auth(req, res);

  const ssr = createServerSideHelpers<AppRouter>({
    router: appRouter,
    ctx: createInnerTRPCContext({
      session,
    }),
    transformer: superjson,
  });

  return ssr;
}
