import React from "react";
import theme from "../../theme";

const ArrowSmallRight = ({...props}: {
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
                d="M4.5 12L19.5 12M19.5 12L12.75 5.25M19.5 12L12.75 18.75"
                stroke={props.color}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

ArrowSmallRight.defaultProps = {
    width: 24,
    height: 24,
    color: theme.palette.text.primary,
};

export default ArrowSmallRight;
