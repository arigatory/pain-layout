import React from "react";
import {Slider, sliderClasses, SliderProps, SliderRail, SliderThumb, SliderTrack, Typography} from "@mui/material";
import {styled} from "@mui/system";

const StyledSlider = styled(Slider)({
    height: 8,
}) as typeof Slider

const StyledSliderThumb = styled(SliderThumb)(({theme}) => ({
    width: 56,
    height: 56,
    border: `4px solid ${theme.palette.white.main}`,
    boxShadow: "none !important",

    [`. ${sliderClasses.track}`]: {
        height: 8,
    }
})) as typeof SliderThumb

const StyledTrack = styled(SliderTrack)({
    display: "none",
}) as typeof SliderTrack

function TrackComponent(props: any) {
    return (
        <StyledTrack
            {...props}
        />
    )
}

const StyledRail = styled(SliderRail)({
    background: "linear-gradient(90deg, #8FC39D 0%, #B6D386 26.56%, #E3CF99 50%, #EEBA8E 75.52%, #E88C7F 100%)",
    opacity: 1,
}) as typeof SliderRail

function RailComponent(props: any) {
    return (
        <StyledRail
            {...props}
        />
    )
}

function ThumbComponent(props: any) {
    const {children, ...other} = props;

    const bgMap = {
        1: "#8FC39D",
        2: "#9FC79A",
        3: "#AECA97",
        4: "#BECE93",
        5: "#CDD190",
        6: "#D2C38D",
        7: "#D8B589",
        8: "#DDA886",
        9: "#E39A82",
        10: "#E88C7F",
    }

    return (
        <StyledSliderThumb
            {...other}
            sx={{
                background: bgMap[props["ownerState"]["value"] as keyof typeof bgMap],
            }}
        >
            <Typography
                variant="subtitle1"
                color="text.primary"
            >
                {props["ownerState"]["value"]}
                {children}
            </Typography>
        </StyledSliderThumb>
    );
}

const PainSlider = (props: SliderProps) => {
    return (
        <StyledSlider
            {...props}
            slots={{
                thumb: ThumbComponent,
                track: TrackComponent,
                rail: RailComponent,
            }}
        />
    );
}

export default PainSlider;