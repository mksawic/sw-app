import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export enum GameType {
  People,
  Starships,
}

export interface GameState {
  type: GameType;
  leftScore: number;
  rightScore: number;
}

const initialState: GameState = {
  type: GameType.People,
  leftScore: 0,
  rightScore: 0,
};

export const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    setGameType: (state, action: PayloadAction<GameType>) => {
      state.type = action.payload;
    },
    addRightScore: (state) => {
      state.rightScore += 1;
    },
    addLeftScore: (state) => {
      state.leftScore += 1;
    },
  },
});

export const { setGameType, addLeftScore, addRightScore } = gameSlice.actions;
export default gameSlice.reducer;
