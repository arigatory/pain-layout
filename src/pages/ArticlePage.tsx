/* eslint-disable jsx-a11y/anchor-is-valid */
import DefaultTemplate from "../templates/DefaultTemplate";
import HeroBlock from "../components/blocks/HeroBlock";
import {Box, Container, Table, TableHead, TableRow, TableCell, Typography} from "@mui/material";
import {styled} from "@mui/system";
import BoxFlex from "../components/layout/BoxFlex";
import FeaturedArticlesBlock from "../components/blocks/FeaturedArticlesBlock";
import {useNavigate} from "react-router-dom";
import ArrowSmallLeft from "../components/icons/ArrowSmallLeft";
import theme from "../theme";
import {dateFormatter} from "../utils";
import BoxFlexColumn from "../components/layout/BoxFlexColumn";
import BoxList from "../components/layout/BoxList";
import CVideo from "../components/surfaces/CVideo";
import videoSrc from "../video/video-example.mp4";
import imgSrc from "../img/article-image.jpg";
import CPaper from "../components/surfaces/CPaper";

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

const ArticlePage = () => {
    const navigate = useNavigate();

    const tableData = [
        {
            drug: "Generic (Ibuprofen)",
            dosage: "По требованию",
        },
        {
            drug: "Ibuflam (Ibuprofen)",
            dosage: "400 мг",
        },
        {
            drug: "Generic (Ketoprofen)",
            dosage: "200 мг",
        },
        {
            drug: "Generic (Aspirin / Acetyl...",
            dosage: "По требованию",
        },
        {
            drug: "Headaches",
            dosage: "По требованию",
        },
    ]

    return (
        <DefaultTemplate>
            <HeroBlock
                title={articleData.title}
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
            />

            <Container
                maxWidth="md"
            >
                <BoxFlexColumn
                    sx={{
                        gridGap: 80,
                    }}
                >
                    <Typography
                        variant="h2"
                    >
                        Что важно знать про каждую группу препаратов?
                    </Typography>

                    <BoxFlexColumn
                        sx={{
                            gridGap: 32,
                        }}
                    >
                        <Typography
                            variant="subtitle1"
                        >
                            НПВП (нестероидные противовоспалительные препараты)
                        </Typography>
                        <Typography
                            variant="body1"
                        >
                            В первую очередь показаны при лёгкой и умеренной боли, особенно соматического происхождения,
                            хотя
                            ряд
                            более новых соединений имеют показания при сильной боли. Анальгетический эффект НПВП
                            обусловлен как
                            их периферическим действием на фермент циклооксигеназу, который играет центральную роль в
                            воспалительных состояниях. Ингибиторы циклооксигеназы-2 (целекоксиб) не уступают по действию
                            и
                            обладают меньшим количеством побочных эффектов со стороны ЖКТ, по сравнению с неселективным
                            НПВП.
                            Следует по возможности избегать регулярного применения НПВП у пациентов, принимающих низкие
                            дозы
                            аспирина для профилактики сердечно-сосудистых заболеваний.
                        </Typography>
                        <Typography
                            variant="body1"
                        >
                            Роль опиоидной терапии при более тяжёлых формах острой боли и при раковой боли хорошо
                            известна, но
                            назначение опиоидов при хронической нераковой боли остаётся спорным. Для пациентов с
                            хронической
                            неонкологической болью решение о начале опиоидной терапии должно быть тщательно взвешено.
                        </Typography>
                    </BoxFlexColumn>

                    <BoxFlexColumn
                        sx={{
                            gridGap: 32,
                        }}
                    >
                        <Typography
                            variant="subtitle1"
                        >
                            Антидепрессанты
                        </Typography>
                        <Typography
                            variant="body1"
                        >
                            Как трициклические антидепрессанты (ТЦА), так и ингибиторы обратного захвата серотонина
                            (СИОЗС)
                            и норадреналина (СИОЗСН) обладают обезболивающими свойствами. Анальгетическая эффективность
                            антидепрессантов при нейропатической боли была установлена у пациентов, не страдающих
                            депрессией.
                        </Typography>
                        <BoxList>
                            <li>
                                <Typography
                                    variant="body2"
                                >
                                    Неселективные
                                </Typography>
                            </li>
                            <li>
                                <Typography
                                    variant="body2"
                                >
                                    Селективные (ингибиторы ЦОГ-2)
                                </Typography>
                            </li>
                        </BoxList>
                    </BoxFlexColumn>

                    <CVideo link={videoSrc}/>

                    <Headline>
                        <Typography
                            variant="subtitle1"
                        >
                            «Как трициклические антидепрессанты (ТЦА), так и ингибиторы обратного <br/>
                            захвата серотонина (СИОЗС) и норадреналина (СИОЗСН) обладают <br/>
                            обезболивающими свойствами“
                        </Typography>
                    </Headline>

                    <Typography
                        variant="h2"
                    >
                        НПВП (нестероидные противовоспалительные препараты)
                    </Typography>

                    <Typography
                        variant="body1"
                    >
                        Роль опиоидной терапии при более тяжёлых формах острой боли и при раковой боли хорошо известна,
                        но назначение опиоидов при хронической нераковой боли остаётся спорным. Для пациентов с
                        хронической неонкологической болью решение о начале опиоидной терапии должно быть тщательно
                        взвешено.
                    </Typography>

                    <ArticleImage
                        src={imgSrc}
                    />

                    <Typography
                        variant="body1"
                    >
                        Роль опиоидной терапии при более тяжёлых формах острой боли и при раковой боли хорошо известна,
                        но назначение опиоидов при хронической нераковой боли остаётся спорным. Для пациентов с
                        хронической неонкологической болью решение о начале опиоидной терапии должно быть тщательно
                        взвешено.
                    </Typography>

                    <CPaper>
                        <Table
                            className="pain-table"
                        >
                            <TableHead>
                                <TableCell>
                                    <Typography
                                        variant="captionUppercase"
                                        color="text.tertiary"
                                    >
                                        Лекарство
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography
                                        variant="captionUppercase"
                                        color="text.tertiary"
                                    >
                                        Дозировка
                                    </Typography>
                                </TableCell>
                            </TableHead>
                            {tableData.map((tableDatum, i) => (
                                <TableRow
                                    key={i}
                                >
                                    <TableCell>
                                        {tableDatum.drug}
                                    </TableCell>
                                    <TableCell>
                                        {tableDatum.dosage}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </Table>
                    </CPaper>
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

export default ArticlePage;
