import { GetServerSideProps } from 'next';
import { signIn } from 'next-auth/react';
import { AiFillGithub } from 'react-icons/ai';

import { withSSRGuest } from 'utils/withSSRGuest';
import { DASHBOARD_PAGE_PATH } from 'constants/routesPaths';
import styles from 'styles/pages/Home.module.css';

export const getServerSideProps: GetServerSideProps = withSSRGuest(
  async () => ({
    props: {},
  })
);

export default function SignIn() {
  return (
    <div className={styles.container}>
      <img
        className={styles.background}
        src="/images/background.svg"
        alt="Move.it"
      />

      <section className={styles.wrap}>
        <div className={styles.form}>
          <img src="/images/logo-full.svg" alt="Move.it" />
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
          </div>
        </div>
      </section>
    </div>
  );
}
