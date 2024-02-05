import Head from 'next/head';
import { InferGetServerSidePropsType } from 'next';

import { withSSRAuth } from 'utils/withSSRAuth';
import { trpc } from 'utils/api';
import { ssrInit } from 'server/api/ssr';

import styles from 'styles/pages/Leaderboard.module.css';

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
    <div className={styles.leaderboardContainer}>
      <Head>
        <title>Leaderboard | move.it</title>
      </Head>

      <header>
        <h1>Leaderboard</h1>
      </header>

      <div>
        <div className={styles.ranking}>
          <span>POSITION</span>
          <span>USER</span>
          <span>CHALLENGES</span>
          <span>EXPERIENCE</span>
        </div>
        {(usersQuery?.data ?? []).map((user, index) => (
          <div key={user.id} className={styles.position}>
            <span>{index + 1}</span>
            <div className={styles.profile}>
              <img
                src={String(user.image)}
                alt={`Profile pricture of ${user.name}`}
              />
              <div>
                <span>{user.name}</span>
                <p>
                  <img src="/icons/level.svg" alt="Level" />
                  Level {user.level}
                </p>
              </div>
            </div>
            <p>
              <span>{user.challengesCompleted}</span> completed
            </p>
            <p>
              <span>{user.currentExperience}</span> xp
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
