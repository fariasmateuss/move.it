import {
  useChallengeDispatch,
  useChallengeState,
} from 'contexts/challenge/ChallengeContext';

import styles from 'styles/components/LevelUpModal.module.css';

export function LevelUpModal() {
  const { closeLevelUpModal } = useChallengeDispatch();
  const { level } = useChallengeState();

  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <header>{level}</header>

        <strong>Congratulations</strong>
        <p>You have reached a new level</p>

        <button type="button" onClick={closeLevelUpModal}>
          <img src="/icons/close.svg" alt="Close" />
        </button>
      </div>
    </div>
  );
}
