import Head from 'next/head';
import { GetServerSideProps } from 'next';
import { useSession } from 'next-auth/react';
import { ChallengesProvider } from '../contexts/ChallengesContext';
import { SideBar } from '../components/SideBar';

import styles from '../styles/pages/Leaderboard.module.css';

interface LeaderboardProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export default function Leaderboard({
  level,
  currentExperience,
  challengesCompleted,
}: LeaderboardProps) {
  const { data: session } = useSession();

  return (
    <div className="wrapper">
      <ChallengesProvider
        level={level}
        currentExperience={currentExperience}
        challengesCompleted={challengesCompleted}
      >
        <SideBar />

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
            <div className={styles.position}>
              <span>1</span>
              <div className={styles.profile}>
                <img src={session?.user.image} alt={session?.user.name} />
                <div>
                  <span>{session?.user.name}</span>
                  <p>
                    <img src="icons/level.svg" alt="Level" />
                    Level {level}
                  </p>
                </div>
              </div>
              <p>
                <span>{challengesCompleted}</span> completed
              </p>
              <p>
                <span>{currentExperience}</span> xp
              </p>
            </div>
          </div>
        </div>
      </ChallengesProvider>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async ctx => {
  const { level, currentExperience, challengesCompleted } = ctx.req.cookies;

  return {
    props: {
      level: Number(level ?? 1),
      currentExperience: Number(currentExperience ?? 0),
      challengesCompleted: Number(challengesCompleted ?? 0),
    },
  };
};
