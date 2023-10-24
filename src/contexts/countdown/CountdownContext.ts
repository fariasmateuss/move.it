import { createContext, useContext } from 'react';

import {
  CountdownDispatchContextData,
  CountdownStateContextData,
} from './types';

export const CountdownStateContext = createContext<
  CountdownStateContextData | undefined
>(undefined);
export const CountdownDispatchContext = createContext<
  CountdownDispatchContextData | undefined
>(undefined);

export const CountdownStateProvider = CountdownStateContext.Provider;
export const CountdownDispatchProvider = CountdownDispatchContext.Provider;

export const useCountdownState = () => {
  const context = useContext(CountdownStateContext);

  if (!context) {
    throw new Error('useCountdownState must be used within CountdownProvider');
  }

  return context;
};

export const useCountdownDispatch = () => {
  const context = useContext(CountdownDispatchContext);

  if (!context) {
    throw new Error(
      'useCountdownDispatch must be used within CountdownProvider'
    );
  }

  return context;
};
