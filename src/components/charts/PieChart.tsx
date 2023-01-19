import * as React from 'react';
import {Chart, PieSeries, Legend} from '@devexpress/dx-react-chart-material-ui';
import {Animation} from '@devexpress/dx-react-chart';
import {makeStyles} from "@mui/styles";
import {Box} from "@mui/material";

const useStyles = makeStyles({
    root: {
        "& > .Target-root": {
            padding: "0 !important",
        },
    }
});

const PieChart = (props: {
    data: {
        title: string,
        value: number,
    }[],
}) => {
    const classes = useStyles();

    const data = props.data;
    const labelComponent = (props: Legend.LabelProps) => {
        const item = data.find(item => item.title === props.text);

        return <Legend.Label {...props} text={`${props.text} ${item?.value}%`} />;
    };

    return (
        <Box
            className={classes.root}
        >
            <Chart
                data={props.data}
            >
                <PieSeries
                    valueField="value"
                    argumentField="title"
                />
                <Legend
                    position="bottom"
                    labelComponent={labelComponent}
                />

                <Animation />
            </Chart>
        </Box>
    )
}

export default PieChart;