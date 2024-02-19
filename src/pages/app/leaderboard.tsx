import * as React from 'react';
import { createServerSideHelpers } from '@trpc/react-query/server';
import { useRouter } from 'next/router';
import type { GetStaticProps, InferGetStaticPropsType } from 'next';

import { RouterOutputs, trpc } from 'utils/api';
import { LeaderboardPage } from 'templates/leaderboard';
import { type AppRouter, appRouter } from 'server/api/root';
import SuperJSON from 'superjson';
import { createInnerTRPCContext } from 'server/api/trpc';

export type User = RouterOutputs['user']['getMe'];

export const getStaticProps = (async () => {
  const session = null;
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
      trpcState: helper.dehydrate(),
      users,
    },
  };
}) satisfies GetStaticProps<{ users: User[] }>;

export default function Leaderboard({
  users,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const { data } = trpc.user.allUsersOrderByLevel.useQuery(undefined, {
    initialData: users,
  });

  const router = useRouter();

  return <LeaderboardPage isLoading={router.isFallback} users={data} />;
}
