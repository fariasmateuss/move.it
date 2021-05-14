import styles from '../styles/Components/CompletedChallenges.module.css';

export function CompletedChallenges(): JSX.Element {
  return (
    <div className={styles.completedChallengesContainer}>
      <span>Completed challenges</span>
      <span>5</span>
    </div>
  );
}
