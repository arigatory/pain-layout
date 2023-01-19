import React from "react";
import {Box, BoxProps} from "@mui/material";
import {styled} from "@mui/system";

const List = styled(Box)({
    "& > li::marker": {
        fontSize: "0.8rem",
    }
}) as typeof Box

const components = {
    ul: "ul",
    ol: "ol",
}

const BoxList = (props: BoxProps & {
    component: keyof typeof components,
}) => (
    <List
        {...props}
        component={props.component}
        pl=".9em"
    />
);

BoxList.defaultProps = {
    component: "ul",
}

export default BoxList;