import React from 'react';
import { GameBoard } from './components/GameBoard';
import { ScoreBoard } from './components/ScoreBoard';
import { ControlPanel } from './components/ControlPanel';

function App() {
  return (
    <div style={{ padding: 24 }}>
      <h1>Two Player Bomb Game</h1>
      <ScoreBoard />
      <GameBoard />
      <ControlPanel />
    </div>
  );
}

export default App;