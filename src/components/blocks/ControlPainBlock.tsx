import React from "react";
import {Box, Container, Grid, Typography} from "@mui/material";
import {styled} from "@mui/system";
import mindImg from "../../img/control-pain-mind.png";
import bodyImg from "../../img/control-pain-body.png";
import LinkList from "../data-display/LinkList";
import BoxFlex from "../layout/BoxFlex";
import theme from "../../theme";
import ArrowSmallRight from "../icons/ArrowSmallRight";
import routes from "../../routes";
import BoxFlexColumn from "../layout/BoxFlexColumn";

const PainImgWrapper = styled(BoxFlex)(({theme}) => ({
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    backgroundColor: theme.palette.surface.main,
    margin: "0 auto",

    "@media (max-width: 899px)": {
        maxWidth: "320px",
    },

    "& img": {
        maxWidth: "100%",
    },
})) as typeof BoxFlex;

export default function ControlPainBlock() {

    const painGroups = {
        mind: {
            groupName: "Разум",
            img: mindImg,
            items: [
                {
                    title: "Психотерапия",
                    url: routes.platform,
                },
                {
                    title: "Медитация",
                    url: routes.platform,
                },
                {
                    title: "Йога",
                    url: routes.platform,
                },
                {
                    title: "Биологическая обратная связь",
                    url: routes.platform,
                },
            ],
        },
        body: {
            groupName: "Тело",
            img: bodyImg,
            items: [
                {
                    title: "Физическая терапия",
                    url: routes.platform,
                },
                {
                    title: "Мануальная терапия",
                    url: routes.platform,
                },
                {
                    title: "Акупунктура",
                    url: routes.platform,
                },
                {
                    title: "Инвазивные методы",
                    url: routes.platform,
                },
            ],
        },
    };

    return (
        <Box>
            <Container
                maxWidth="xl"
            >
                <Typography
                    variant="h2"
                    sx={{
                        mb: "32px",
                        display: {
                            xs: "block",
                            md: "none",
                        }
                    }}
                >
                    Контроль Вашей боли
                </Typography>

                <BoxFlexColumn
                    sx={{
                        gridGap: 32,
                    }}
                >
                    {Object.keys(painGroups).map((painGroup, i) => (
                        <Grid
                            key={i}
                            container
                            spacing={{
                                xs: "24px",
                                md: "130px",
                            }}
                            sx={{
                                alignItems: {
                                    xs: "end",
                                    md: "start",
                                }
                            }}
                        >
                            <Grid
                                item
                                xs={12}
                                md={6}
                            >
                                <Typography
                                    variant="h2"
                                    sx={{
                                        mb: "100px",
                                        display: {
                                            xs: "none",
                                            md: "block",
                                        }
                                    }}
                                >
                                    Контроль Вашей боли
                                </Typography>

                                <LinkList
                                    title={painGroups[painGroup as keyof typeof painGroups].groupName}
                                    items={painGroups[painGroup as keyof typeof painGroups].items}
                                    icon={<ArrowSmallRight
                                        color={theme.palette.text.tertiary}
                                    />}
                                />
                            </Grid>
                            <Grid
                                item
                                xs={12}
                                md={6}
                                order={{
                                    xs: -1,
                                    md: 1,
                                }}
                            >
                                <PainImgWrapper>
                                    <img
                                        src={painGroups[painGroup as keyof typeof painGroups].img}
                                        alt={painGroups[painGroup as keyof typeof painGroups].groupName}
                                    />
                                </PainImgWrapper>
                            </Grid>
                        </Grid>
                    ))}
                </BoxFlexColumn>
            </Container>
        </Box>
    );
};