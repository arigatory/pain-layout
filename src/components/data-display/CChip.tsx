import React from "react";
import {Chip, chipClasses, ChipProps} from "@mui/material";
import classNames from "classnames";
import {styled} from "@mui/system";

const StyledChip = styled(Chip)(({theme}) => ({
    height: 40,
    background: "transparent",

    [`&.${chipClasses.outlined}`]: {
        borderColor: theme.palette.border.main,
    },

    [`. ${chipClasses.label}`]: {
        fontSize: 14,
        lineHeight: "16px",
        fontWeight: 500,
    },

    "&:hover": {
        color: theme.palette.primary.main,
    },
    "&.active": {
        backgroundColor: theme.palette.secondary.main,
        borderColor: theme.palette.secondary.main,
    }
})) as typeof Chip

const CChip = (props: ChipProps & {
    active: boolean,
}) => {
    const {active, ...other} = props;

    return (
        <StyledChip
            {...other}
            className={
                classNames({
                    "active": active,
                })
            }
        />
    );
}

export default CChip;