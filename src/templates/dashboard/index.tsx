import Head from 'next/head';

import { ChallengeBox } from './components/challenge-box';
import { CompletedChallenges } from './components/completed-challenges';
import { Countdown } from './components/countdown';
import { ExperienceBar } from './components/experience-bar';
import { Profile } from './components/profile';

export function DashboardPage() {
  return (
    <div className="mx-auto flex h-screen max-w-[992px] flex-col px-9 py-8">
      <Head>
        <title>Homapage | Move.it</title>
      </Head>
      <ExperienceBar />
      <section className="grid flex-1 grid-cols-2 content-center gap-24">
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
