import React from "react";
import Typography from "@mui/material/Typography";
import { useErrorSelector } from "store";

const ErrorText = () => {
  const error = useErrorSelector();
  return error ? (
    <Typography variant="caption" color="error">
      Unexpected error occurred, please try again.
    </Typography>
  ) : null;
};

export default React.memo(ErrorText);
