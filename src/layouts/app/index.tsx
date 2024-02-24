import * as React from 'react';

import { SideBar } from './components/sidebar';

export function AppLayout({ children }: React.PropsWithChildren<unknown>) {
  return (
    <main className="flex">
      <SideBar />

      {children}
    </main>
  );
}
