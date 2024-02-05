import Image from 'next/image';
import { signOut } from 'next-auth/react';
import { useRouter } from 'next/router';
import { LuHome, LuAward, LuLogOut } from 'react-icons/lu';

import {
  DASHBOARD_PAGE_PATH,
  LEADERBOARD_PAGE_PATH,
} from 'constants/routesPaths';

import styles from 'styles/components/SideBar.module.css';
import clsx from 'clsx';

const SIDEBAR_NAVIGATION = [
  { path: DASHBOARD_PAGE_PATH, Icon: LuHome },
  { path: LEADERBOARD_PAGE_PATH, Icon: LuAward },
];

export function SideBar() {
  const route = useRouter();

  const handleLogOut = () => signOut();

  return (
    <nav className={styles.sideBarContainer}>
      <Image
        src="/images/logo.png"
        alt="Move.it"
        width={48}
        height={42}
        priority
        quality={100}
        className={styles.sideBarLogo}
      />
      <div className={styles.sideBarNav}>
        {SIDEBAR_NAVIGATION.map(({ path, Icon }) => (
          <button
            className={clsx(route.pathname === path && styles.selected)}
            type="button"
            onClick={() => route.push(path)}
          >
            <div className={clsx(route.pathname === path && styles.selected)} />
            <Icon size={32} />
          </button>
        ))}
      </div>

      <button
        type="button"
        className={styles.logOutButton}
        onClick={handleLogOut}
      >
        <LuLogOut size={32} color="var(--red)" />
      </button>
    </nav>
  );
}
