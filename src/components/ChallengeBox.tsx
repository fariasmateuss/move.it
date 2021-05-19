import styles from '../styles/components/ChallengeBox.module.css';

export function ChallengeBox() {
  const hasActionChallenge = true;

  return (
    <div className={styles.challegeBoxContainer}>
      {hasActionChallenge ? (
        <div className={styles.challengeActive}>
          <header>Earn 400 XP</header>

          <main>
            <img src="icons/body.svg" alt="Icon Challenge" />

            <strong>New Challenge</strong>
            <p>Get up and take a 3-minute walk</p>
          </main>

          <footer>
            <button className={styles.challengeFailedButton} type="button">
              Fail
            </button>
            <button className={styles.challengeSucceededButton} type="button">
              Done
            </button>
          </footer>
        </div>
      ) : (
        <div className={styles.challengeNotActive}>
          <strong>Start a cycle to receive challenges to complete</strong>
          <p>
            <img src="icons/level-up.svg" alt="Level Up" />
            Level up by completing challenges
          </p>
        </div>
      )}
    </div>
  );
}
