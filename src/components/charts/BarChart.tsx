import * as React from 'react';
import {ArgumentAxis, BarSeries, Chart, ValueAxis, Tooltip,} from '@devexpress/dx-react-chart-material-ui';
import {Box, Typography} from "@mui/material";
import theme from "../../theme";
import {useEffect, useRef, useState} from "react";
import {SeriesRef, HoverState, EventTracker} from "@devexpress/dx-react-chart";
import BoxFlexColumn from "../layout/BoxFlexColumn";

const BarChart = (props: {
    title: string,
    data: {
        date: string,
        value: number,
    }[],
}) => {
    const ref = useRef(null)
    const [tooltipTarget, setTooltipTarget] = useState<SeriesRef>()
    const [hover, setHover] = useState<SeriesRef|undefined|null>()

    const changeTooltip = (targetItem: any) => setTooltipTarget(targetItem)
    const globalData = props.data

    const TooltipContent = (props: any) => {
        const { targetItem, text } = props;

        return (
            <BoxFlexColumn
                sx={{
                    width: 140,
                    height: 123,
                    backgroundColor: theme.palette.surface.dark,
                    padding: "4px 12px",
                    borderRadius: "20px",
                }}
            >
                <Typography
                    variant="h3"
                    color="white.main"
                    marginBottom="10px"
                >
                    {text}

                </Typography>
                <Typography
                    variant="body3"
                    color="white.dark"
                    sx={{
                        borderBottom: `1px solid ${theme.palette.border.dark}`,
                        paddingBottom: "10px",
                        marginBottom: "8px",
                    }}
                >
                    {targetItem.series}
                </Typography>
                <Typography
                    variant="subtitle2"
                    color="white.main"
                >
                    {globalData[targetItem.point].date}
                </Typography>
            </BoxFlexColumn>
        );
    };

    useEffect(() => {
        if (ref.current) {
            (ref.current as HTMLElement).querySelectorAll("rect").forEach(rect => {
                rect.setAttribute("rx", "43")
                rect.setAttribute("ry", "43")
            })
        }
    }, [ref.current, props.data])

    return (
        <Box
            ref={ref}
        >
            <Chart
                data={props.data}
            >
                <ArgumentAxis/>
                <ValueAxis/>

                <BarSeries
                    name={props.title}
                    valueField="value"
                    argumentField="date"
                    color={theme.palette.primary.light}
                />

                <EventTracker />
                <HoverState
                    hover={hover ? hover : undefined}
                    onHoverChange={(a) => {
                        setHover(a)
                    }}
                />
                <Tooltip
                    targetItem={tooltipTarget}
                    onTargetItemChange={changeTooltip}
                    contentComponent={TooltipContent}
                />
            </Chart>
        </Box>
    )
}
export default BarChart;