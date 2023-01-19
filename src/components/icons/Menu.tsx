import React from "react";
import theme from "../../theme";

const Menu = ({...props}: {
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
                d="M3.75 6.75H20.25M3.75 12H20.25M3.75 17.25H12"
                stroke={props.color}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

Menu.defaultProps = {
    width: 24,
    height: 24,
    color: theme.palette.text.primary,
};

export default Menu;