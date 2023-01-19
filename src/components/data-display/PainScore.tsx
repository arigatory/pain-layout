import React from "react";
import {Typography} from "@mui/material";
import BoxFlex from "../layout/BoxFlex";
import {styled} from "@mui/system";

const ScoreBox = styled(BoxFlex)(({theme}) => ({
    backgroundColor: theme.palette.background.default,
    borderRadius: 40,
    padding: "2px 20px",
})) as typeof BoxFlex

const PainScore = (props: {
    value: null | number,
}) => {
    return (
        <ScoreBox>
            {props.value !== null &&
                <Typography
                    variant="subtitle1"
                >
                    {props.value}
                </Typography>
            }
        </ScoreBox>
    );
}

export default PainScore;