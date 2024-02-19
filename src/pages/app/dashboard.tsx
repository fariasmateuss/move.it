import { GetServerSideProps } from 'next';
import Head from 'next/head';

import { CountdownProvider } from 'contexts/countdown/countdown-provider';
import { ChallengeProvider } from 'contexts/challenge/challenge-provider';
import { withSSRAuth } from 'utils/with-ssr-auth';
import { ssrInit } from 'server/api/ssr';
import { DashboardPage } from 'templates/dashboard';

export const getServerSideProps: GetServerSideProps = withSSRAuth(async ctx => {
  const ssr = await ssrInit(ctx);
  await ssr.user.getMe.fetch();

  return {
    props: {
      trpcState: ssr.dehydrate(),
    },
  };
});

export default function Dashboard() {
  return (
    <ChallengeProvider>
      <CountdownProvider>
        <DashboardPage />
      </CountdownProvider>
    </ChallengeProvider>
  );
}
