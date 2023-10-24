// eslint-disable-next-line import/no-extraneous-dependencies
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { PropsWithChildren } from 'react';
import { SessionProvider, SessionProviderProps } from 'next-auth/react';

import SignInPage from 'pages';
import { Layout } from 'components/Layout';
import { NextComponentType, NextPageContext } from 'next';

type AppProps = SessionProviderProps & {
  Component: NextComponentType<NextPageContext, unknown, unknown>;
};

/**
 * Contains the name of page components that shouldn't be a children of Layout
 */
const PAGE_LAYOUT_BLACK_LIST = [SignInPage.name];

export function AppProvider({
  children,
  session,
  Component,
}: PropsWithChildren<AppProps>) {
  const shouldRenderLayout = !PAGE_LAYOUT_BLACK_LIST.includes(Component.name);

  return (
    <SessionProvider session={session}>
      {shouldRenderLayout ? <Layout>{children}</Layout> : children}

      <ReactQueryDevtools initialIsOpen />
    </SessionProvider>
  );
}
