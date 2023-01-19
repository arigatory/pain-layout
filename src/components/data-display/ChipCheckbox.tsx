import React from "react";
import {Chip, ChipProps, Typography} from "@mui/material";
import BoxFlex from "../layout/BoxFlex";
import {makeStyles} from "@mui/styles";
import Check from "../icons/Check";
import classNames from "classnames";
import theme from "../../theme";

const useStyles = makeStyles((theme) => ({
    checkedContainer: {
        alignItems: "center",
        justifyContent: "center",
        width: 32,
        height: 32,
        borderRadius: "50%",
        backgroundColor: theme.palette.background.default,
        marginRight: -8,
    },
    checked: {
        backgroundColor: theme.palette.primary.main,
    },
}));

const ChipCheckbox = (props: ChipProps & {
    checked: boolean,
}) => {
    const classes = useStyles();
    const {label, checked, ...other} = props;

    const renderLabel = () => {
        if (Array.isArray(label)) {
            return label.map((item, index) => (
                <React.Fragment
                    key={index}
                >
                    {item}
                </React.Fragment>
            ))
        }

        return label
    }

    return (
        <Chip
            {...other}
            label={
                <BoxFlex
                    sx={{
                        alignItems: "center",
                        gridGap: 16,
                    }}
                >
                    <Typography
                        variant="subtitle2"
                    >
                        {renderLabel()}
                    </Typography>

                    {other?.onClick &&
                        <BoxFlex
                            className={
                                classNames({
                                    [classes.checkedContainer]: true,
                                    [classes.checked]: checked,
                                })
                            }
                        >
                            {checked && <Check color={theme.palette.white.main}/>}
                        </BoxFlex>
                    }
                </BoxFlex>
            }
        />
    );
}

export default ChipCheckbox;