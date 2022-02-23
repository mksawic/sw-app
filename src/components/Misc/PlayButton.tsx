import React, { useCallback } from "react";
import LoadingButton from "@mui/lab/LoadingButton";
import { useAppDispatch, useAppSelector, useLoaderSelector } from "store";
import { getTwoPeople } from "store/peopleSlice";
import { getTwoStarships } from "store/starshipsSlice";
import { GameType } from "store/gameSlice";
import { AsyncThunkAction } from "@reduxjs/toolkit";

const ActionByType: { [key in GameType]: AsyncThunkAction<any[], void, {}> } = {
  [GameType.People]: getTwoPeople(),
  [GameType.Starships]: getTwoStarships(),
};

const PlayButton = () => {
  const isLoading = useLoaderSelector();
  const type = useAppSelector((state) => state.game.type);
  const dispatch = useAppDispatch();
  const handleClick = useCallback(() => {
    dispatch(ActionByType[type]);
  }, [dispatch, type]);

  return (
    <LoadingButton
      onClick={handleClick}
      variant="contained"
      size="large"
      fullWidth
      loading={isLoading}
      disabled={isLoading}
    >
      Play
    </LoadingButton>
  );
};

export default React.memo(PlayButton);
