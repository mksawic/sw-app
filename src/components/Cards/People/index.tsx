import React from "react";
import Grid from "@mui/material/Grid";
import { useAppSelector } from "store";
import PeopleCard from "./PeopleCard";
import { shallowEqual } from "react-redux";

const PeopleCards = () => {
  const left = useAppSelector((state) => state.people.left, shallowEqual);
  const right = useAppSelector((state) => state.people.right, shallowEqual);

  const isLeftWinner = !!left && !!right && left?.mass > right?.mass;
  const isRightWinner = !!left && !!right && left?.mass < right?.mass;

  return (
    <Grid container spacing={1} title="PeopleCardsWrapper">
      <Grid item xs={12} sm={6}>
        <PeopleCard data={left} isWinner={isLeftWinner} />
      </Grid>
      <Grid item xs={12} sm={6}>
        <PeopleCard data={right} isWinner={isRightWinner} />
      </Grid>
    </Grid>
  );
};

export default React.memo(PeopleCards);
