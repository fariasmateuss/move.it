import Image from 'next/image';

import { trpc } from 'utils/api';
import styles from 'styles/components/Profile.module.css';

export function Profile() {
  const userQuery = trpc.user.getMe.useQuery();

  return (
    <div className={styles.profileContainer}>
      {userQuery.data && (
        <>
          <Image
            src={String(userQuery?.data?.image)}
            alt={`Profile picture of ${userQuery?.data?.name}`}
            width={88}
            height={88}
            quality={80}
            priority
          />
          <div>
            <strong>{userQuery?.data?.name}</strong>
            <p>
              <img src="/icons/level.svg" alt="Level" />
              Level {userQuery?.data?.level}
            </p>
          </div>
        </>
      )}
    </div>
  );
}
