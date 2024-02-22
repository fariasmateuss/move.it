import type { GetServerSideProps } from 'next';
import { createServerSideHelpers } from '@trpc/react-query/server';
import SuperJSON from 'superjson';

import { CountdownProvider } from 'contexts/countdown/countdown-provider';
import { ChallengeProvider } from 'contexts/challenge/challenge-provider';
import { DashboardPage } from 'templates/dashboard';
import { auth } from 'server/auth';
import { type AppRouter, appRouter } from 'server/api/root';
import { createInnerTRPCContext } from 'server/api/trpc';

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

export default function Dashboard() {
  return (
    <ChallengeProvider>
      <CountdownProvider>
        <DashboardPage />
      </CountdownProvider>
    </ChallengeProvider>
  );
}
