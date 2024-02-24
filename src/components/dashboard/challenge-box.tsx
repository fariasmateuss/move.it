import {
  useChallengeDispatch,
  useChallengeState,
} from 'contexts/challenge/challenge-context';
import { useCountdownDispatch } from 'contexts/countdown/countdown-context';

import { Button } from 'components/ui/button';
import { Icons } from 'components/icons';

const shouldRenderChallengeIcon = (typeOfChallenge: string) =>
  typeOfChallenge === 'body' ? <Icons.body /> : <Icons.eye />;

export function ChallengeBox() {
  const { activeChallenge } = useChallengeState();
  const { resetChallenge, completedChallenge } = useChallengeDispatch();
  const { resetCountdown } = useCountdownDispatch();

  const handleChallengeSucceeded = () => {
    completedChallenge();
    resetCountdown();
  };

  const handleChallengeFailed = () => {
    resetChallenge();
    resetCountdown();
  };

  return (
    <div className="flex h-full flex-col items-center justify-center rounded-lg bg-white p-6 text-center shadow-custom-blur">
      {activeChallenge ? (
        <div className="flex h-full flex-col">
          <header className="border-1 border-b border-solid border-gray-300 pb-6 pl-8 pr-8 text-xl font-semibold text-primary">
            Earn {activeChallenge.amount} XP
          </header>

          <main className="flex flex-grow flex-col items-center justify-center">
            {shouldRenderChallengeIcon(activeChallenge.type)}

            <strong className="mb-6 ml-4 mr-4 mt-6 text-3xl font-semibold text-title">
              New Challenge
            </strong>
            <p className="leading-6">{activeChallenge.description}</p>
          </main>

          <footer className="grid grid-cols-2 gap-4">
            <Button
              className="flex h-12 items-center justify-center bg-red-500 text-base font-semibold text-white hover:bg-red-600"
              type="button"
              onClick={handleChallengeFailed}
            >
              Fail
            </Button>
            <Button
              className="flex h-12 items-center justify-center bg-green-500 text-base font-semibold text-white hover:bg-green-600"
              type="button"
              onClick={handleChallengeSucceeded}
            >
              Done
            </Button>
          </footer>
        </div>
      ) : (
        <div className="flex flex-col items-center">
          <strong className="text-2xl font-medium leading-6">
            Start a cycle to receive challenges to complete
          </strong>
          <p className="mt-12 flex w-2/3 flex-col items-center leading-6">
            <Icons.levelUp className="mb-4" />
            Level up by completing challenges
          </p>
        </div>
      )}
    </div>
  );
}
