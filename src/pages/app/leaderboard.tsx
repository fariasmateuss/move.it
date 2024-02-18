import * as React from 'react';
import Head from 'next/head';
import { InferGetServerSidePropsType } from 'next';
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from '@tanstack/react-table';

import { withSSRAuth } from 'utils/with-ssr-auth';
import { getInitials } from 'utils/get-initials';
import { RouterOutputs, trpc } from 'utils/api';
import { ssrInit } from 'server/api/ssr';
import { Icons } from 'components/icons';
import { Avatar, AvatarFallback, AvatarImage } from 'components/ui/avatar';
import { Button } from 'components/ui/button';

export type User = RouterOutputs['user']['getMe'];

const columnHelper = createColumnHelper<User>();

const columns = [
  columnHelper.accessor('level', {
    cell: info => (
      <span className="flex h-full items-center justify-center border-r-4 border-solid border-background text-2xl">
        {info.row.index + 1}
      </span>
    ),
    header: () => <span className="uppercase">Position</span>,
  }),
  columnHelper.accessor('name', {
    cell: info => {
      const fullName = info.getValue() ?? '';
      const initials = getInitials(fullName);
      const avatarUrl = info.row.original?.image ?? '';

      return (
        <div className="flex items-center p-4 text-title">
          <Avatar className="mr-4 h-16 w-16">
            <AvatarImage src={avatarUrl} alt={fullName} />

            <AvatarFallback>{initials}</AvatarFallback>
          </Avatar>

          <div className="inline-flex flex-col items-start text-title">
            <span className="text-xl font-bold">{info.getValue()}</span>

            <span className="flex items-center gap-1">
              <Icons.level className="mr-1" />

              <p>Level {info.row.getValue('level')}</p>
            </span>
          </div>
        </div>
      );
    },
    header: () => <span className="uppercase">User</span>,
  }),
  columnHelper.accessor('challengesCompleted', {
    cell: info => (
      <p>
        <span className="text-primary">{info.getValue()}</span> completed
      </p>
    ),
    header: () => <span className="uppercase">Challenges</span>,
  }),
  columnHelper.accessor('currentExperience', {
    cell: info => (
      <p>
        <span className="text-primary">{info.getValue()}</span> xp
      </p>
    ),
    header: () => <span className="uppercase">Experience</span>,
  }),
];

export const getServerSideProps = withSSRAuth(async ctx => {
  const ssr = await ssrInit(ctx);
  const users = await ssr.user.allUsersOrderByLevel.fetch();

  return {
    props: {
      trpcState: ssr.dehydrate(),
      users,
    },
  };
});

export default function Leaderboard({
  users,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const usersQuery = trpc.user.allUsersOrderByLevel.useQuery(undefined, {
    initialData: users,
  });

  const table = useReactTable({
    data: usersQuery?.data ?? [],
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    initialState: {
      pagination: {
        pageIndex: 0,
        pageSize: 7,
      },
    },
  });

  return (
    <div className="mx-auto flex h-screen max-w-5xl flex-shrink flex-grow flex-col">
      <Head>
        <title>Leaderboard | move.it</title>
      </Head>

      <h1 className="my-10 self-start text-4xl font-semibold">Leaderboard</h1>

      <div>
        {table.getHeaderGroups().map(headerGroup => (
          <div
            key={headerGroup.id}
            className="mb-6 grid grid-cols-ranking font-bold text-text brightness-150"
          >
            {headerGroup.headers.map(header => (
              <span key={header.id}>
                {header.isPlaceholder
                  ? null
                  : flexRender(
                      header.column.columnDef.header,
                      header.getContext(),
                    )}
              </span>
            ))}
          </div>
        ))}

        {table.getRowModel().rows.length
          ? table.getRowModel().rows.map(row => (
              <div
                key={row.id}
                className="mb-2 grid grid-cols-ranking items-center rounded-sm bg-white"
              >
                {row.getVisibleCells().map(cell => (
                  <React.Fragment key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </React.Fragment>
                ))}
              </div>
            ))
          : null}
      </div>

      <div className="flex items-center justify-end space-x-2 py-4">
        <Button
          className="bg-white text-title hover:bg-white hover:opacity-80"
          size="sm"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Previous
        </Button>
        <Button
          className="bg-white text-title hover:bg-white hover:opacity-80"
          size="sm"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Next
        </Button>
      </div>
    </div>
  );
}
