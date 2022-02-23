import React from "react";
import Grid from "@mui/material/Grid";
import { useAppSelector } from "store";
import StarshipCard from "./StarshipCard";

const StarshipCards = () => {
  const left = useAppSelector((state) => state.starships.left);
  const right = useAppSelector((state) => state.starships.right);

  const isLeftWinner = !!left && !!right && left?.crew > right?.crew;
  const isRightWinner = !!left && !!right && left?.crew < right?.crew;

  return (
    <Grid container spacing={1} title="StarshipCardsWrapper">
      <Grid item xs={12} sm={6}>
        <StarshipCard data={left} isWinner={isLeftWinner} />
      </Grid>
      <Grid item xs={12} sm={6}>
        <StarshipCard data={right} isWinner={isRightWinner} />
      </Grid>
    </Grid>
  );
};

export default React.memo(StarshipCards);
