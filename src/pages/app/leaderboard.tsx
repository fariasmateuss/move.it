import Head from 'next/head';
import { InferGetServerSidePropsType } from 'next';

import { withSSRAuth } from 'utils/withSSRAuth';
import { trpc } from 'utils/api';
import { ssrInit } from 'server/api/ssr';
import { Icons } from 'components/icons';

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
  const usersQuery = trpc.user.allUsersOrderByLevel.useQuery(undefined, {
    initialData: users,
  });

  return (
    <div className="mx-auto flex h-screen max-w-5xl flex-shrink flex-grow flex-col">
      <Head>
        <title>Leaderboard | move.it</title>
      </Head>

      <h1 className="my-10 self-start text-4xl font-semibold">Leaderboard</h1>

      <div>
        <div className="mb-6 grid grid-cols-ranking font-bold text-text brightness-150">
          <span>POSITION</span>
          <span>USER</span>
          <span>CHALLENGES</span>
          <span>EXPERIENCE</span>
        </div>
        {(usersQuery?.data ?? []).map((user, index) => (
          <div
            key={user.id}
            className="mb-2 grid grid-cols-ranking items-center rounded-sm bg-white"
          >
            <span className="flex h-full items-center justify-center border-r-4 border-solid border-background text-2xl">
              {index + 1}
            </span>
            <div className="flex items-center p-4 text-title">
              <img
                src={String(user.image)}
                alt={`Profile pricture of ${user.name}`}
                className="rounded-f mr-4 h-16 w-16 rounded-full"
              />
              <div className="inline-flex flex-col items-start text-title">
                <span className="text-xl font-bold">{user.name}</span>
                <span className="flex items-center gap-1">
                  <Icons.level className="mr-1" />
                  <p>Level {user.level}</p>
                </span>
              </div>
            </div>
            <p>
              <span className="text-primary">{user.challengesCompleted}</span>{' '}
              completed
            </p>
            <p>
              <span className="text-primary">{user.currentExperience}</span> xp
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
