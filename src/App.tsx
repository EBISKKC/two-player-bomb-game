// App.tsx
import React from 'react'
import { useGame } from './hooks/useGame'
import { ScoreBoard } from './components/ScoreBoard'
import { GameBoard } from './components/GameBoard'
import { ControlPanel } from './components/ControlPanel'

const App: React.FC = () => {
  const { state, dispatch } = useGame()

  return (
    <div>
      <h1>Two Player Bomb Game</h1>
      <ScoreBoard state={state} />
      <GameBoard state={state} dispatch={dispatch} />
      <ControlPanel dispatch={dispatch} />
    </div>
  )
}

export default App
