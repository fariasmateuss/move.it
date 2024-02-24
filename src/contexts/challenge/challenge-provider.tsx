import * as React from 'react';

import { trpc } from 'utils/trpc';
import { useLevelUpMutation } from 'hooks/use-level-up';
import { useChallengeCompletedMutation } from 'hooks/use-challenge-completed';
import { LevelUpDialog } from 'components/level-up-dialog';
import challenges from 'data/challenges.json';

import {
  ChallengeDispatchProvider,
  ChallengeStateProvider,
} from './challenge-context';

import { Challenge } from './types';

export function ChallengeProvider({
  children,
}: React.PropsWithChildren<unknown>) {
  const utils = trpc.useUtils();
  const userData = utils.user.getMe.getData();

  const challengesCompleted = userData?.challengesCompleted ?? 0;
  const level = userData?.level ?? 1;
  const currentExperience = userData?.currentExperience ?? 0;

  const levelUpMutation = useLevelUpMutation();
  const challengeCompletedMutation = useChallengeCompletedMutation();

  const [activeChallenge, setActiveChallenge] =
    React.useState<Challenge | null>(null);
  const [isLevelUpModalOpen, setIsLevelUpModalOpen] = React.useState(false);

  const experienceToNextLevel = Math.pow((level + 1) * 4, 2);

  React.useEffect(() => {
    Notification.requestPermission();
  }, []);

  const levelUp = React.useCallback(() => {
    levelUpMutation.mutate({
      data: {
        level: level + 1,
      },
    });

    setIsLevelUpModalOpen(true);
  }, [level, levelUpMutation]);

  const closeLevelUpModal = React.useCallback(() => {
    setIsLevelUpModalOpen(prevState => !prevState);
  }, []);

  const startNewChallenge = React.useCallback(() => {
    const rondomChallengeIndex = Math.floor(Math.random() * challenges.length);
    const challenge = challenges[rondomChallengeIndex];

    setActiveChallenge(challenge);

    const audio = new Audio('/sounds/notification.mp3').play();

    if (Notification.permission === 'granted') {
      const notification = new Notification('New challenge! 🎉', {
        body: `Worth ${challenge.amount} xp`,
      });

      return notification;
    }

    return audio;
  }, []);

  const resetChallenge = React.useCallback(() => {
    setActiveChallenge(null);
  }, []);

  const completedChallenge = React.useCallback(() => {
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

  const challengeState = React.useMemo(
    () => ({
      level,
      currentExperience,
      challengesCompleted,
      activeChallenge,
      experienceToNextLevel,
      isLevelUpModalOpen,
    }),
    [
      level,
      currentExperience,
      challengesCompleted,
      activeChallenge,
      experienceToNextLevel,
      isLevelUpModalOpen,
    ],
  );

  const challengeDispatch = React.useMemo(
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
    ],
  );

  return (
    <ChallengeStateProvider value={challengeState}>
      <ChallengeDispatchProvider value={challengeDispatch}>
        {children}

        <LevelUpDialog
          level={level}
          onOpenChange={setIsLevelUpModalOpen}
          open={isLevelUpModalOpen}
        />
      </ChallengeDispatchProvider>
    </ChallengeStateProvider>
  );
}
