import React, { useState } from 'react';
import { useGame } from '../hooks/useGame';

export const ControlPanel: React.FC = () => {
  const { dispatch } = useGame();
  const [selectedBomb, setSelectedBomb] = useState<number | null>(null);

  const confirmBomb = () => {
    if (selectedBomb !== null) {
      dispatch({ type: 'SET_BOMB', payload: selectedBomb });
      setSelectedBomb(null); // Reset selection after confirmation
    }
  };

  return (
    <div style={{ marginTop: 16 }}>
      <button onClick={() => dispatch({ type: 'RESET' })}>
        Restart
      </button>
      <div style={{ marginTop: 16 }}>
        <label>
          Select Bomb Number:
          <input
            type="number"
            value={selectedBomb ?? ''}
            onChange={(e) => setSelectedBomb(Number(e.target.value))}
            min={1}
            max={12}
          />
        </label>
        <button onClick={confirmBomb} disabled={selectedBomb === null}>
          Confirm Bomb
        </button>
      </div>
    </div>
  );
};