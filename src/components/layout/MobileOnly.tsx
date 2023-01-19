import React from "react";
import {Box, BoxProps} from "@mui/material";
import {styled} from "@mui/system";

const StyledBox = styled(Box)({
    "@media (min-width: 900px)": {
        display: "none",
    },
}) as typeof Box

const MobileOnly = (props: BoxProps) => (
    <StyledBox
        {...props}
    />
);

export default MobileOnly;