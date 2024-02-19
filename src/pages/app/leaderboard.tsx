import * as React from 'react';
import { InferGetServerSidePropsType } from 'next';

import { withSSRAuth } from 'utils/with-ssr-auth';
import { trpc } from 'utils/api';
import { ssrInit } from 'server/api/ssr';
import { LeaderboardPage } from 'templates/leaderboard';

export const getServerSideProps = withSSRAuth(async ctx => {
  const ssr = await ssrInit(ctx);
  const users = await ssr.user.allUsersOrderByLevel.fetch();

  return {
    props: {
      trpcState: ssr.dehydrate(),
      users,
    },
  };
});

export default function Leaderboard({
  users,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const { data } = trpc.user.allUsersOrderByLevel.useQuery(undefined, {
    initialData: users,
  });

  return <LeaderboardPage users={data} />;
}
