import React from "react";
import {Button, ButtonProps, buttonClasses} from "@mui/material";
import { styled } from '@mui/system';

const StyledButton = styled(Button)({
    [`&.${buttonClasses.root}`]: {
        minWidth: 'auto',
        borderRadius: "50%",
    },
    [`&.${buttonClasses.sizeLarge}`]: {
        height: 56,
        width: 56,
        padding: 16,
    },
    [`&.${buttonClasses.sizeMedium}`]: {
        height: 44,
        width: 44,
        padding: 10,
    },
    [`&.${buttonClasses.sizeSmall}`]: {
        height: 32,
        width: 32,
        padding: 4,
    },
}) as typeof Button

const CIconButton = (props: ButtonProps) => {
    return (
        <StyledButton
            {...props}
        >
            {props.children}
        </StyledButton>
    );
}

export default CIconButton;