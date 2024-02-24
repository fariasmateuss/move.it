import * as React from 'react';

import { useChallengeDispatch } from 'contexts/challenge/challenge-context';
import {
  CountdownDispatchProvider,
  CountdownStateProvider,
} from './countdown-context';

let countdownTimeout: NodeJS.Timeout;

export function CountdownProvider({
  children,
}: React.PropsWithChildren<unknown>) {
  const { startNewChallenge } = useChallengeDispatch();
  const [time, setTime] = React.useState(0.1 * 60);
  const [isActive, setIsActive] = React.useState(false);
  const [hasFinished, setHasFinished] = React.useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const startCountdown = React.useCallback(() => {
    setIsActive(true);
  }, []);

  const resetCountdown = React.useCallback(() => {
    clearTimeout(countdownTimeout);
    setIsActive(false);
    setHasFinished(false);
    setTime(0.1 * 60);
  }, []);

  React.useEffect(() => {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    } else if (isActive && time === 0) {
      setHasFinished(true);
      setIsActive(false);
      startNewChallenge();
    }
  }, [isActive, time, startNewChallenge]);

  const countdownState = React.useMemo(
    () => ({
      minutes,
      seconds,
      hasFinished,
      isActive,
    }),
    [minutes, seconds, hasFinished, isActive],
  );

  const countdownDispatch = React.useMemo(
    () => ({ startCountdown, resetCountdown }),
    [startCountdown, resetCountdown],
  );

  return (
    <CountdownStateProvider value={countdownState}>
      <CountdownDispatchProvider value={countdownDispatch}>
        {children}
      </CountdownDispatchProvider>
    </CountdownStateProvider>
  );
}
