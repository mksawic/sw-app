import React, { useCallback } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useAppDispatch, useAppSelector } from "store";
import { GameType, setGameType } from "store/gameSlice";

const SelectGameType = () => {
  const type = useAppSelector((state) => state.game.type);
  const dispatch = useAppDispatch();

  const handleChange = useCallback(
    (e: SelectChangeEvent<GameType>) => {
      if (typeof e.target.value === "number")
        dispatch(setGameType(e.target.value));
    },
    [dispatch]
  );

  return (
    <FormControl fullWidth>
      <InputLabel id="game-type-select-label">Type</InputLabel>
      <Select
        labelId="game-type-select-label"
        id="game-type-select"
        value={type}
        label="Type"
        onChange={handleChange}
      >
        <MenuItem value={GameType.People}>People</MenuItem>
        <MenuItem value={GameType.Starships}>Starships</MenuItem>
      </Select>
    </FormControl>
  );
};

export default React.memo(SelectGameType);
