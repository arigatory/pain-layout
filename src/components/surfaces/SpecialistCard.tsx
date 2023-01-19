import React from "react";
import {Button, Link, Typography} from "@mui/material";
import {styled} from "@mui/system";
import CAvatar from "../data-display/CAvatar";
import ArrowSmallRight from "../icons/ArrowSmallRight";
import theme from "../../theme";
import routes from "../../routes";
import CPaper from "./CPaper";
import BoxFlexColumn from "../layout/BoxFlexColumn";
import BoxFlex from "../layout/BoxFlex";
import {priceFormatter} from "../../utils";

const Content = styled(BoxFlexColumn)({
    alignItems: "center",
    textAlign: "center",
    paddingTop: "18px",
}) as typeof BoxFlexColumn;

const SpecialistCard = (props: {
    img?: string,
    name: string,
    position: string,
    text: string,
    price: number,
    isMini?: boolean,
}) => {
    return (
        <CPaper
            sx={{
                maxWidth: props.isMini ? 310 : 420,
            }}
        >
            <Content>
                <CAvatar
                    src={props.img}
                    alt={props.name}
                    size={props.isMini ? "lg" : "xl"}
                />

                <Typography
                    variant="h4"
                    sx={{
                        margin: "52px 0 16px",
                    }}
                >
                    {props.name}
                </Typography>

                <Typography
                    variant="captionUppercase"
                    sx={{
                        marginBottom: "32px",
                    }}
                    color="primary"
                >
                    {props.position}
                </Typography>

                <Typography
                    variant="body2"
                    sx={{
                        marginBottom: "36px",
                    }}
                    color="text.secondary"
                >
                    {props.text}
                </Typography>

                <Button
                    variant="outlined"
                    component={Link}
                    href={routes.singleSpecialist}
                    fullWidth
                >
                    <BoxFlex
                        sx={{
                            alignItems: "center",
                            gridGap: 8,
                        }}
                    >
                        {priceFormatter(props.price)}

                        <ArrowSmallRight
                            color={theme.palette.text.primary}
                        />
                    </BoxFlex>
                </Button>
            </Content>
        </CPaper>
    );
}

export default SpecialistCard;