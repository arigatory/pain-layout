import React, {useState} from "react";
import {Button, Container} from "@mui/material";
import {styled} from "@mui/system";
import cardImage1 from "../../img/card-image-1.jpg";
import cardImage2 from "../../img/card-image-2.jpg";
import theme from "../../theme";
import Bolt from "../icons/Bolt";
import BoxFlex from "../layout/BoxFlex";
import ArticleCard from "../surfaces/ArticleCard";
import routes from "../../routes";
import Filter from "../inputs/Filter";

const ArticlesWrapper = styled(BoxFlex)({
    flexWrap: "wrap",
    justifyContent: "space-between",
    gridGap: 20,
}) as typeof BoxFlex;

const ArticlesBlock = () => {
    const [selectedFilters, setSelectedFilters] = useState<string[]>([])

    const handleSelectFilters = (newFilter: string): void => {
        setSelectedFilters(prevState => {
            return prevState.includes(newFilter)
                ? prevState.filter(i => i !== newFilter)
                : [...prevState, newFilter]
        })
    }

    const filterGroups = [
        {
            title: "Разум",
            items: [
                {
                    title: "психотерапия",
                    value: "mind_psychotherapy",
                },
                {
                    title: "медитация",
                    value: "mind_meditation",
                },
                {
                    title: "йога",
                    value: "mind_yoga",
                },
                {
                    title: "биологическая обратная связь",
                    value: "mind_biofeedback",
                }
            ]
        },
        {
            title: "Тело",
            items: [
                {
                    title: "физическая терапия",
                    value: "body_physicalTherapy",
                },
                {
                    title: "мануальная терапия",
                    value: "body_manualTherapy",
                },
                {
                    title: "акупунктура",
                    value: "body_acupuncture",
                },
                {
                    title: "инвазивные методы",
                    value: "body_invasiveMethods",
                }
            ]
        }
    ];

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
        {
            title: "Биологическая обратная связь, йога, медитация, натуральный добавки и крема",
            description: "физическая терапия",
            ts: 1642809600000,
            img: cardImage2,
            backgroundColor: theme.palette.yoga.main,
            textWhite: true,
            icon: <Bolt color={theme.palette.white.main}/>,
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
            description: "мануальная терапия, инвазивные методы",
            ts: 1642809600000,
            img: cardImage1,
            link: routes.article,
        },
    ];

    return (
        <Container
            maxWidth="xl"
        >
            <Filter
                filterGroups={filterGroups}
                onClick={handleSelectFilters}
                activeFilters={selectedFilters}
            />

            <ArticlesWrapper>
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
            </ArticlesWrapper>

            <BoxFlex
                justifyContent="center"
                mt="80px"
            >
                <Button
                    variant="outlined"
                    size="large"
                >
                    Показать ещё
                </Button>
            </BoxFlex>
        </Container>
    );
}

export default ArticlesBlock;