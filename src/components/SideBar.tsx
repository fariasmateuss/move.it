import {
  DASHBOARD_PAGE_PATH,
  LEADERBOARD_PAGE_PATH,
} from 'constants/routesPaths';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { FiHome, FiAward } from 'react-icons/fi';

import styles from 'styles/components/SideBar.module.css';

export function SideBar() {
  const route = useRouter();

  return (
    <div className={styles.sideBarContainer}>
      <Image
        src="/images/logo.png"
        alt="Move.it"
        width={48}
        height={42}
        priority
        quality={100}
      />
      <nav>
        <button
          className={
            route.pathname === DASHBOARD_PAGE_PATH ? styles.selected : ''
          }
          type="button"
          onClick={() => route.push(DASHBOARD_PAGE_PATH)}
        >
          <div
            className={
              route.pathname === DASHBOARD_PAGE_PATH ? styles.selected : ''
            }
          />
          <FiHome />
        </button>
        <button
          className={
            route.pathname === LEADERBOARD_PAGE_PATH ? styles.selected : ''
          }
          type="button"
          onClick={() => route.push(LEADERBOARD_PAGE_PATH)}
        >
          <div
            className={
              route.pathname === LEADERBOARD_PAGE_PATH ? styles.selected : ''
            }
          />
          <FiAward />
        </button>
      </nav>
    </div>
  );
}
