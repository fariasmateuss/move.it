import { useChallengeDispatch } from 'contexts/challenge/ChallengeContext';
import {
  PropsWithChildren,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import {
  CountdownDispatchProvider,
  CountdownStateProvider,
} from './CountdownContext';

let countdownTimeout: NodeJS.Timeout;

export function CountdownProvider({ children }: PropsWithChildren<unknown>) {
  const { startNewChallenge } = useChallengeDispatch();
  const [time, setTime] = useState(30 * 60);
  const [isActive, setIsActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const startCountdown = useCallback(() => {
    setIsActive(true);
  }, []);

  const resetCountdown = useCallback(() => {
    clearTimeout(countdownTimeout);
    setIsActive(false);
    setHasFinished(false);
    setTime(0.1 * 60);
  }, []);

  useEffect(() => {
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

  const countdownState = useMemo(
    () => ({
      minutes,
      seconds,
      hasFinished,
      isActive,
    }),
    [minutes, seconds, hasFinished, isActive],
  );

  const countdownDispatch = useMemo(
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
