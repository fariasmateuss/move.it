import { PropsWithChildren } from 'react';

import { SideBar } from './sidebar';

export function Layout({ children }: PropsWithChildren<unknown>) {
  return (
    <main className="flex">
      <SideBar />
      {children}
    </main>
  );
}
