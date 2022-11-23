import { Inter } from '@next/font/google';
import { SessionProvider } from 'next-auth/react';

import '../styles/global.css';

const interVariable = Inter();

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <main className={interVariable.className}>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </main>
  );
}
