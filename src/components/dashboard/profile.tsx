import { trpc } from 'utils/trpc';
import { useChallengeState } from 'contexts/challenge/challenge-context';
import { Avatar, AvatarFallback, AvatarImage } from 'components/ui/avatar';

import { Icons } from 'components/icons';

export function Profile() {
  const { level } = useChallengeState();

  const utils = trpc.useUtils();
  const userData = utils.user.getMe.getData();

  const avatar = String(userData?.image);

  return (
    <div className="flex items-center">
      {userData && (
        <>
          <Avatar className="mr-6 h-auto w-[88px]">
            <AvatarImage
              src={avatar}
              alt={`Profile picture ${userData.name}`}
            />
            <AvatarFallback>{userData.name}</AvatarFallback>
          </Avatar>

          <div>
            <strong className="text-2xl font-semibold text-title">
              {userData.name}
            </strong>
            <div className="flex items-center justify-start">
              <Icons.level className="mr-2" />
              <p className="mr-2 text-base">Level {level}</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
