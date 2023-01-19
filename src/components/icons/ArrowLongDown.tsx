import React from "react";
import theme from "../../theme";

const ArrowLongDown = ({...props}: {
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
            <path d="M15.75 17.25L12 21M12 21L8.25 17.25M12 21L12 3"
                  stroke={props.color}
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
            />
        </svg>
    );
}

ArrowLongDown.defaultProps = {
    width: 24,
    height: 24,
    color: theme.palette.text.primary,
};

export default ArrowLongDown;