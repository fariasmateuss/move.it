import { ExperienceBar } from '../components/ExperienceBar';

import styles from '../styles/Pages/Home.module.css';

export default function Home(): JSX.Element {
  return (
    <div className={styles.container}>
      <ExperienceBar />
    </div>
  );
}
