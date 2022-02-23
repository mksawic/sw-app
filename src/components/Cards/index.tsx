import React from "react";
import { useAppSelector } from "store";
import { GameType } from "store/gameSlice";
import PeopleCards from "./People";
import StarshipCards from "./Starships";

const Cards = () => {
  const { type } = useAppSelector((state) => state.game);
  switch (type) {
    case GameType.People:
      return <PeopleCards />;
    case GameType.Starships:
      return <StarshipCards />;
    default:
      return null;
  }
};

export default React.memo(Cards);
