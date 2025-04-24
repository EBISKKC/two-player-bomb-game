// src/types/game.ts

/** プレイヤー識別子 */
export type Player = 'A' | 'B'

/** 各プレイヤーのスコア */
export type Scores = Record<Player, number>

/** 各プレイヤーがドボンした回数 */
export type BombCounts = Record<Player, number>

/** ゲーム全体の状態 */
export interface GameState {
  /** まだ選択可能な数字リスト（1～12 のなかで未使用のもの） */
  availableNumbers: number[]
  /** 現在の手番プレイヤー */
  currentPlayer: Player
  /** 各プレイヤーの獲得点数 */
  scores: Scores
  /** 各プレイヤーがドボンした回数 */
  bombCounts: BombCounts
  /** 最初に設定した“ドボン”番号。まだ設定前なら null */
  bombNumber: number | null
  /** ゲーム終了フラグ */
  gameOver: boolean
  /** 終了時の勝者。引き分けは想定しないので null か Player */
  winner: Player | null
}

/** アクション定義 */
export type GameAction =
  | { type: 'RESET' }
  | { type: 'SET_BOMB'; payload: number }
  | { type: 'SELECT_NUMBER'; payload: number }

/** reducer の返り値型 */
export type GameReducer = (state: GameState, action: GameAction) => GameState

/** 初期状態 */
export const initialState: GameState = {
  availableNumbers: Array.from({ length: 12 }, (_, i) => i + 1),
  currentPlayer: 'A',
  scores: { A: 0, B: 0 },
  bombCounts: { A: 0, B: 0 },
  bombNumber: null,
  gameOver: false,
  winner: null,
}
