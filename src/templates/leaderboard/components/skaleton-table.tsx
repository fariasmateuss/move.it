import { ColumnDef } from '@tanstack/react-table';
import { Icons } from 'components/icons';
import { Skeleton } from 'components/ui/skeleton';
import { RouterOutputs } from 'utils/api';

export type User = RouterOutputs['user']['getMe'];

export const skaleton: ColumnDef<User>[] = [
  {
    id: 'level',
    cell: ({ row }) => (
      <span className="flex h-full items-center justify-center border-r-4 border-solid border-background text-2xl">
        {row.index + 1}
      </span>
    ),
    header: () => <span className="uppercase">Position</span>,
  },
  {
    id: 'name',
    cell: () => (
      <div className="flex items-center p-4 text-title">
        <Skeleton className="mr-4 h-16 w-16 rounded-full" />

        <div className="inline-flex flex-col items-start space-y-1 text-title">
          <Skeleton className="h-4 w-40" />

          <span className="flex items-center gap-1">
            <Skeleton className="h-4 w-36" />
          </span>
        </div>
      </div>
    ),
    header: () => <span className="uppercase">User</span>,
  },
  {
    id: 'challengesCompleted',
    cell: () => <Skeleton className="h-4 w-32" />,
    header: () => <span className="uppercase">Challenges</span>,
  },
  {
    id: 'currentExperience',
    cell: () => <Skeleton className="h-4 w-12" />,
    header: () => <span className="uppercase">Experience</span>,
  },
];
