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
import { useLevelUpMutation } from 'hooks/useLevelup';
import { useChallengeCompletedMutation } from 'hooks/useChallengeCompleted';

import {
  ChallengeDispatchProvider,
  ChallengeStateProvider,
} from './ChallengeContext';
import { Challenge } from './types';

export function ChallengeProvider({ children }: PropsWithChildren<unknown>) {
  const utils = trpc.useUtils();
  const userData = utils.user.getMe.getData();

  const challengesCompleted = userData?.challengesCompleted ?? 0;
  const level = userData?.level ?? 1;
  const currentExperience = userData?.currentExperience ?? 0;

  const levelUpMutation = useLevelUpMutation();
  const challengeCompletedMutation = useChallengeCompletedMutation();

  const [activeChallenge, setActiveChallenge] = useState<Challenge | null>(
    null
  );
  const [isLevelUpModalOpen, setIsLevelUpModalOpen] = useState(false);

  const experienceToNextLevel = Math.pow((level + 1) * 4, 2);

  useEffect(() => {
    Notification.requestPermission();
  }, []);

  const levelUp = useCallback(() => {
    levelUpMutation.mutate({
      data: {
        level: level + 1,
      },
    });

    setIsLevelUpModalOpen(true);
  }, [level, levelUpMutation]);

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

  const completedChallenge = useCallback(() => {
    if (!activeChallenge) return;

    const { amount } = activeChallenge;

    let finalExperience = currentExperience + amount;

    if (finalExperience >= experienceToNextLevel) {
      finalExperience -= experienceToNextLevel;
      levelUp();
    }

    challengeCompletedMutation.mutate({
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
    challengeCompletedMutation,
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
