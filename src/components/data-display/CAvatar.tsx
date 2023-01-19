import React from "react";
import {Avatar, AvatarProps} from "@mui/material";

const Sizes =  {
    xs: "xs",
    sm: "sm",
    md: "md",
    bg: "bg",
    lg: "lg",
    xl: "xl",
}

type SizesType = keyof typeof Sizes;

export interface ICAvatarProps {
    size?: SizesType;
}

const CAvatar = (props: AvatarProps & ICAvatarProps) => {
    const { size, ...other } = props;

    const getSizeBySizeName = (sizeName: string | undefined) => {
        if (sizeName === Sizes.xs) {
            return 32
        } else if(sizeName === Sizes.sm) {
            return 44
        } else if(sizeName === Sizes.md) {
            return 60
        } else if(sizeName === Sizes.bg) {
            return 80
        } else if(sizeName === Sizes.lg) {
            return 100
        } else if(sizeName === Sizes.xl) {
            return 180
        }
    }

    return (
        <Avatar
            {...other}
            sx={{
                width: getSizeBySizeName(props.size),
                height: getSizeBySizeName(props.size),
            }}
        />
    );
}

CAvatar.defaultProps = {
    size: Sizes.bg,
};

export default CAvatar;