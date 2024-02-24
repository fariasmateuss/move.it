// eslint-disable-next-line import/no-extraneous-dependencies
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import * as React from 'react';
import { NextComponentType, NextPageContext } from 'next';
import { SessionProvider, SessionProviderProps } from 'next-auth/react';

import { AppLayout } from 'layouts/app';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { ProgressBar } from 'components/progress-bar';
import SignInPage from 'pages';
import { Toaster } from 'components/ui/toaster';

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
}: React.PropsWithChildren<AppProps>) {
  const shouldRenderLayout = !PAGE_LAYOUT_BLACK_LIST.includes(Component.name);

  const [queryClient] = React.useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnMount: false,
            refetchOnWindowFocus: false,
          },
        },
      }),
  );

  return (
    <QueryClientProvider client={queryClient}>
      <SessionProvider session={session}>
        {shouldRenderLayout ? <AppLayout>{children}</AppLayout> : children}

        <Toaster />
        <ProgressBar />
        <ReactQueryDevtools initialIsOpen position="bottom-right" />
      </SessionProvider>
    </QueryClientProvider>
  );
}
