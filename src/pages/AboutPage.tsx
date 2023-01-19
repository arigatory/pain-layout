import React from "react";
import DefaultTemplate from "../templates/DefaultTemplate";
import HeroBlock from "../components/blocks/HeroBlock";
import PosterBlock from "../components/blocks/PosterBlock";
import {Button, Container, Link, Typography} from "@mui/material";
import routes from "../routes";
import FAQBlock from "../components/blocks/FAQBlock";
import OurPartnersBlock from "../components/blocks/OurPartnersBlock";
import BoxFlexColumn from "../components/layout/BoxFlexColumn";
import SpecialistsCarouselBlock from "../components/blocks/SpecialistsCarouselBlock";
import {styled} from "@mui/system";
import BoxFlex from "../components/layout/BoxFlex";
import CVideo from "../components/surfaces/CVideo";
import videoSrc from "../video/video-example.mp4"

const TextBlock = styled(BoxFlex)(({theme}) => ({
    gridGap: 240,
    padding: "140px 0",
    borderBottom: `1px solid ${theme.palette.border.main}`,

    "@media (max-width: 899px)": {
        padding: "50px 0",
        gridGap: 20,
        flexDirection: "column",
    },
})) as typeof BoxFlex

const AboutPage = () => (
    <DefaultTemplate>
        <HeroBlock
            title="О нас"
        />

        <PosterBlock>
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
                    Хватит терпеть боль! <br/> Научитесь её контролировать<br/> вместе с нами
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

        <Container
            maxWidth="xl"
        >
            <CVideo link={videoSrc} />

            <TextBlock>
                <Typography
                    variant="h3"
                    flexShrink={0}
                >
                    Избавим от боли — <br/> без зависимости от лекарств
                </Typography>

                <Typography
                    variant="body1"
                >
                    На основании анализа научных данных и опыта пациентов, которые уже завершили свой путь
                    лечения хронической боли — наш Искусственный Интеллект, подбирает индивидуальный план
                    наиболее эффективного лечения, а специалисты контролируют и дополняют его своим экспертным
                    мнением.
                </Typography>
            </TextBlock>
        </Container>

        <SpecialistsCarouselBlock/>

        <FAQBlock/>

        <OurPartnersBlock/>

    </DefaultTemplate>
);

export default AboutPage;
