import { Rajdhani } from 'next/font/google';

import {
  useCountdownDispatch,
  useCountdownState,
} from 'contexts/countdown/countdown-context';

import { Button } from './ui/button';
import { Icons } from './icons';

const rajdhaniVariable = Rajdhani({
  weight: '600',
  subsets: ['latin'],
});

export function Countdown() {
  const { minutes, seconds, hasFinished, isActive } = useCountdownState();
  const { startCountdown, resetCountdown } = useCountdownDispatch();

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondsLeft, secondsRight] = String(seconds)
    .padStart(2, '0')
    .split('');

  return (
    <div className={rajdhaniVariable.className}>
      <div className="flex items-center text-title">
        <div className="flex flex-grow justify-evenly border-r-4 bg-white text-center text-9xl shadow-custom-blur">
          <span className="flex-grow border-r border-solid border-gray-line">
            {minuteLeft}
          </span>
          <span className="flex-grow border-l border-solid border-gray-line">
            {minuteRight}
          </span>
        </div>
        <span className="space-x-2 text-8xl">:</span>
        <div className="flex flex-grow justify-evenly border-r-4 bg-white text-center text-9xl shadow-custom-blur">
          <span className="flex-grow border-r border-solid border-gray-line">
            {secondsLeft}
          </span>
          <span className="flex-grow border-l border-solid border-gray-line">
            {secondsRight}
          </span>
        </div>
      </div>

      {hasFinished ? (
        <Button
          disabled
          onClick={resetCountdown}
          type="button"
          className="mt-8 h-20 w-full rounded-sm border-0 bg-white text-xl font-semibold text-title transition duration-200 disabled:opacity-100"
        >
          Cycle Completed
          <Icons.checkCircle className="ml-2 text-base" />
        </Button>
      ) : (
        <>
          {isActive ? (
            <Button
              onClick={resetCountdown}
              type="button"
              className="mt-8 h-20 w-full rounded-sm border-0 bg-white text-xl font-semibold text-title transition duration-200 hover:bg-red-500 hover:text-white"
            >
              Stop
              <Icons.close className="ml-2 text-base" />
            </Button>
          ) : (
            <Button
              onClick={startCountdown}
              type="button"
              className="mt-8 h-20 w-full rounded-sm border-0 bg-primary text-xl font-semibold text-white transition duration-200"
            >
              Start
              <Icons.play className="ml-2 text-base" />
            </Button>
          )}
        </>
      )}
    </div>
  );
}
