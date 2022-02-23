import React from "react";
import Typography from "@mui/material/Typography";

interface ScoreProps {
  score: number;
  label: string;
}

const Score = ({ score, label }: ScoreProps) => {
  return (
    <>
      <Typography variant="h3" component="h1" align="center" title="Score">
        {score}
      </Typography>
      <Typography color="text.secondary" align="center">
        {label}
      </Typography>
    </>
  );
};

export default React.memo(Score, (prev, next) => prev.score === next.score);
