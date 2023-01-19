import React from "react";
import {Button, ButtonProps, Typography} from "@mui/material";
import theme from "../../theme";
import BoxFlex from "../layout/BoxFlex";
import Plus from "../icons/Plus";
import {styled} from "@mui/system";

const StyledButton = styled(Button)(({theme}) => ({
    gridArea: "1 / 1 / 1 / 1",
    justifyContent: "start",
    backgroundColor: theme.palette.background.default,
    paddingLeft: 0,
    paddingTop: 0,
    paddingBottom: 0,
    "&:hover": {
        backgroundColor: theme.palette.text.disabled,
    },
})) as typeof Button

const PlusButton = (props: ButtonProps) => {
    return (
        <StyledButton
            {...props}
            variant="contained"
        >
            <BoxFlex
                sx={{
                    alignItems: "center",
                    justifyContent: "center",
                    height: 44,
                    width: 44,
                    borderRadius: "50%",
                    backgroundColor: theme.palette.text.disabled,
                    marginRight: "16px",
                    flexShrink: 0,
                }}
            >
                <Plus/>
            </BoxFlex>
            <Typography
                variant="captionUppercase"
                color="text.tertiary"
                width="100%"
            >
                {props.children}
            </Typography>
        </StyledButton>
    );
}

export default PlusButton;