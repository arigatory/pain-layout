import React from "react";
import {Typography} from "@mui/material";
import {styled} from "@mui/system";
import CPaper from "./CPaper";
import QuestionMarkCircle from "../icons/QuestionMarkCircle";
import InformationCircle from "../icons/InformationCircle";
import theme from "../../theme";
import BoxFlexColumn from "../layout/BoxFlexColumn";
import BoxFlex from "../layout/BoxFlex";

const Container = styled(CPaper)(({theme}) => ({
    backgroundColor: theme.palette.surface.main,
    width: 310,

    "@media (max-width: 899px)": {
        width: "auto",
    },
})) as typeof CPaper

const IconWrapper = styled(BoxFlex)({
    padding: 12,
    borderRadius: "50%",
}) as typeof BoxFlex

const InfoCard = (props: {
    text: string,
    onClick?: () => void | undefined,
}) => {
    return (
        <Container
            sx={{
                cursor: props.onClick ? "pointer" : "initial",
            }}
            onClick={props.onClick}
        >
            <BoxFlexColumn
                sx={{
                    gridGap: 40,
                    alignItems: "start",
                }}
            >
                <IconWrapper
                    sx={{
                        backgroundColor: props.onClick ? theme.palette.primary.main : theme.palette.warning.main,
                    }}
                >
                    {props.onClick
                        ? (
                            <QuestionMarkCircle
                                color={theme.palette.white.main}
                            />
                        ): (
                            <InformationCircle
                                color={theme.palette.white.main}
                            />
                        )
                    }
                </IconWrapper>

                <Typography
                    variant={props.onClick ? "subtitle2" : "body2"}
                    color={props.onClick ? theme.palette.primary.main : theme.palette.text.secondary}
                >
                    <span dangerouslySetInnerHTML={{__html: props.text}} />
                </Typography>
            </BoxFlexColumn>
        </Container>
    );
}

export default InfoCard;