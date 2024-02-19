// eslint-disable-next-line import/no-extraneous-dependencies
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { PropsWithChildren, useState } from 'react';
import { NextComponentType, NextPageContext } from 'next';
import { SessionProvider, SessionProviderProps } from 'next-auth/react';

import { Layout } from 'components/layout';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import SignInPage from 'pages';

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
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
            refetchOnMount: false,
          },
        },
      }),
  );

  return (
    <QueryClientProvider client={queryClient}>
      <SessionProvider session={session}>
        {shouldRenderLayout ? <Layout>{children}</Layout> : children}

        <ReactQueryDevtools initialIsOpen position="bottom-right" />
      </SessionProvider>
    </QueryClientProvider>
  );
}
