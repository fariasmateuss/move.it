import { FiHome, FiAward } from 'react-icons/fi';
import { useRouter } from 'next/router';

import styles from '../styles/components/SideBar.module.css';

export function SideBar() {
  const route = useRouter();

  return (
    <div className={styles.sideBarContainer}>
      <img src="/logo.png" alt="Move.it" />
      <nav>
        <button
          className={route.pathname === '/home' ? styles.selected : ''}
          type="button"
          onClick={() => route.push('/')}
        >
          <div className={route.pathname === '/' ? styles.selected : ''} />
          <FiHome />
        </button>
        <button
          className={route.pathname === '/leaderboard' ? styles.selected : ''}
          type="button"
          onClick={() => route.push('/leaderboard')}
        >
          <div
            className={route.pathname === '/leaderboard' ? styles.selected : ''}
          />
          <FiAward />
        </button>
      </nav>
    </div>
  );
}
