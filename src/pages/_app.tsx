import { Inter } from '@next/font/google';

import '../styles/global.css';

const interVariable = Inter();

export default function App({ Component, pageProps: { ...pageProps } }) {
  return (
    <main className={interVariable.className}>
      <Component {...pageProps} />
    </main>
  );
}
