import React from "react";
import Grid from "@mui/material/Grid";
import { useAppSelector } from "store";
import Score from "./Score";

const GameScore = () => {
  const { leftScore, rightScore } = useAppSelector((state) => state.game);
  return (
    <Grid container spacing={1}>
      <Grid item xs={6}>
        <Score score={leftScore} label="Light Side" />
      </Grid>
      <Grid item xs={6}>
        <Score score={rightScore} label="Dark Side" />
      </Grid>
    </Grid>
  );
};

export default React.memo(GameScore);
