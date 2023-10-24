export type CountdownStateContextData = {
  minutes: number;
  seconds: number;
  hasFinished: boolean;
  isActive: boolean;
};

export type CountdownDispatchContextData = {
  startCountdown: () => void;
  resetCountdown: () => void;
};
