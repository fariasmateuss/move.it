import {
  useChallengeDispatch,
  useChallengeState,
} from 'contexts/challenge/ChallengeContext';

import styles from 'styles/components/ChallengeBox.module.css';
import { useCountdownDispatch } from 'contexts/countdown/CountdownContext';

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
    <div className={styles.challegeBoxContainer}>
      {activeChallenge ? (
        <div className={styles.challengeActive}>
          <header>Earn {activeChallenge.amount} XP</header>

          <main>
            <img
              src={`/icons/${activeChallenge.type}.svg`}
              alt="Icon Challenge"
            />

            <strong>New Challenge</strong>
            <p>{activeChallenge.description}</p>
          </main>

          <footer>
            <button
              className={styles.challengeFailedButton}
              type="button"
              onClick={handleChallengeFailed}
            >
              Fail
            </button>
            <button
              className={styles.challengeSucceededButton}
              type="button"
              onClick={handleChallengeSucceeded}
            >
              Done
            </button>
          </footer>
        </div>
      ) : (
        <div className={styles.challengeNotActive}>
          <strong>Start a cycle to receive challenges to complete</strong>
          <p>
            <img src="/icons/level-up.svg" alt="Level Up" />
            Level up by completing challenges
          </p>
        </div>
      )}
    </div>
  );
}
