import { PropsWithChildren } from 'react';

import styles from 'styles/components/Layout.module.css';

import { SideBar } from './SideBar';

export function Layout({ children }: PropsWithChildren<unknown>) {
  return (
    <main className={styles.container}>
      <SideBar />
      {children}
    </main>
  );
}
