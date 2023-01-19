import React from "react";
import theme from "../../theme";

const ArrowLongLeft = ({...props}: {
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
                d="M6.75 15.75L3 12M3 12L6.75 8.25M3 12H21"
                stroke={props.color}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

ArrowLongLeft.defaultProps = {
    width: 24,
    height: 24,
    color: theme.palette.text.primary,
};

export default ArrowLongLeft;
