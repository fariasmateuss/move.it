import * as React from 'react';
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from '@tanstack/react-table';

import { type RouterOutputs } from 'utils/api';

import { DataTablePagination } from './data-table-pagination';
import { skaleton } from './skaleton-table';

export type User = RouterOutputs['user']['getMe'];

type DataTableProps<TData, TValue> = {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  isLoading: boolean;
};

export function DataTable<TData, TValue>({
  columns,
  data,
  isLoading,
}: DataTableProps<TData, TValue>) {
  const tableData = React.useMemo(
    () => (isLoading ? Array(7).fill({}) : data),
    [isLoading, data],
  );

  const tableColumns = React.useMemo(
    () => (isLoading ? skaleton : columns),
    [isLoading, columns, skaleton],
  );

  const table = useReactTable({
    data: tableData,
    columns: tableColumns,
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
    <React.Fragment>
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

      <DataTablePagination table={table} />
    </React.Fragment>
  );
}
