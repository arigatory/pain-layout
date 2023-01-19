import React from "react";
import {Container, Link, Typography} from "@mui/material";
import {styled} from "@mui/system";
import ArrowSmallRight from "../icons/ArrowSmallRight";
import theme from "../../theme";
import routes from "../../routes";
import CPaper from "../surfaces/CPaper";
import BoxFlex from "../layout/BoxFlex";
import BoxFlexColumn from "../layout/BoxFlexColumn";

const HowToWorksContainer = styled(BoxFlex)({
    flexWrap: "wrap",
    gridGap: 20,

    "@media (max-width: 899px)": {
        gridGap: 16,
    }
}) as typeof BoxFlex;

const HowToWorksItem = styled(BoxFlexColumn)({
    justifyContent: "space-between",
}) as typeof BoxFlexColumn;

const StyledCPaper = styled(CPaper)({
    flex: "1 1 0",
    width: 0,

    "@media (max-width: 899px)": {
        width: "auto",
        flex: "initial",
    },
}) as typeof CPaper;

const HowToWorksBlock = () => {

    const items = [
        {
            title: "Пройдите тест",
            text: "Пройдите тест и получите план, составленный искусственным интеллектом",
            linkText: "Пройти тест",
            url: routes.test,
        },
        {
            title: "Получите программу",
            text: "Откорректируйте индивидуальную программу с нашими специалистами",
            linkText: "Записаться на приём",
            url: routes.specialists,
        },
        {
            title: "Отслеживайте результат",
            text: "Занимайтесь с нашими специалистами и отслеживайте свой прогресс",
            linkText: "Войти в профиль",
            url: routes.login,
        },
    ];

    return (
        <Container maxWidth="xl">
            <Typography
                variant="h2"
                className="block-title"
            >
                Как это работает
            </Typography>
            <HowToWorksContainer>
                {items.map((val, i) => (
                    <StyledCPaper
                        key={i}
                    >
                        <HowToWorksItem>
                            <Typography
                                variant="h2"
                                sx={{
                                    backgroundImage: theme.palette.gradient.main,
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                    MozBackgroundClip: "text",
                                    MozTextFillColor: "transparent",
                                    paddingBottom: "32px",
                                    marginBottom: "28px",
                                    borderBottom: `1px solid ${theme.palette.border.main}`,
                                }}
                            >
                                0{i + 1}
                            </Typography>

                            <Typography
                                variant="subtitle1"
                                mb={1.5}
                            >
                                {items[i].title}
                            </Typography>
                            <Typography
                                variant="body2"
                                mb={5}
                            >
                                {items[i].text}
                            </Typography>

                            <Link
                                href={items[i].url}
                                sx={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                }}
                            >
                                <Typography
                                    variant="subtitle2"
                                    color="text.tertiary"
                                >
                                    {items[i].linkText}
                                </Typography>
                                <ArrowSmallRight
                                    color={theme.palette.text.tertiary}
                                />
                            </Link>
                        </HowToWorksItem>
                    </StyledCPaper>
                ))}
            </HowToWorksContainer>
        </Container>
    );
}

export default HowToWorksBlock;