import { Inter } from '@next/font/google';
import { SessionProvider, SessionProviderProps } from 'next-auth/react';
import type { AppType } from 'next/app';

import { trpc } from 'utils/api';
import 'styles/global.css';

const interVariable = Inter({
  variable: '--inter-font',
});

const App: AppType<SessionProviderProps> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <main className={interVariable.className}>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </main>
  );
};

export default trpc.withTRPC(App);
