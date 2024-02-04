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
};

export type ChallengeDispatchContextData = {
  startNewChallenge: () => Promise<void> | Notification;
  levelUp: () => Promise<void>;
  resetChallenge: () => void;
  completedChallenge: () => Promise<void>;
  closeLevelUpModal: () => void;
};
