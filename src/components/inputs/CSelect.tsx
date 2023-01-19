import React from "react";
import { makeStyles } from '@mui/styles';
import {Select, SelectProps} from "@mui/material";
import ChevronUp from "../icons/ChevronUp";
import ChevronDown from "../icons/ChevronDown";

const useStyles = makeStyles({
    root: {
        "& svg": {
            position: "absolute",
            right: 0,
        },
    },
});

const CSelect = (props: SelectProps) => {
    const classes = useStyles();
    return (
        <Select
            {...props}
            IconComponent={
                e => (
                    e.className.includes("MuiSelect-iconOpen")
                        ? <ChevronUp />
                        : <ChevronDown/>
                )
            }
            className={classes.root}
        >
            {props.children}
        </Select>
    );
}

export default CSelect;