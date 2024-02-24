import type { GetServerSideProps } from 'next';
import { createServerSideHelpers } from '@trpc/react-query/server';
import SuperJSON from 'superjson';
import Head from 'next/head';

import { CountdownProvider } from 'contexts/countdown/countdown-provider';
import { ChallengeProvider } from 'contexts/challenge/challenge-provider';
import { ChallengeBox } from 'components/dashboard/challenge-box';
import { CompletedChallenges } from 'components/dashboard/completed-challenges';
import { Countdown } from 'components/dashboard/countdown';
import { ExperienceBar } from 'components/dashboard/experience-bar';
import { Profile } from 'components/dashboard/profile';
import { type AppRouter, appRouter } from 'server/root';
import { createInnerTRPCContext } from 'server/trpc';
import { auth } from 'lib/auth';

export const getServerSideProps = (async ctx => {
  const session = await auth(ctx.req, ctx.res);

  const helper = createServerSideHelpers<AppRouter>({
    router: appRouter,
    ctx: createInnerTRPCContext({
      session,
    }),
    transformer: SuperJSON,
  });

  await helper.user.getMe.fetch();

  return {
    props: {
      session,
      trpcState: helper.dehydrate(),
    },
  };
}) satisfies GetServerSideProps;

function DashboardContent() {
  return (
    <div className="mx-auto flex h-screen max-w-[992px] flex-col px-9 py-8">
      <Head>
        <title>Homapage | move.it</title>
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

export default function Dashboard() {
  return (
    <ChallengeProvider>
      <CountdownProvider>
        <DashboardContent />
      </CountdownProvider>
    </ChallengeProvider>
  );
}
