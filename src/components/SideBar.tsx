import { FiHome, FiAward } from 'react-icons/fi';
import { useState } from 'react';
import { useRouter } from 'next/router';

import styles from '../styles/components/SideBar.module.css';

export function SideBar() {
  const [selectedButton, setSelectedButton] = useState('home');
  const route = useRouter();

  function handleNavigateToHome(routePath: string) {
    setSelectedButton(routePath);
    route.push('/');
  }

  function handleNavigateToLeaderboard(routePath: string) {
    setSelectedButton(routePath);
    route.push('/leaderboard');
  }

  return (
    <div className={styles.sideBarContainer}>
      <img src="logo.png" alt="Move.it" />
      <nav>
        <button
          className={route.pathname === '/home' ? styles.selected : ''}
          type="button"
          onClick={() => handleNavigateToHome('/')}
        >
          <div className={route.pathname === '/' ? styles.selected : ''} />
          <FiHome />
        </button>
        <button
          className={route.pathname === '/leaderboard' ? styles.selected : ''}
          type="button"
          onClick={() => handleNavigateToLeaderboard('award')}
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
