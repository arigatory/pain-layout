import React from "react";
import {BoxProps} from "@mui/material";
import {styled} from "@mui/system";
import BoxFlex from "./BoxFlex";

const Stack = styled(BoxFlex)({
    flexWrap: "wrap",
    gridGap: 12,
}) as typeof BoxFlex;

const StackChip = (props: BoxProps) => (
    <Stack
        {...props}
    />
);

export default StackChip;