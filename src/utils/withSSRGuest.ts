import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetServerSidePropsResult,
} from 'next';

import { DASHBOARD_PAGE_PATH } from 'constants/routesPaths';
import { auth } from 'server/auth';

export function withSSRGuest<T extends { [key: string]: unknown }>(
  fn: GetServerSideProps<T>
) {
  return async (
    ctx: GetServerSidePropsContext
  ): Promise<GetServerSidePropsResult<T>> => {
    const session = await auth(ctx.req, ctx.res);

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
