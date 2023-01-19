import React from "react";
import DefaultTemplate from "../templates/DefaultTemplate";
import HeroBlock from "../components/blocks/HeroBlock";
import bg from "../img/home-hero-bg.png";
import posterBg from "../img/home-poster-bg.png";
import iphoneImg from "../img/iPhone.png";
import {Box, Button, Grid, Link, Typography} from "@mui/material";
import YourPainBlock from "../components/blocks/YourPainBlock";
import HowToWorksBlock from "../components/blocks/HowToWorksBlock";
import OurPartnersBlock from "../components/blocks/OurPartnersBlock";
import SpecialistsBlock from "../components/blocks/SpecialistsBlock";
import ControlPainBlock from "../components/blocks/ControlPainBlock";
import theme from "../theme";
import routes from "../routes";
import PosterBlock from "../components/blocks/PosterBlock";
import ArrowUpRight from "../components/icons/ArrowUpRight";
import FAQBlock from "../components/blocks/FAQBlock";
import ReviewsBlock from "../components/blocks/ReviewsBlock";
import BoxFlexColumn from "../components/layout/BoxFlexColumn";
import BoxFlex from "../components/layout/BoxFlex";

const HomePage = () => {
    return (
        <DefaultTemplate>
            <HeroBlock
                title="Платформа по лечению хронической боли"
                background={`
                    url("${bg}") center no-repeat,
                    ${theme.palette.gradient.main} center no-repeat
                `}
            >
                <Box
                    sx={{
                        mt: "40px",
                    }}
                >
                    <Typography
                        variant="body1"
                        color="text.primary"
                    >
                        Получите индивидуальный план, построенный на основе —<br/> научных статей, опыте пациентов и
                        искуственном интеллекте
                    </Typography>
                    <Button
                        variant="contained"
                        color="primary"
                        size="large"
                        sx={{
                            mt: "60px",
                        }}
                        component={Link}
                        href={routes.test}
                    >
                        Пройти тест
                    </Button>
                </Box>
            </HeroBlock>

            <ControlPainBlock/>

            <YourPainBlock/>

            <HowToWorksBlock/>

            <PosterBlock
                background={`
                    url("${posterBg}") center no-repeat,
                    ${theme.palette.surface.main}
                `}
            >
                <Grid
                    container
                    alignItems="center"
                    spacing={{
                        xs: "40px",
                        md: "auto",
                    }}
                >
                    <Grid
                        item
                        xs={12}
                        md={6}
                    >
                        <Box
                            sx={{
                                "& img": {
                                    display: "block",
                                    margin: "0 auto",
                                    width: {
                                        xs: "200px",
                                        sm: "auto",
                                    }
                                }
                            }}
                        >
                            <img
                                src={iphoneImg}
                                alt="iPhone 12 Pro"
                            />
                        </Box>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        md={6}
                    >
                        <BoxFlexColumn
                            sx={{
                                alignItems: "start",
                                gridGap: 60,

                                "@media (max-width: 899px)": {
                                    alignItems: "center",
                                    gridGap: 32,
                                    textAlign: "center",
                                }
                            }}
                        >
                            <Typography
                                variant="h3"
                            >
                                Ведите дневник боли —<br/> получайте отчёт когда<br/> вам будет удобно
                            </Typography>

                            <Button
                                variant="contained"
                                color="primary"
                                size="large"
                                component={Link}
                                href="#"
                            >
                                <BoxFlex
                                    alignItems="center"
                                    sx={{
                                        gridGap: 8,
                                    }}
                                >
                                    Телеграм бот
                                    <ArrowUpRight/>
                                </BoxFlex>
                            </Button>
                        </BoxFlexColumn>
                    </Grid>
                </Grid>
            </PosterBlock>

            <SpecialistsBlock/>

            <ReviewsBlock />

            <PosterBlock
                background={`
                    url("${bg}") center no-repeat,
                    ${theme.palette.gradient.main} center no-repeat
                `}
            >
                <BoxFlexColumn
                    sx={{
                        alignItems: "center",
                        margin: "0 auto",
                    }}
                >
                    <Typography
                        variant="h2"
                        align="center"
                    >
                        Хватит терпеть боль! <br/> Научитесь её контролировать<br /> вместе с нами
                    </Typography>
                    <Button
                        variant="contained"
                        color="primary"
                        size="large"
                        sx={{
                            mt: "48px",
                        }}
                        component={Link}
                        href={routes.test}
                    >
                        Пройти тест
                    </Button>
                </BoxFlexColumn>
            </PosterBlock>

            <FAQBlock />

            <OurPartnersBlock/>
        </DefaultTemplate>
    );
};

export default HomePage;
