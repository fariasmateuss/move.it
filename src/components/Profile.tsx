import Image from 'next/image';

import { trpc } from 'utils/api';
import { useChallengeState } from 'contexts/challenge/ChallengeContext';
import styles from 'styles/components/Profile.module.css';

export function Profile() {
  const utils = trpc.useUtils();
  const userData = utils.user.getMe.getData();
  const { level } = useChallengeState();

  return (
    <div className={styles.profileContainer}>
      {userData && (
        <>
          <Image
            src={String(userData.image)}
            alt={`Profile picture of ${userData?.name}`}
            width={88}
            height={88}
            quality={80}
            priority
          />
          <div>
            <strong>{userData.name}</strong>
            <p>
              <img src="/icons/level.svg" alt="Level" />
              Level {level}
            </p>
          </div>
        </>
      )}
    </div>
  );
}
