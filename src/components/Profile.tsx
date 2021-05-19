import styles from '../styles/components/Profile.module.css';

export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img
        src="https://avatars.githubusercontent.com/u/55674918?v=4"
        alt="Mateus's Profile"
      />

      <div>
        <strong>Mateus V. Farias</strong>
        <p>Level 4</p>
      </div>
    </div>
  );
}
