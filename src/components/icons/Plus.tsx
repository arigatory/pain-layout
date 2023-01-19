import React from "react";
import theme from "../../theme";

const Plus = ({...props}: {
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
                d="M12 4.5V19.5M19.5 12L4.5 12"
                stroke={props.color}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

Plus.defaultProps = {
    width: 24,
    height: 24,
    color: theme.palette.text.primary,
};

export default Plus;
