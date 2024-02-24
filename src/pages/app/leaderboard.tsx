import * as React from 'react';
import { createServerSideHelpers } from '@trpc/react-query/server';
import type { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import SuperJSON from 'superjson';
import Head from 'next/head';

import { RouterOutputs, trpc } from 'utils/trpc';
import { type AppRouter, appRouter } from 'server/root';
import { createInnerTRPCContext } from 'server/trpc';
import { DataTable } from 'components/leaderboard/data-table';
import { columns } from 'components/leaderboard/columns';
import { auth } from 'lib/auth';

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

  return (
    <div className="mx-auto flex h-screen max-w-5xl flex-shrink flex-grow flex-col">
      <Head>
        <title>Leaderboard | move.it</title>
      </Head>

      <h1 className="my-10 self-start text-4xl font-semibold">Leaderboard</h1>

      <DataTable isLoading={isFetching} data={users} columns={columns} />
    </div>
  );
}
