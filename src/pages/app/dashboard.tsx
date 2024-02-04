import { GetServerSideProps } from 'next';
import Head from 'next/head';

import { ChallengeBox } from 'components/ChallengeBox';
import { CompletedChallenges } from 'components/CompletedChallenges';
import { Countdown } from 'components/Countdown';
import { ExperienceBar } from 'components/ExperienceBar';
import { Profile } from 'components/Profile';

import { CountdownProvider } from 'contexts/countdown/CountdownProvider';
import { ChallengeProvider } from 'contexts/challenge/ChallengeProvider';
import { withSSRAuth } from 'utils/withSSRAuth';
import { ssrInit } from 'server/api/ssr';

import styles from 'styles/pages/Dashboard.module.css';

export const getServerSideProps: GetServerSideProps = withSSRAuth(async ctx => {
  const ssr = await ssrInit(ctx);
  await ssr.user.getMe.prefetch();

  return {
    props: {
      trpcState: ssr.dehydrate(),
    },
  };
});

function DashboardContent() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Homapage | Move.it</title>
      </Head>
      <ExperienceBar />
      <section>
        <div>
          <Profile />
          <CompletedChallenges />
          <Countdown />
        </div>
        <div>
          <ChallengeBox />
        </div>
      </section>
    </div>
  );
}

export default function DashboardContainer() {
  return (
    <ChallengeProvider>
      <CountdownProvider>
        <DashboardContent />
      </CountdownProvider>
    </ChallengeProvider>
  );
}
