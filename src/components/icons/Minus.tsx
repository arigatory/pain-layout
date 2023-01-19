import React from "react";
import theme from "../../theme";

const Minus = ({...props}: {
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
                d="M5 12H19"
                stroke={props.color}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

Minus.defaultProps = {
    width: 24,
    height: 24,
    color: theme.palette.text.primary,
};

export default Minus;
