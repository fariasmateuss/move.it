import { useChallengeState } from 'contexts/challenge/ChallengeContext';

import styles from 'styles/components/CompletedChallenges.module.css';

export function CompletedChallenges() {
  const { challengesCompleted } = useChallengeState();

  return (
    <div className={styles.completedChallengesContainer}>
      <span>Challenges completed</span>
      <span>{challengesCompleted}</span>
    </div>
  );
}
