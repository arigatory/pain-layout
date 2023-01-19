import React from "react";
import theme from "../../theme";

const ArrowSmallUp = ({...props}: {
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
                d="M12 19.5L12 4.5M12 4.5L5.25 11.25M12 4.5L18.75 11.25"
                stroke={props.color}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

ArrowSmallUp.defaultProps = {
    width: 24,
    height: 24,
    color: theme.palette.text.primary,
};

export default ArrowSmallUp;
