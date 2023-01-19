import * as React from 'react';
import {AreaSeries, ArgumentAxis, Chart, ValueAxis} from '@devexpress/dx-react-chart-material-ui';
import {Animation} from '@devexpress/dx-react-chart';
import {Box} from "@mui/material";
import {area, curveCatmullRom,} from 'd3-shape';

const Area = (props: any) => (
    <AreaSeries.Path
        {...props}
        path={
            area()
                // @ts-ignore
                .x(({arg}) => arg)
                // @ts-ignore
                .y1(({val}) => val)
                // @ts-ignore
                .y0(({startVal}) => startVal)
                .curve(curveCatmullRom)
        }
    />
);

const AreaChart = (props: {
    title: string,
    data: {
        date: string,
        value: number,
    }[],
}) => (
    <Box>
        <Chart
            data={props.data}
        >
            <ArgumentAxis/>
            <ValueAxis/>

            <AreaSeries
                name={props.title}
                valueField="value"
                argumentField="date"
                seriesComponent={Area}
            />
            <Animation/>
        </Chart>
    </Box>
)
export default AreaChart;