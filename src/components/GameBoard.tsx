import React from 'react';
import { GameState, GameAction } from '../types/game';
import { NumberCard } from './NumberCard';

interface GameBoardProps {
  state: GameState;
  dispatch: React.Dispatch<GameAction>;
}

export const GameBoard: React.FC<GameBoardProps> = ({ state, dispatch }) => {
  const handleClick = (num: number) => {
    if (state.bombNumber === null) {
      dispatch({ type: 'SET_BOMB', payload: num });
    } else {
      dispatch({ type: 'SELECT_NUMBER', payload: num });
    }
  };

  if (state.bombNumber === null) {
    return (
      <div style={{ textAlign: 'center', marginTop: 20 }}>
        <h2>Select a Bomb Number</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', maxWidth: 300, margin: '0 auto' }}>
          {state.availableNumbers.map(n => (
            <NumberCard key={n} number={n} disabled={state.gameOver} onClick={handleClick} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div style={{ textAlign: 'center', marginTop: 20 }}>
      <h2>Player {state.currentPlayer}, Select a Number</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', maxWidth: 300, margin: '0 auto' }}>
        {state.availableNumbers.map(n => (
          <NumberCard key={n} number={n} disabled={state.gameOver} onClick={handleClick} />
        ))}
      </div>
    </div>
  );
};