import React from "react";
import theme from "../../theme";

const User = ({...props}: {
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
                d="M15.75 6C15.75 8.07107 14.0711 9.75 12 9.75C9.92893 9.75 8.24999 8.07107 8.24999 6C8.24999 3.92893 9.92893 2.25 12 2.25C14.0711 2.25 15.75 3.92893 15.75 6Z"
                stroke={props.color}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M4.50113 20.1182C4.57143 16.0369 7.90187 12.75 12 12.75C16.0982 12.75 19.4287 16.0371 19.4989 20.1185C17.2161 21.166 14.6764 21.75 12.0003 21.75C9.32399 21.75 6.78409 21.1659 4.50113 20.1182Z"
                stroke={props.color}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

User.defaultProps = {
    width: 24,
    height: 24,
    color: theme.palette.text.primary,
};

export default User;
