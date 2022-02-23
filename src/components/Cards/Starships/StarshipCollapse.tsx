import React from "react";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import CardInfo from "components/Misc/CardInfo";
import IStarship from "api/starships/interfaces";

interface StarshipCollapseProps {
  data: IStarship | null;
}

const StarshipCollapse = ({ data }: StarshipCollapseProps) => {
  const { passengers, consumables, mglt, model } = data || {};
  const [expanded, setExpanded] = React.useState(false);
  const handleExpand = React.useCallback(
    () => setExpanded((prev) => !prev),
    []
  );

  return (
    <>
      <IconButton onClick={handleExpand}>
        {expanded ? <ExpandLess /> : <ExpandMore />}
      </IconButton>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <Grid container spacing={1}>
          <Grid item xs={6}>
            <CardInfo data={model} label="Model" />
          </Grid>
          <Grid item xs={6}>
            <CardInfo data={mglt} label="MGLT" />
          </Grid>
          <Grid item xs={6}>
            <CardInfo data={consumables} label="Consumables" />
          </Grid>
          <Grid item xs={6}>
            <CardInfo data={passengers} label="Passengers" />
          </Grid>
        </Grid>
      </Collapse>
    </>
  );
};

export default React.memo(StarshipCollapse);
