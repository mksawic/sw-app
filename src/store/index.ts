import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import gameReducer from "./gameSlice";
import peopleReducer from "./peopleSlice";
import starshipsReducer from "./starshipsSlice";

export const store = configureStore({
  reducer: {
    game: gameReducer,
    people: peopleReducer,
    starships: starshipsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useLoaderSelector = () =>
  useAppSelector(({ people, starships }) => {
    return people.status === "loading" || starships.status === "loading";
  });

export const useErrorSelector = () =>
  useAppSelector(({ people, starships }) => {
    return people.status === "error" || starships.status === "error";
  });
