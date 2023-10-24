import Head from 'next/head';
import { type GetServerSideProps } from 'next';

import { withSSRAuth } from 'utils/withSSRAuth';
import { trpc } from 'utils/api';

import styles from 'styles/pages/Leaderboard.module.css';

export const getServerSideProps: GetServerSideProps = withSSRAuth(async () => ({
  props: {},
}));

export default function Leaderboard() {
  const userQuery = trpc.user.getMe.useQuery();

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
        {userQuery.isSuccess && (
          <div className={styles.position}>
            <span>1</span>
            <div className={styles.profile}>
              <img
                src={String(userQuery.data?.image)}
                alt={`Profile pricture of ${userQuery.data?.name}`}
              />
              <div>
                <span>{userQuery.data?.name}</span>
                <p>
                  <img src="/icons/level.svg" alt="Level" />
                  Level {userQuery.data?.level}
                </p>
              </div>
            </div>
            <p>
              <span>{userQuery.data?.challengesCompleted}</span> completed
            </p>
            <p>
              <span>{userQuery.data?.currentExperience}</span> xp
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
