import React from "react";
import Box from "@mui/material/Box";
import LinearProgress, {LinearProgressProps} from '@mui/material/LinearProgress';
import Typography from "@mui/material/Typography";
import BoxFlexColumn from "../layout/BoxFlexColumn";
import BoxFlex from "../layout/BoxFlex";

const LinearProgressWithLabel = (props: LinearProgressProps & {
    value: number,
    title: string,
}) => (
    <BoxFlexColumn
        sx={{
            gridGap: 4,
            padding: "12px 0 4px",
        }}
    >
        <BoxFlex
            sx={{
                justifyContent: "space-between",
            }}
        >
            <Typography
                variant="body2"
            >
                {props.title}
            </Typography>
            <Typography
                variant="body2"
            >
                {`${Math.round(
                    props.value,
                )}%`}
            </Typography>
        </BoxFlex>
        <Box>
            <LinearProgress variant="determinate" {...props} />
        </Box>
    </BoxFlexColumn>
)

export default LinearProgressWithLabel;