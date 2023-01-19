import React from "react";
import theme from "../../theme";

const Zoom = ({...props}: {
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
                d="M23 7L18 10V14L23 17V7Z"
                stroke={props.color}
                strokeWidth="1.5"
                strokeLinejoin="round"
            />
            <path
                d="M2 7H13C14.6569 7 16 8.34315 16 10V17H5C3.34315 17 2 15.6569 2 14V7Z"
                stroke={props.color}
                strokeWidth="1.5"
                strokeLinejoin="round"
            />
        </svg>
    );
}

Zoom.defaultProps = {
    width: 24,
    height: 24,
    color: theme.palette.text.primary,
};

export default Zoom;

