import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { random } from "lodash";
import StarshipsApi from "api/starships";
import IStarship from "api/starships/interfaces";
import { addLeftScore, addRightScore } from "store/gameSlice";

export interface StartshipsState {
  status: "idle" | "loading" | "error";
  left: IStarship | null;
  right: IStarship | null;
}

const initialState: StartshipsState = {
  status: "idle",
  left: null,
  right: null,
};

export const getTwoStarships = createAsyncThunk(
  "starships/getTwoStarships",
  async (_, { dispatch }) => {
    const [s1, s2] = await Promise.all([
      StarshipsApi.get(random(1, 36)),
      StarshipsApi.get(random(1, 36)),
    ]);
    if (s1.crew > s2.crew) dispatch(addLeftScore());
    else if (s1.crew < s2.crew) dispatch(addRightScore());

    return [s1, s2];
  }
);

export const starshipsSlice = createSlice({
  name: "starships",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTwoStarships.fulfilled, (state, action) => {
        const [s1, s2] = action.payload;
        state.left = s1;
        state.right = s2;
        state.status = "idle";
      })
      .addCase(getTwoStarships.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getTwoStarships.rejected, (state) => {
        state.left = null;
        state.right = null;
        state.status = "error";
      });
  },
});

export default starshipsSlice.reducer;
