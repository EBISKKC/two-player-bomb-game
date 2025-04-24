import React from 'react';
import { GameState } from '../types/game';

interface ScoreBoardProps {
  state: GameState;
}

export const ScoreBoard: React.FC<ScoreBoardProps> = ({ state }) => {
  return (
    <div style={{ margin: '16px 0', textAlign: 'center' }}>
      <h2>Game Status</h2>
      <div>Player A: {state.scores.A} pts / Bombs: {state.bombCounts.A}</div>
      <div>Player B: {state.scores.B} pts / Bombs: {state.bombCounts.B}</div>
      <div>Turn: Player {state.currentPlayer}</div>
      {state.gameOver && <div><strong>Winner: Player {state.winner}</strong></div>}
    </div>
  );
};