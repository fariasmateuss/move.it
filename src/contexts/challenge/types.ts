export type Challenge = {
  type: string;
  description: string;
  amount: number;
};

export type ChallengeStateContextData = {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
  activeChallenge: Challenge | null;
  experienceToNextLevel: number;
  isLevelUpModalOpen: boolean;
};

export type ChallengeDispatchContextData = {
  startNewChallenge: () => Promise<void> | Notification;
  levelUp: () => void;
  resetChallenge: () => void;
  completedChallenge: () => void;
  closeLevelUpModal: () => void;
};
