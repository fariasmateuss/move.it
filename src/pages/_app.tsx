import type { AppType } from 'next/app';
import { Inter } from '@next/font/google';
import { SessionProviderProps } from 'next-auth/react';

import { trpc } from 'utils/api';
import { AppProvider } from 'contexts';
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
      <AppProvider session={session} Component={Component}>
        <Component {...pageProps} />
      </AppProvider>
    </main>
  );
};

export default trpc.withTRPC(App);
