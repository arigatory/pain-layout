import React from "react";
import theme from "../../theme";

const Check = ({...props}: {
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
                d="M4.5 12.75L10.5 18.75L19.5 5.25"
                stroke={props.color}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"/>
        </svg>
    );
}

Check.defaultProps = {
    width: 24,
    height: 24,
    color: theme.palette.text.primary,
};

export default Check;
