import React from "react";
import { Box, CircularProgress } from "@mui/material";
const PreloaderPage = () => {
  return (
    <Box
      display="flex"
      height="100vh"
      justifyContent="center"
      alignItems="center"
    >
      <CircularProgress />
    </Box>
  );
};

export default PreloaderPage;
