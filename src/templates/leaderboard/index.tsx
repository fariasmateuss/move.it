import * as React from 'react';
import Head from 'next/head';

import { RouterOutputs } from 'utils/api';

import { DataTable } from './components/data-table';
import { columns } from './components/columns';

type User = RouterOutputs['user']['getMe'];
type LeaderboardPageProps = {
  users: User[];
  isLoading: boolean;
};

export function LeaderboardPage({ users, isLoading }: LeaderboardPageProps) {
  return (
    <div className="mx-auto flex h-screen max-w-5xl flex-shrink flex-grow flex-col">
      <Head>
        <title>Leaderboard | move.it</title>
      </Head>

      <h1 className="my-10 self-start text-4xl font-semibold">Leaderboard</h1>

      <DataTable isLoading={isLoading} data={users} columns={columns} />
    </div>
  );
}
