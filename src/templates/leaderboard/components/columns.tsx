import { ColumnDef } from '@tanstack/react-table';

import { Icons } from 'components/icons';
import { Avatar, AvatarFallback, AvatarImage } from 'components/ui/avatar';
import { RouterOutputs } from 'utils/api';
import { getInitials } from 'utils/get-initials';

export type User = RouterOutputs['user']['getMe'];

export const columns: ColumnDef<User>[] = [
  {
    id: 'level',
    cell: info => (
      <span className="flex h-full items-center justify-center border-r-4 border-solid border-background text-2xl">
        {info.row.index + 1}
      </span>
    ),
    header: () => <span className="uppercase">Position</span>,
  },
  {
    id: 'name',
    cell: info => {
      const fullName = info.row.original?.name ?? '';
      const initials = getInitials(fullName);
      const avatarUrl = info.row.original?.image ?? '';

      return (
        <div className="flex items-center p-4 text-title">
          <Avatar className="mr-4 h-16 w-16">
            <AvatarImage src={avatarUrl} alt={fullName} />

            <AvatarFallback>{initials}</AvatarFallback>
          </Avatar>

          <div className="inline-flex flex-col items-start text-title">
            <span className="text-xl font-bold">{info.row.original?.name}</span>

            <span className="flex items-center gap-1">
              <Icons.level className="mr-1" />

              <p>Level {info.row.original?.level}</p>
            </span>
          </div>
        </div>
      );
    },
    header: () => <span className="uppercase">User</span>,
  },
  {
    id: 'challengesCompleted',
    cell: info => (
      <p>
        <span className="text-primary">
          {info.row.original?.challengesCompleted}
        </span>{' '}
        completed
      </p>
    ),
    header: () => <span className="uppercase">Challenges</span>,
  },
  {
    id: 'currentExperience',
    cell: info => (
      <p>
        <span className="text-primary">
          {info.row.original?.currentExperience}
        </span>{' '}
        xp
      </p>
    ),
    header: () => <span className="uppercase">Experience</span>,
  },
];
