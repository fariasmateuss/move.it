import { createContext, useContext } from 'react';
import {
  ChallengeDispatchContextData,
  ChallengeStateContextData,
} from './types';

export const ChallengeStateContext = createContext<
  ChallengeStateContextData | undefined
>(undefined);
export const ChallengeDispatchContext = createContext<
  ChallengeDispatchContextData | undefined
>(undefined);

export const ChallengeStateProvider = ChallengeStateContext.Provider;
export const ChallengeDispatchProvider = ChallengeDispatchContext.Provider;

export const useChallengeState = () => {
  const context = useContext(ChallengeStateContext);

  if (!context) {
    throw new Error('useChallengeState must be used within ChallengeProvider');
  }

  return context;
};

export const useChallengeDispatch = () => {
  const context = useContext(ChallengeDispatchContext);

  if (!context) {
    throw new Error(
      'useChallengeDispatch must be used within ChallengeProvider',
    );
  }

  return context;
};
