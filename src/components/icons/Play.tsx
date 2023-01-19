import React from "react";
import theme from "../../theme";

const Play = ({...props}: {
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
                d="M5.25 5.65268C5.25 4.797 6.1674 4.25457 6.91716 4.66694L18.4577 11.0143C19.2349 11.4417 19.2349 12.5583 18.4577 12.9857L6.91716 19.3331C6.1674 19.7454 5.25 19.203 5.25 18.3473V5.65268Z"
                stroke={props.color}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

Play.defaultProps = {
    width: 24,
    height: 24,
    color: theme.palette.text.primary,
};

export default Play;
