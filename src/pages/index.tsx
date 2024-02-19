import * as React from 'react';
import { GetServerSideProps } from 'next';

import { withSSRGuest } from 'utils/with-ssr-guest';
import { SignInPage } from 'templates/signin';

export const getServerSideProps: GetServerSideProps = withSSRGuest(
  async () => ({
    props: {},
  }),
);

export default function SignIn() {
  return <SignInPage />;
}
