import React from "react";
import Card from "@mui/material/Card";
import { SxProps, Theme } from "@mui/material";

interface CardContainerProps {
  isWinner?: boolean | null;
  children: JSX.Element[];
}

const CardContainer = ({ isWinner, children }: CardContainerProps) => {
  const sx: SxProps<Theme> = {
    borderWidth: 3,
    borderStyle: "solid",
    borderColor: "primary.main",
  };
  return <Card sx={isWinner ? sx : undefined}>{children}</Card>;
};

export default React.memo(CardContainer);
