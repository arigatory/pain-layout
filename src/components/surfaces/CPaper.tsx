import React from "react";
import {Paper, PaperProps} from "@mui/material";
import {styled} from "@mui/system";

const StyledPaper = styled(Paper)(({theme}) => ({
    borderRadius: 30,
    padding: "32px 28px 28px 28px",
    backgroundColor: theme.palette.white.main,

    "@media(max-width: 599px)": {
        padding: "22px 20px 24px 20px",
    }
})) as typeof Paper;

const CPaper = (props: PaperProps) => (
    <StyledPaper
        {...props}
    />
);

CPaper.defaultProps = {
    elevation: 0,
}

export default CPaper;