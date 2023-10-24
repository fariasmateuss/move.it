import { GetServerSideProps } from 'next';
import { signIn } from 'next-auth/react';
import { AiFillGithub, AiFillGoogleSquare } from 'react-icons/ai';

import { withSSRGuest } from 'utils/withSSRGuest';

import styles from 'styles/pages/Home.module.css';
import { DASHBOARD_PAGE_PATH } from 'constants/routesPaths';

export const getServerSideProps: GetServerSideProps = withSSRGuest(
  async () => ({
    props: {},
  })
);

export default function SignIn() {
  return (
    <div className={styles.container}>
      <img className={styles.background} src="/background.svg" alt="" />

      <section className={styles.wrap}>
        <div className={styles.form}>
          <img src="/logo-full.svg" alt="" />
          <h1>Welcome</h1>
          <p>👋 Sign in to get started</p>
          <div>
            <button
              type="button"
              onClick={() =>
                signIn('github', { callbackUrl: DASHBOARD_PAGE_PATH })
              }
            >
              <AiFillGithub /> Continue with GitHub
            </button>

            <button
              type="button"
              onClick={() =>
                signIn('google', { callbackUrl: DASHBOARD_PAGE_PATH })
              }
            >
              <AiFillGoogleSquare /> Continue with Google
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
