import React from "react";
import theme from "../../theme";

const ArrowLongUp = ({...props}: {
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
                d="M8.25 6.75L12 3M12 3L15.75 6.75M12 3V21"
                stroke={props.color}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

ArrowLongUp.defaultProps = {
    width: 24,
    height: 24,
    color: theme.palette.text.primary,
};

export default ArrowLongUp;
