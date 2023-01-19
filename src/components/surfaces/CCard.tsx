import React from "react";
import {Card, Theme, Typography} from "@mui/material";
import {styled, SxProps} from "@mui/system";
import ObjectFitImage from "./ObjectFitImage";
import BoxFlex from "../layout/BoxFlex";
import BoxFlexColumn from "../layout/BoxFlexColumn";
import {dateFormatter} from "../../utils";

export interface ICCardProps {
    img: string,
    title: string,
    description: string,
    ts: number,
    className?: string,
    sx?: SxProps<Theme>,
    backgroundColor?: string,
    textWhite?: boolean,
    icon?: React.ReactElement,
}

const Content = styled(BoxFlexColumn)({
    padding: "28px 28px 32px 28px",
    height: 240,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
}) as typeof BoxFlexColumn;

const IconContainer = styled(BoxFlex)({
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "50%",
    padding: 8,
    position: "absolute",
    left: 28,
    top: 28,
}) as typeof BoxFlex;

const CCard = (props: ICCardProps) => (
    <Card
        className={props.className}
        sx={{
            ...props.sx,
            backgroundColor: props.backgroundColor,
        }}
    >
        <BoxFlex
            sx={{
                position: "relative",
                borderRadius: "30px",
                overflow: "hidden",
            }}
        >
            {props.icon &&
                <IconContainer
                    sx={{
                        backgroundColor: props.backgroundColor,
                    }}
                >
                    {props.icon}
                </IconContainer>
            }
            <ObjectFitImage
                img={props.img}
                height="220px"
            />
        </BoxFlex>
        <Content>
            <div>
                <Typography
                    variant="subtitle2"
                    color={props.textWhite ? "white.main" : "text.primary"}
                    mb="12px"
                >
                    {props.title}
                </Typography>

                <Typography
                    variant="body3"
                    color={props.textWhite ? "white.dark" : "text.secondary"}
                >
                    {props.description}
                </Typography>
            </div>

            <Typography
                variant="body3"
                color={props.textWhite ? "white.dark" : "text.secondary"}
            >
                {dateFormatter(props.ts)}
            </Typography>
        </Content>
    </Card>
);

CCard.defaultProps = {
    textWhite: false,
};

export default CCard;