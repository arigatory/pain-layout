import React from "react";
import theme from "../../theme";

const ChevronUp = ({...props}: {
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
                d="M7 14L11.5 10L16 14"
                stroke={props.color}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"/>
        </svg>
    );
}

ChevronUp.defaultProps = {
    width: 24,
    height: 24,
    color: theme.palette.text.primary,
};

export default ChevronUp;
