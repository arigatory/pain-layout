import React from "react";
import {Container, Typography} from "@mui/material";
import cardImage1 from "../../img/card-image-1.jpg";
import cardImage2 from "../../img/card-image-2.jpg";
import theme from "../../theme";
import Bolt from "../icons/Bolt";
import BoxFlex from "../layout/BoxFlex";
import BoxFlexColumn from "../layout/BoxFlexColumn";
import ArticleCard from "../surfaces/ArticleCard";
import routes from "../../routes";

const FeaturedArticlesBlock = () => {

    const articles = [
        {
            title: "Биологическая обратная связь, йога, медитация, натуральный добавки и крема",
            description: "мануальная терапия, инвазивные методы",
            ts: 1642809600000,
            img: cardImage1,
            link: routes.article,
        },
        {
            title: "Биологическая обратная связь, йога, медитация, натуральный добавки и крема",
            description: "мануальная терапия, инвазивные методы",
            ts: 1642809600000,
            img: cardImage1,
            link: routes.article,
        },
        {
            title: "Биологическая обратная связь, йога, медитация, натуральный добавки и крема",
            description: "физическая терапия",
            ts: 1642809600000,
            img: cardImage2,
            backgroundColor: theme.palette.acupuncture.main,
            textWhite: true,
            icon: <Bolt color={theme.palette.white.main}/>,
            link: routes.article,
        },
    ];

    return (
        <Container
            maxWidth="xl"
        >
            <BoxFlexColumn
                sx={{
                    gridGap: 50,
                }}
            >
                <Typography
                    variant="h2"
                >
                    Рекомендуемые статьи
                </Typography>

                <BoxFlex
                    sx={{
                        flexWrap: "wrap",
                        gridGap: 20,
                        justifyContent: "space-between",
                    }}
                >
                    {articles.map((val, i) => (
                        <ArticleCard
                            key={i}
                            img={articles[i].img}
                            title={articles[i].title}
                            description={articles[i].description}
                            ts={articles[i].ts}
                            link={articles[i].link}
                            backgroundColor={articles[i]?.backgroundColor}
                            textWhite={articles[i]?.textWhite}
                            icon={articles[i]?.icon}
                        />
                    ))}
                </BoxFlex>
            </BoxFlexColumn>
        </Container>
    );
}

export default FeaturedArticlesBlock;