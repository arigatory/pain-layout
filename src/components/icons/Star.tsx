import React from "react";
import theme from "../../theme";

const Star = ({...props}: {
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
                d="M11.4806 3.4987C11.6728 3.03673 12.3272 3.03673 12.5194 3.4987L14.6454 8.61016C14.7264 8.80492 14.9095 8.93799 15.1198 8.95485L20.638 9.39724C21.1368 9.43722 21.339 10.0596 20.959 10.3851L16.7547 13.9866C16.5945 14.1238 16.5245 14.3391 16.5735 14.5443L17.858 19.9292C17.9741 20.4159 17.4446 20.8005 17.0176 20.5397L12.2932 17.6541C12.1132 17.5441 11.8868 17.5441 11.7068 17.6541L6.98242 20.5397C6.55542 20.8005 6.02597 20.4159 6.14206 19.9292L7.42655 14.5443C7.47549 14.3391 7.40553 14.1238 7.24534 13.9866L3.04102 10.3851C2.66103 10.0596 2.86326 9.43722 3.362 9.39724L8.88025 8.95485C9.09051 8.93799 9.27366 8.80492 9.35467 8.61016L11.4806 3.4987Z"
                stroke={props.color}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

Star.defaultProps = {
    width: 24,
    height: 24,
    color: theme.palette.text.primary,
};

export default Star;
