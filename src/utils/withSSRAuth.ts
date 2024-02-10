import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetServerSidePropsResult,
} from 'next';

import { SIGN_IN_PAGE_PATH } from 'constants/routesPaths';

import { auth } from 'server/auth';

export function withSSRAuth<P extends { [key: string]: unknown }>(
  fn: GetServerSideProps<P>,
) {
  return async (
    ctx: GetServerSidePropsContext,
  ): Promise<GetServerSidePropsResult<P>> => {
    const session = await auth(ctx.req, ctx.res);

    if (!session) {
      return {
        redirect: {
          destination: SIGN_IN_PAGE_PATH,
          permanent: false,
        },
      };
    }

    try {
      return await fn(ctx);
    } catch {
      return {
        redirect: {
          destination: SIGN_IN_PAGE_PATH,
          permanent: false,
        },
      };
    }
  };
}
