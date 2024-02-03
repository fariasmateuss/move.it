import { useState } from 'react';
import { Rajdhani } from '@next/font/google';
import { LuX } from 'react-icons/lu';

import styles from 'styles/components/Countdown.module.css';
import {
  useCountdownDispatch,
  useCountdownState,
} from 'contexts/countdown/CountdownContext';

const rajdhaniVariable = Rajdhani({
  weight: '600',
});

export function Countdown() {
  const { minutes, seconds, hasFinished, isActive } = useCountdownState();
  const { startCountdown, resetCountdown } = useCountdownDispatch();
  const [closeHover, setCloseHover] = useState(false);

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondsLeft, secondsRight] = String(seconds)
    .padStart(2, '0')
    .split('');

  return (
    <div className={rajdhaniVariable.className}>
      <div className={styles.countdownContainer}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondsLeft}</span>
          <span>{secondsRight}</span>
        </div>
      </div>

      {hasFinished ? (
        <button
          disabled
          onClick={resetCountdown}
          type="button"
          className={styles.countdownButton}
        >
          Cycle Completed
          <img src="/icons/check-circle.svg" alt="Check Circle" />
        </button>
      ) : (
        <>
          {isActive ? (
            <button
              onClick={resetCountdown}
              type="button"
              onMouseEnter={() => setCloseHover(true)}
              onMouseLeave={() => setCloseHover(false)}
              className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
            >
              Quit
              <LuX size={24} color={closeHover ? '#ffffff' : '#666666'} />
            </button>
          ) : (
            <button
              onClick={startCountdown}
              type="button"
              className={styles.countdownButton}
            >
              Start
              <img src="/icons/play.svg" alt="Play" />
            </button>
          )}
        </>
      )}
    </div>
  );
}
