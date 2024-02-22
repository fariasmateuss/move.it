import * as React from 'react';
import { createServerSideHelpers } from '@trpc/react-query/server';
import type { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import SuperJSON from 'superjson';

import { RouterOutputs, trpc } from 'utils/api';
import { LeaderboardPage } from 'templates/leaderboard';
import { type AppRouter, appRouter } from 'server/api/root';
import { createInnerTRPCContext } from 'server/api/trpc';
import { auth } from 'server/auth';

export type User = RouterOutputs['user']['getMe'];

export const getServerSideProps = (async ctx => {
  const session = await auth(ctx.req, ctx.res);

  const helper = createServerSideHelpers<AppRouter>({
    router: appRouter,
    ctx: createInnerTRPCContext({
      session,
    }),
    transformer: SuperJSON,
  });

  const users = await helper.user.allUsersOrderByLevel.fetch();

  return {
    props: {
      session,
      trpcState: helper.dehydrate(),
      users,
    },
  };
}) satisfies GetServerSideProps<{ users: User[] }>;

export default function Leaderboard({
  users,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const { data, isFetching } = trpc.user.allUsersOrderByLevel.useQuery(
    undefined,
    {
      initialData: users,
    },
  );

  return <LeaderboardPage isLoading={isFetching} users={data} />;
}
