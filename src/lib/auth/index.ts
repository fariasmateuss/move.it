import {
  NextApiRequest,
  NextApiResponse,
  type GetServerSidePropsContext,
} from 'next';
import { getServerSession } from 'next-auth';

import { authOptions } from 'lib/auth/options';

export function auth(
  ...args:
    | [GetServerSidePropsContext['req'], GetServerSidePropsContext['res']]
    | [NextApiRequest, NextApiResponse]
    | []
) {
  return getServerSession(...args, authOptions);
}
