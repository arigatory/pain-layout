import React from "react";
import theme from "../../theme";

const PaperAirplane = ({...props}: {
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
                d="M5.99972 12L3.2688 3.12451C9.88393 5.04617 16.0276 8.07601 21.4855 11.9997C16.0276 15.9235 9.884 18.9535 3.26889 20.8752L5.99972 12ZM5.99972 12L13.5 12"
                stroke={props.color}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

PaperAirplane.defaultProps = {
    width: 24,
    height: 24,
    color: theme.palette.text.primary,
};

export default PaperAirplane;
