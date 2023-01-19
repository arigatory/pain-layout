import React from "react";
import {Typography} from "@mui/material";
import BoxFlex from "../layout/BoxFlex";
import {styled} from "@mui/system";
import theme from "../../theme";
import ArrowSmallUp from "../icons/ArrowSmallUp";
import ArrowSmallDown from "../icons/ArrowSmallDown";

const ProgressBox = styled(BoxFlex)({
    gridGap: 4,
    alignItems: "center",
}) as typeof BoxFlex

const PainProgress = (props: {
    value: null | number,
}) => (
    <ProgressBox>
        {props.value !== null &&
            <>
                {props.value !== 0 && <>
                    {props.value > 0
                        ? <ArrowSmallUp
                            color={props.value > 0 ? theme.palette.acupuncture.main : theme.palette.yoga.main}
                        />
                        : <ArrowSmallDown
                            color={props.value > 0 ? theme.palette.acupuncture.main : theme.palette.yoga.main}
                        />}
                </>
                }
                <Typography
                    variant="subtitle1"
                    color={
                        props.value === 0
                            ? theme.palette.text.disabled
                            : props.value > 0 ? theme.palette.acupuncture.main : theme.palette.yoga.main
                    }
                >
                    {props.value}
                </Typography>
            </>
        }
    </ProgressBox>
)

export default PainProgress;