import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';

import styles from '../styles/components/Profile.module.css';

export function Profile() {
  const { level } = useContext(ChallengesContext);

  return (
    <div className={styles.profileContainer}>
      <img
        src="https://avatars.githubusercontent.com/u/55674918?v=4"
        alt="Mateus's Profile"
      />

      <div>
        <strong>Mateus V. Farias</strong>
        <p>Level {level}</p>
      </div>
    </div>
  );
}
