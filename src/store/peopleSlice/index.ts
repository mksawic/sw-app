import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { random } from "lodash";
import PeopleApi from "api/people";
import IPeople from "api/people/interfaces";
import { addLeftScore, addRightScore } from "store/gameSlice";

export interface PeopleState {
  status: "idle" | "loading" | "error";
  left: IPeople | null;
  right: IPeople | null;
}

const initialState: PeopleState = {
  status: "idle",
  left: null,
  right: null,
};

export const getTwoPeople = createAsyncThunk(
  "people/getTwoPeople",
  async (_, { dispatch }) => {
    const [p1, p2] = await Promise.all([
      PeopleApi.get(random(1, 82)),
      PeopleApi.get(random(1, 82)),
    ]);
    if (p1.mass > p2.mass) dispatch(addLeftScore());
    else if (p1.mass < p2.mass) dispatch(addRightScore());

    return [p1, p2];
  }
);

export const peopleSlice = createSlice({
  name: "people",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTwoPeople.fulfilled, (state, action) => {
        const [p1, p2] = action.payload;
        state.left = p1;
        state.right = p2;
        state.status = "idle";
      })
      .addCase(getTwoPeople.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getTwoPeople.rejected, (state) => {
        state.left = null;
        state.right = null;
        state.status = "error";
      });
  },
});

export default peopleSlice.reducer;
