import { getSession } from 'next-auth/react';
import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetServerSidePropsResult,
} from 'next';

import { DASHBOARD_PAGE_PATH } from 'constants/routesPaths';

export function withSSRGuest<T extends { [key: string]: unknown }>(
  fn: GetServerSideProps<T>
) {
  return async (
    ctx: GetServerSidePropsContext
  ): Promise<GetServerSidePropsResult<T>> => {
    const session = await getSession(ctx);

    if (session) {
      return {
        redirect: {
          destination: DASHBOARD_PAGE_PATH,
          permanent: false,
        },
      };
    }

    // eslint-disable-next-line no-return-await
    return await fn(ctx);
  };
}
