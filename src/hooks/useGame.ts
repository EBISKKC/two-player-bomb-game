import { useReducer } from 'react';
import { reducer } from '../utils/gameLogic';
import { initialState } from '../types/game';

export const useGame = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return { state, dispatch };
};