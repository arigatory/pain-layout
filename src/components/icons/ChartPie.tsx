import React from "react";
import theme from "../../theme";

const ChartPie = ({...props}: {
    width?: number,
    height?: number,
    color?: string,
}) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={props.width}
            height={props.height}
            fill="none"
        >
            <path
                d="M10.5 6C6.35786 6 3 9.35786 3 13.5C3 17.6421 6.35786 21 10.5 21C14.6421 21 18 17.6421 18 13.5H10.5V6Z"
                stroke={props.color}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"/>
            <path
                d="M13.5 10.5H21C21 6.35786 17.6421 3 13.5 3V10.5Z"
                stroke={props.color}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

ChartPie.defaultProps = {
    width: 24,
    height: 24,
    color: theme.palette.text.primary,
};

export default ChartPie;