import React from "react";
import {Box, BoxProps} from "@mui/material";

const BoxFlex = (props: BoxProps) => (
    <Box
        {...props}
        display="flex"
    />
);

export default BoxFlex;