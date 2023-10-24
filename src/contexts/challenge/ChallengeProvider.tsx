import {
  PropsWithChildren,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';

import challenges from 'data/challenges.json';
import { trpc } from 'utils/api';
import { LevelUpModal } from 'components/LevelUpModal';

import {
  ChallengeDispatchProvider,
  ChallengeStateProvider,
} from './ChallengeContext';
import { Challenge } from './types';

export function ChallengeProvider({ children }: PropsWithChildren<unknown>) {
  const utils = trpc.useContext();
  const userQuery = trpc.user.getMe.useQuery(undefined, {
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

  const challengesCompleted = userQuery?.data?.challengesCompleted ?? 0;
  const level = userQuery?.data?.level ?? 0;
  const currentExperience = userQuery?.data?.currentExperience ?? 0;

  const userUpdateMutation = trpc.user.update.useMutation({
    async onMutate({ data }) {
      await utils.user.getMe.cancel();
      const user = utils.user.getMe.getData();
      if (!user) return;
      utils.user.getMe.setData(undefined, {
        ...user,
        ...data,
      });
    },
  });

  const [activeChallenge, setActiveChallenge] = useState<Challenge | null>(
    null
  );
  const [isLevelUpModalOpen, setIsLevelUpModalOpen] = useState(false);

  const experienceToNextLevel = Math.pow((level + 1) * 4, 2);

  useEffect(() => {
    Notification.requestPermission();
  }, []);

  const levelUp = useCallback(async () => {
    await userUpdateMutation.mutateAsync({
      data: {
        level: level + 1,
      },
    });

    setIsLevelUpModalOpen(true);
  }, [level, userUpdateMutation]);

  const closeLevelUpModal = useCallback(() => {
    setIsLevelUpModalOpen(false);
  }, []);

  const startNewChallenge = useCallback(() => {
    const rondomChallengeIndex = Math.floor(Math.random() * challenges.length);
    const challenge = challenges[rondomChallengeIndex];

    setActiveChallenge(challenge);

    const audio = new Audio('/notification.mp3').play();

    if (Notification.permission === 'granted') {
      const notification = new Notification('New challenge! 🎉', {
        body: `Worth ${challenge.amount} xp`,
      });

      return notification;
    }

    return audio;
  }, []);

  const resetChallenge = useCallback(() => {
    setActiveChallenge(null);
  }, []);

  const completedChallenge = useCallback(async () => {
    if (!activeChallenge) return;

    const { amount } = activeChallenge;

    let finalExperience = currentExperience + amount;

    if (finalExperience >= experienceToNextLevel) {
      finalExperience -= experienceToNextLevel;
      await levelUp();
    }

    await userUpdateMutation.mutateAsync({
      data: {
        currentExperience: finalExperience,
        challengesCompleted: challengesCompleted + 1,
      },
    });

    setActiveChallenge(null);
  }, [
    activeChallenge,
    challengesCompleted,
    currentExperience,
    experienceToNextLevel,
    levelUp,
    userUpdateMutation,
  ]);

  const challengeState = useMemo(
    () => ({
      level,
      currentExperience,
      challengesCompleted,
      activeChallenge,
      experienceToNextLevel,
    }),
    [
      level,
      currentExperience,
      challengesCompleted,
      activeChallenge,
      experienceToNextLevel,
    ]
  );

  const challengeDispatch = useMemo(
    () => ({
      startNewChallenge,
      levelUp,
      resetChallenge,
      completedChallenge,
      closeLevelUpModal,
    }),
    [
      startNewChallenge,
      levelUp,
      resetChallenge,
      completedChallenge,
      closeLevelUpModal,
    ]
  );

  return (
    <ChallengeStateProvider value={challengeState}>
      <ChallengeDispatchProvider value={challengeDispatch}>
        {children}

        {isLevelUpModalOpen && <LevelUpModal />}
      </ChallengeDispatchProvider>
    </ChallengeStateProvider>
  );
}
