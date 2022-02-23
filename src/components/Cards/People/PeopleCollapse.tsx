import React from "react";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import CardInfo from "components/Misc/CardInfo";
import IPeople from "api/people/interfaces";

interface PeopleCollapseProps {
  data: IPeople | null;
}

const PeopleCollapse = ({ data }: PeopleCollapseProps) => {
  const { height, gender, birthYear, eyeColor } = data || {};
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
            <CardInfo
              data={height ? `${height} cm` : undefined}
              label="Height"
            />
          </Grid>
          <Grid item xs={6}>
            <CardInfo data={gender} label="Gender" />
          </Grid>
          <Grid item xs={6}>
            <CardInfo data={birthYear} label="Birth" />
          </Grid>
          <Grid item xs={6}>
            <CardInfo data={eyeColor} label="Eyes" />
          </Grid>
        </Grid>
      </Collapse>
    </>
  );
};

export default React.memo(PeopleCollapse);
