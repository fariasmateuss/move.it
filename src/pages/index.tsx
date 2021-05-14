import Head from 'next/head';
import { CompletedChallenges } from '../components/CompletedChallenges';
import { Countdown } from '../components/Countdown';
import { ExperienceBar } from '../components/ExperienceBar';
import { Profile } from '../components/Profile';

import styles from '../styles/Pages/Home.module.css';

export default function Home(): JSX.Element {
  return (
    <main>
      <Head>
        <title>Homapage | Move.it</title>
      </Head>

      <div className={styles.container}>
        <ExperienceBar />

        <section>
          <div>
            <Profile />
            <CompletedChallenges />
            <Countdown />
          </div>

          <div />
        </section>
      </div>
    </main>
  );
}
