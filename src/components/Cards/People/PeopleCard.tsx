import React from "react";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import IPeople from "api/people/interfaces";
import PeopleCollapse from "./PeopleCollapse";
import CardContainer from "components/Misc/CardContainer";

interface PeopleCardProps {
  data: IPeople | null;
  isWinner?: boolean | null;
}

const PeopleCard = ({ data, isWinner }: PeopleCardProps) => {
  const { name, mass } = data || {};
  return (
    <CardContainer isWinner={isWinner}>
      <CardHeader
        title={name || "-"}
        titleTypographyProps={{ component: "h3", title: "PeopleCardName" }}
        sx={{ padding: 1, textAlign: "center" }}
      />
      <CardContent sx={{ textAlign: "center", paddingTop: 0 }}>
        <Typography color="text.secondary" variant="caption">
          Mass:
        </Typography>
        <Typography variant="h6" component="h4" title="PeopleCardMass">
          {data ? (mass ? `${mass} kg` : "unknown") : "-"}
        </Typography>
        <PeopleCollapse data={data} />
      </CardContent>
    </CardContainer>
  );
};

export default React.memo(PeopleCard);
