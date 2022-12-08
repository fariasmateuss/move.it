import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import Head from 'next/head';

import { ChallengeBox } from 'components/ChallengeBox';
import { CompletedChallenges } from 'components/CompletedChallenges';
import { Countdown } from 'components/Countdown';
import { ExperienceBar } from 'components/ExperienceBar';
import { Profile } from 'components/Profile';
import { SideBar } from 'components/SideBar';

import { ChallengesProvider } from 'contexts/ChallengesContext';
import { CountdownProvider } from 'contexts/CountdownContext';
import { withSSRAuth } from 'utils/withSSRAuth';

import styles from 'styles/pages/Dashboard.module.css';

export const getServerSideProps: GetServerSideProps = withSSRAuth(async ctx => {
  const { level, currentExperience, challengesCompleted } = ctx.req.cookies;

  return {
    props: {
      level: Number(level ?? 1),
      currentExperience: Number(currentExperience ?? 0),
      challengesCompleted: Number(challengesCompleted ?? 0),
    },
  };
});

export default function Dashboard({
  level,
  currentExperience,
  challengesCompleted,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <main className="wrapper">
      <Head>
        <title>Homapage | Move.it</title>
      </Head>

      <SideBar />

      <ChallengesProvider
        level={level}
        currentExperience={currentExperience}
        challengesCompleted={challengesCompleted}
      >
        <div className={styles.container}>
          <ExperienceBar />

          <section>
            <CountdownProvider>
              <div>
                <Profile />
                <CompletedChallenges />
                <Countdown />
              </div>
              <div>
                <ChallengeBox />
              </div>
            </CountdownProvider>
          </section>
        </div>
      </ChallengesProvider>
    </main>
  );
}
