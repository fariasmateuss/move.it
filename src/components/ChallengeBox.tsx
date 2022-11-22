import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { CountdownContext } from '../contexts/CountdownContext';

import styles from '../styles/components/ChallengeBox.module.css';

export function ChallengeBox() {
  const { activeChallenge, resetChallenge, completedChallenge } =
    useContext(ChallengesContext);

  const { resetCountdown } = useContext(CountdownContext);

  function handleChallengeSucceeded() {
    completedChallenge();
    resetCountdown();
  }

  function handleChallengeFailed() {
    resetChallenge();
    resetCountdown();
  }

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
