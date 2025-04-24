import { GameState, GameAction } from '../types/game';

export const reducer = (state: GameState, action: GameAction): GameState => {
  switch (action.type) {
    case 'RESET':
      return {
        ...state,
        availableNumbers: Array.from({ length: 12 }, (_, i) => i + 1),
        currentPlayer: 'A',
        scores: { A: 0, B: 0 },
        bombCounts: { A: 0, B: 0 },
        bombNumber: null,
        gameOver: false,
        winner: null,
      };

    case 'SET_BOMB': {
      if (state.bombNumber !== null) return state;
      return { ...state, bombNumber: action.payload };
    }

    case 'SELECT_NUMBER': {
      if (state.gameOver || state.bombNumber === null) return state;

      const num = action.payload;
      const nextAvailable = state.availableNumbers.filter(n => n !== num);
      const isBomb = num === state.bombNumber;
      const player = state.currentPlayer;

      const newScores = { ...state.scores };
      const newBombCounts = { ...state.bombCounts };

      if (isBomb) {
        newBombCounts[player]++;
        newScores[player] = 0; // ドボンの場合、スコアをリセット
      } else {
        newScores[player] += num;
      }

      // 勝敗判定
      let gameOver = false;
      let winner: typeof player | null = null;

      if (newScores[player] >= 40) {
        gameOver = true;
        winner = player;
      } else if (newBombCounts[player] >= 3) {
        gameOver = true;
        winner = player === 'A' ? 'B' : 'A';
      } else if (nextAvailable.length === 0) {
        gameOver = true;
        if (newScores.A > newScores.B) {
          winner = 'A';
        } else if (newScores.B > newScores.A) {
          winner = 'B';
        }
      }

      return {
        ...state,
        availableNumbers: nextAvailable,
        scores: newScores,
        bombCounts: newBombCounts,
        currentPlayer: gameOver ? state.currentPlayer : (player === 'A' ? 'B' : 'A'),
        gameOver,
        winner,
      };
    }

    default:
      return state;
  }
};