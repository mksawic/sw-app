import React from "react";
import Typography from "@mui/material/Typography";

interface CardInfoProps {
  data: string | number | undefined;
  label: string;
}

const CardInfo = ({ data, label }: CardInfoProps) => {
  return (
    <>
      <Typography color="text.secondary" variant="caption">
        {label}:
      </Typography>
      <Typography>{data || "-"}</Typography>
    </>
  );
};

export default React.memo(CardInfo);
