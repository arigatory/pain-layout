import DefaultTemplate from "../templates/DefaultTemplate";
import HeroBlock from "../components/blocks/HeroBlock";
import {Box, Button, Container, Link, TextField, Typography} from "@mui/material";
import {styled} from "@mui/system";
import BoxFlex from "../components/layout/BoxFlex";
import FeaturedArticlesBlock from "../components/blocks/FeaturedArticlesBlock";
import {useNavigate} from "react-router-dom";
import ArrowSmallLeft from "../components/icons/ArrowSmallLeft";
import theme from "../theme";
import {dateFormatter, priceFormatter} from "../utils";
import BoxFlexColumn from "../components/layout/BoxFlexColumn";
import BoxList from "../components/layout/BoxList";
import imgSrc from "../img/article-image.jpg";
import CPaper from "../components/surfaces/CPaper";
import Bolt from "../components/icons/Bolt";
import CAvatar from "../components/data-display/CAvatar";
import avatar3 from "../img/team-member3.png";
import routes from "../routes";

const articleData = {
    title: "Биологическая обратная связь и натуральные добавки",
    tsPublication: 1642809600000,
    category: "мануальная терапия",
}

const NavigationBlock = styled(BoxFlex)({
    padding: "40px 0",
    justifyContent: "space-between",
}) as typeof BoxFlex

const NavigationInfoBlock = styled(BoxFlex)(({theme}) => ({
    alignItems: "center",
    gridGap: 8,

    "&::after": {
        content: "''",
        width: 4,
        height: 4,
        borderRadius: "50%",
        backgroundColor: theme.palette.text.secondary,
    },

    "@media (max-width: 899px)": {
        alignItems: "end",
        flexDirection: "column",
        gridGap: 2,

        "&::after": {
            display: "none",
        }
    }
})) as typeof BoxFlex

const Headline = styled(Box)(({theme}) => ({
    borderTop: `1px solid ${theme.palette.border.main}`,
    borderBottom: `1px solid ${theme.palette.border.main}`,
    padding: "40px 10px",
    textAlign: "center",
})) as typeof Box

const ArticleContainer = styled(Box)({
    paddingTop: 96,

    "@media (max-width: 899px)": {
        paddingTop: 12,
    }
}) as typeof Box

const TitleContainer = styled(BoxFlex)({
    gridGap: 36,
    alignItems: "center",

    "@media (max-width: 899px)": {
        flexDirection: "column",
    }
}) as typeof BoxFlex

const ArticleImage = (props: {
    src: string,
    alt?: string,
}) => (
    <img
        src={props.src}
        alt={props.alt}
        style={{
            borderRadius: 30,
        }}
    />
)

const CourseLeaderInfoBox = styled(BoxFlexColumn)(({theme}) => ({
    padding: "24px 0 32px",
    borderBottom: `1px solid ${theme.palette.border.main}`,
    gridGap: "32px",

    "&:last-of-type": {
        border: "none",
    }
})) as typeof BoxFlexColumn

const CourseLeader = (props: {
    avatar?: string,
    name: string,
    position: string,
    education?: string,
    placeOfWork?: string,
    specialization?: string,
}) => {
    return (
        <>
            <Typography
                variant="h4"
                sx={{
                    marginBottom: "51px",

                    "@media (max-width: 899px)": {
                        width: 28,
                    }
                }}
            >
                Ведущий курса:
            </Typography>

            <CPaper>
                <BoxFlexColumn
                    sx={{
                        alignItems: "center",
                        textAlign: "center",
                    }}
                >
                    <BoxFlexColumn
                        sx={{
                            alignItems: "center",
                            gridGap: 28,

                            "@media (max-width: 899px)": {
                                width: 24,
                            }
                        }}
                    >
                        <CAvatar
                            src={props.avatar}
                            alt={props.name}
                            size="xl"
                        />

                        <Typography
                            variant="h4"
                        >
                            {props.name}
                        </Typography>
                        <Typography
                            variant="captionUppercase"
                            color="primary"
                        >
                            {props.position}
                        </Typography>
                    </BoxFlexColumn>

                    {props.education &&
                        <CourseLeaderInfoBox>
                            <Typography
                                variant="subtitle1"
                            >
                                Образование
                            </Typography>
                            <Typography
                                variant="body1"
                                color="text.secondary"
                            >
                                {props.education}
                            </Typography>
                        </CourseLeaderInfoBox>
                    }

                    {props.placeOfWork &&
                        <CourseLeaderInfoBox>
                            <Typography
                                variant="subtitle1"
                            >
                                Место работы
                            </Typography>
                            <Typography
                                variant="body1"
                                color="text.secondary"
                            >
                                {props.placeOfWork}
                            </Typography>
                        </CourseLeaderInfoBox>
                    }

                    {props.specialization &&
                        <CourseLeaderInfoBox>
                            <Typography
                                variant="subtitle1"
                            >
                                Специализация
                            </Typography>
                            <Typography
                                variant="body1"
                                color="text.secondary"
                            >
                                {props.specialization}
                            </Typography>
                        </CourseLeaderInfoBox>
                    }
                </BoxFlexColumn>
            </CPaper>
        </>
    )
}

const BuyCourseBlock = () => {
    return (
        <CPaper
            sx={{
                background: theme.palette.gradient.main,
                padding: "60px 97px 79px",

                "@media (max-width: 899px)": {
                    padding: "32px 16px 40px"
                }
            }}
        >
            <Typography
                variant="h3"
                sx={{
                    textAlign: "center",
                    marginBottom: "48px",

                    "@media (max-width: 899px)": {
                        marginBottom: "10px",
                    }
                }}
            >
                Получите полный курс на Вашу <br/> электронную почту:
            </Typography>

            <TextField
                label="Email"
                variant="standard"
                type="email"
                fullWidth
                required
            />

            <Typography
                variant="subtitle2"
                sx={{
                    margin: "48px 0 81px",

                    "@media (max-width: 899px)": {
                        margin: "15px 0 26px",
                    }
                }}
            >
                Нажимая кнопку “Отправить” Вы даете согласие на <Link
                href={routes.policyPrivacy}>обработку персональных данных</Link>
            </Typography>

            <BoxFlex
                justifyContent="space-between"
                alignItems="center"
            >
                <Typography
                    variant="h4"
                >
                    {priceFormatter(9000)}
                </Typography>

                <Button
                    size="large"
                    variant="contained"
                >
                    Оплатить
                </Button>
            </BoxFlex>
        </CPaper>
    )
}

const PaidArticlePage = () => {
    const navigate = useNavigate();

    return (
        <DefaultTemplate>
            <HeroBlock
                background={theme.palette.physical.light}
                navigation={
                    <NavigationBlock>
                        <a
                            href="#"
                            onClick={() => navigate(-1)}
                        >
                            <BoxFlex
                                sx={{
                                    gridGap: 12,
                                    alignItems: "center",
                                }}
                            >
                                <BoxFlex
                                    sx={{
                                        padding: "10px",
                                        borderRadius: "50%",
                                        border: `1px solid ${theme.palette.border.main}`,
                                    }}
                                >
                                    <ArrowSmallLeft/>
                                </BoxFlex>
                                <Typography
                                    variant="subtitle2"
                                    color="text.primary"
                                    sx={{
                                        display: {xs: 'none', lg: 'flex'}
                                    }}
                                >
                                    Назад
                                </Typography>
                            </BoxFlex>
                        </a>

                        <NavigationInfoBlock>
                            <Typography
                                variant="subtitle2"
                                color="text.secondary"
                                order={-1}
                            >
                                <b>{dateFormatter(articleData.tsPublication)}</b>
                            </Typography>
                            <Typography
                                variant="subtitle2"
                                color="text.secondary"
                                order={1}
                            >
                                {articleData.category}
                            </Typography>
                        </NavigationInfoBlock>
                    </NavigationBlock>
                }
            >
                <BoxFlexColumn
                    sx={{
                        alignItems: "center",
                        gridGap: 30,
                    }}
                >
                    <BoxFlex
                        sx={{
                            width: 60,
                            height: 60,
                            alignItems: "center",
                            justifyContent: "center",
                            background: theme.palette.physical.main,
                            borderRadius: "50%",
                        }}
                    >
                        <Bolt
                            color={theme.palette.white.main}
                        />
                    </BoxFlex>
                    <Typography
                        variant="h1"
                        align="center"
                    >
                        {articleData.title}
                    </Typography>
                </BoxFlexColumn>
            </HeroBlock>

            <Container
                maxWidth="md"
            >
                <BoxFlexColumn
                    sx={{
                        gridGap: 80,
                    }}
                >
                    <TitleContainer>
                        <Typography
                            variant="h2"
                        >
                            Как помочь себе во время мигренозного приступа?
                        </Typography>

                        <Button
                            variant="contained"
                            size="large"
                        >
                            Регистрируюсь
                        </Button>
                    </TitleContainer>

                    <BoxFlexColumn
                        sx={{
                            gridGap: 59,
                        }}
                    >
                        <BoxFlexColumn
                            sx={{
                                gridGap: 32,
                            }}
                        >
                            <Typography
                                variant="subtitle1"
                            >
                                Для кого этот курс?
                            </Typography>
                            <BoxList>
                                {[
                                    "для людей с постоянными мигринохными приступами",
                                    "нежелающих пить обезболивающие во время приступа",
                                    "низкий болевой порог"
                                ].map((text, i) => (
                                    <li
                                        key={i}
                                    >
                                        <Typography
                                            variant="body2"
                                        >
                                            {text}
                                        </Typography>
                                    </li>
                                ))}
                            </BoxList>
                        </BoxFlexColumn>
                        <BoxFlexColumn
                            sx={{
                                gridGap: 32,
                            }}
                        >
                            <Typography
                                variant="subtitle1"
                            >
                                Что изменится в вашей жизни после прохождения курса?
                            </Typography>
                            <BoxList>
                                {[
                                    "Улучшите ваше здоровье",
                                    "Повысите свою стрессоустойчивость",
                                    "Улучшение настроения",
                                    "Увеличение внутренней энергии и работоспособности",
                                    "Улучшение настроения",
                                    "Увеличение внутренней энергии и работоспособности",
                                    "Улучшение настроения",
                                    "Увеличение внутренней энергии и работоспособности",
                                ].map((text, i) => (
                                    <li
                                        key={i}
                                    >
                                        <Typography
                                            variant="body2"
                                        >
                                            {text}
                                        </Typography>
                                    </li>
                                ))}
                            </BoxList>
                        </BoxFlexColumn>
                    </BoxFlexColumn>

                    <ArticleImage
                        src={imgSrc}
                    />

                    <Headline>
                        <Typography
                            variant="subtitle1"
                        >
                            «Как трициклические антидепрессанты (ТЦА), так и ингибиторы обратного <br/>
                            захвата серотонина (СИОЗС) и норадреналина (СИОЗСН) обладают <br/>
                            обезболивающими свойствами“
                        </Typography>
                    </Headline>

                    <CourseLeader
                        avatar={avatar3}
                        name="Шевцова Ксения Викторовна"
                        position="Невролог"
                        education="Первый МГМУ им. И.М. Сеченова (2013)"
                        placeOfWork="УКБ №3 Клиника нервных болезней им. А.Я. Кожевникова"
                        specialization="Психиатрия и психосоматика, особенно хронические и необъяснимые боли, тревожные расстройства, навязчивости, психические расстройства у больных злокачественными новообразованиями"
                    />

                    <BoxFlexColumn
                        sx={{
                            gridGap: 30,
                        }}
                    >
                        <Typography
                            variant="h3"
                        >
                            Структура курса и содержание:
                        </Typography>

                        <Typography
                            variant="body1"
                        >
                            В рамках курса мы изучим технику медитации «Швас Прекша» применительно к 10 различным
                            аспектам жизни.
                        </Typography>
                        <Typography
                            variant="body1"
                        >
                            Курс состоит из <b>5 занятий каждое по 30 мин:</b>
                        </Typography>

                        <BoxList
                            component="ol"
                        >
                            <li>
                                <Typography
                                    variant="body1"
                                >
                                    <b>Физиологический аспект</b>
                                </Typography>
                                <BoxList>
                                    {[
                                        "Влияние ритма и глубины дыхания на наше сердце и все тело в целом",
                                        "Важность глубокого дыхания для полноценной вентиляции легких",
                                    ].map((text, i) => (
                                        <li
                                            key={i}
                                        >
                                            <Typography
                                                variant="body2"
                                            >
                                                {text}
                                            </Typography>
                                        </li>
                                    ))}
                                </BoxList>
                            </li>
                            <li>
                                <Typography
                                    variant="body1"
                                >
                                    <b>Эмоциональный аспект</b>
                                </Typography>
                                <BoxList>
                                    {[
                                        "Взаимосвязь частоты дыхания и сердцебиения, а также эмоциональных состояний"
                                    ].map((text, i) => (
                                        <li
                                            key={i}
                                        >
                                            <Typography
                                                variant="body2"
                                            >
                                                {text}
                                            </Typography>
                                        </li>
                                    ))}
                                </BoxList>
                            </li>
                            <li>
                                <Typography
                                    variant="body1"
                                >
                                    <b>Психологический аспект</b>
                                </Typography>
                                <BoxList>
                                    {[
                                        "Учимся на 10 минут переключаться на другое состояние и деятельность",
                                        "Работа с интерпретацией как фактором стресса",
                                    ].map((text, i) => (
                                        <li
                                            key={i}
                                        >
                                            <Typography
                                                variant="body2"
                                            >
                                                {text}
                                            </Typography>
                                        </li>
                                    ))}
                                </BoxList>
                            </li>
                            <li>
                                <Typography
                                    variant="body1"
                                >
                                    <b>Избавление от боли</b>
                                </Typography>
                                <BoxList>
                                    {[
                                        "Выражение \"продышать боль\", что это значит и как это сделать",
                                        "Важность нарабатывания качества наблюдателя",
                                        "Физиология боли и болевых сигналов",
                                        "Зависимость уровня боли и уровня психологической подготовки",
                                        "Повышаем свой болевой порог с помощью практики"
                                    ].map((text, i) => (
                                        <li
                                            key={i}
                                        >
                                            <Typography
                                                variant="body2"
                                            >
                                                {text}
                                            </Typography>
                                        </li>
                                    ))}
                                </BoxList>
                            </li>
                            <li>
                                <Typography
                                    variant="body1"
                                >
                                    <b>Работа со страхами</b>
                                </Typography>
                                <BoxList>
                                    {[
                                        "Страхи личного характера и страхи социального характера",
                                        "Ключевая особенность страха",
                                    ].map((text, i) => (
                                        <li
                                            key={i}
                                        >
                                            <Typography
                                                variant="body2"
                                            >
                                                {text}
                                            </Typography>
                                        </li>
                                    ))}
                                </BoxList>
                            </li>
                        </BoxList>
                    </BoxFlexColumn>

                    <Headline>
                        <Typography
                            variant="subtitle1"
                        >
                            «Как трициклические антидепрессанты (ТЦА), так и ингибиторы обратного <br/>
                            захвата серотонина (СИОЗС) и норадреналина (СИОЗСН) обладают <br/>
                            обезболивающими свойствами“
                        </Typography>
                    </Headline>

                    <BuyCourseBlock/>

                </BoxFlexColumn>
            </Container>

            <Box>
                <Container
                    maxWidth="xl"
                >
                    <Box
                        sx={{
                            borderBottom: `1px solid ${theme.palette.border.main}`
                        }}
                    />
                </Container>
                <ArticleContainer>
                    <FeaturedArticlesBlock/>
                </ArticleContainer>
            </Box>
        </DefaultTemplate>
    )
}

export default PaidArticlePage;
