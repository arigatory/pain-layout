import React from "react";
import theme from "../../theme";

const WhatsApp = ({...props}: {
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
                d="M12.3176 15.7921L12.5756 15.0878L12.3176 15.7921C12.8812 15.9985 13.4705 15.7766 13.7957 15.3429L14.2243 14.7715L16.25 15.2779V15.8462C16.25 16.0692 16.0692 16.25 15.8462 16.25H14.6923C10.8582 16.25 7.75 13.1418 7.75 9.30769V8.15385C7.75 7.93081 7.93081 7.75 8.15385 7.75H8.72211L9.22854 9.77571L8.65708 10.2043C8.22343 10.5295 8.00148 11.1188 8.20795 11.6824C8.90506 13.5854 10.4146 15.0949 12.3176 15.7921Z"
                stroke={props.color}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 14.1763 2.69518 16.1902 3.8756 17.8317L2.5 22L7.0259 20.6771C8.4909 21.5187 10.1892 22 12 22Z"
                stroke={props.color}
                strokeWidth="1.5"
                strokeLinejoin="round"
            />
        </svg>
    );
}

WhatsApp.defaultProps = {
    width: 24,
    height: 24,
    color: theme.palette.text.primary,
};

export default WhatsApp;
