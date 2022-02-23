import React from "react";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import IStarship from "api/starships/interfaces";
import StarshipCollapse from "./StarshipCollapse";
import CardContainer from "components/Misc/CardContainer";

interface StarshipCardProps {
  data: IStarship | null;
  isWinner?: boolean | null;
}

const StarshipCard = ({ data, isWinner }: StarshipCardProps) => {
  const { name, crew } = data || {};
  return (
    <CardContainer isWinner={isWinner}>
      <CardHeader
        title={name || "-"}
        titleTypographyProps={{ component: "h3", title: "StarshipCardName" }}
        sx={{ padding: 1, textAlign: "center" }}
      />
      <CardContent sx={{ textAlign: "center", paddingTop: 0 }}>
        <Typography color="text.secondary" variant="caption">
          Crew:
        </Typography>
        <Typography variant="h6" component="h4" title="StarshipCardCrew">
          {data ? (crew ? crew : "unknown") : "-"}
        </Typography>
        <StarshipCollapse data={data} />
      </CardContent>
    </CardContainer>
  );
};

export default React.memo(StarshipCard);
