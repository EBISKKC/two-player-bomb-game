import React from 'react';
import { GameAction } from '../types/game';

interface ControlPanelProps {
  dispatch: React.Dispatch<GameAction>;
}

export const ControlPanel: React.FC<ControlPanelProps> = ({ dispatch }) => {
  const handleRestart = () => {
    dispatch({ type: 'RESET' });
  };

  return (
    <div style={{ marginTop: 16 }}>
      <button onClick={handleRestart}>
        Restart
      </button>
    </div>
  );
};