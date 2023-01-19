import React from "react";
import {Box, BoxProps} from "@mui/material";

const BoxFlexColumn = (props: BoxProps) => (
    <Box
        {...props}
        display="flex"
        flexDirection="column"
    />
);

export default BoxFlexColumn;