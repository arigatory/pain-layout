import React from "react";
import Carousel from "react-multi-carousel";
import {Container, Typography} from "@mui/material";
import avatar1 from "../../img/team-member1.png";
import avatar2 from "../../img/team-member2.png";
import avatar3 from "../../img/team-member3.png";
import {styled} from "@mui/system";
import CIconButton from "../inputs/CIconButton";
import ArrowSmallLeft from "../icons/ArrowSmallLeft";
import ArrowSmallRight from "../icons/ArrowSmallRight";
import CAvatar from "../data-display/CAvatar";
import theme from "../../theme";
import CPaper from "../surfaces/CPaper";
import BoxFlexColumn from "../layout/BoxFlexColumn";
import BoxFlex from "../layout/BoxFlex";
import {dateFormatter} from "../../utils";

const ReviewItemBox = styled(BoxFlexColumn)({
    justifyContent: "space-between",
    height: 420,
}) as typeof BoxFlexColumn;

const ReviewInfoBox = styled(BoxFlex)({
    alignItems: "center",
    gridGap: 16,
}) as typeof BoxFlex;

const ReviewInfoTextBox = styled(BoxFlexColumn)({
    gridGap: 2,
}) as typeof BoxFlexColumn;

const ReviewItem = (props: {
    name: string,
    ts: number,
    text: string,
    avatar?: string,
}) => {

    return (
        <CPaper
            sx={{
                backgroundColor: theme.palette.surface.main,
                marginRight: "20px",
            }}
        >
            <ReviewItemBox>
                <Typography
                    variant="body2"
                >
                    {props.text}
                </Typography>

                <ReviewInfoBox>
                    <CAvatar
                        alt={props.name}
                        src={props.avatar}
                        size="md"
                    />
                    <ReviewInfoTextBox>
                        <Typography
                            variant="subtitle2"
                        >
                            {props.name}
                        </Typography>
                        <Typography
                            variant="body2"
                            color="text.tertiary"
                        >
                            {dateFormatter(props.ts)}
                        </Typography>
                    </ReviewInfoTextBox>
                </ReviewInfoBox>
            </ReviewItemBox>
        </CPaper>
    );
}

const ButtonGroup = (props: {
    next?: any,
    previous?: any,
}) => {
    return (
        <Typography
            variant="h2"
            className="block-title"
            sx={{
                order: -1,
            }}
        >
            <BoxFlex
                sx={{
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                Отзывы

                <BoxFlex
                    sx={{
                        gridGap: "16px",
                    }}
                >
                    <CIconButton
                        variant="outlined"
                        onClick={() => props.previous()}
                    >
                        <ArrowSmallLeft/>
                    </CIconButton>
                    <CIconButton
                        variant="outlined"
                        onClick={() => props.next()}
                    >
                        <ArrowSmallRight/>
                    </CIconButton>
                </BoxFlex>
            </BoxFlex>
        </Typography>
    )
}

const ReviewsBlock = () => {

    const reviews = [
        {
            name: "Шевцова Ксения Викторовна",
            ts: 1642809600000,
            avatar: avatar1,
            text: "Из 32 зубов, 29 обслуживаются в этой стоматологии! Нет смысла рассказывать про вежливый персонал, приятную обстановку и хорошее оборудование клиники! Самое главное, здесь борются за каждый зуб! Их действительно лечат!",
        },
        {
            name: "Волель Беатриса Альбертовна",
            ts: 1642809600000,
            avatar: avatar2,
            text: "Наблюдаюсь и лечусь в клинике уже 10 лет! Счастлива, что мне повезло встретиться со специалистом высшего класса: Эдуардом Вадимовичем! Очень боялась стоматологов, т к ранее приходилось много заниматься зубами. С первого визита возникло взаимопонимание и уверенность, что ты попал в надежные руки, что доказало дальнейшее общение",
        },
        {
            name: "Петелин Дмитрий Сергеевич",
            ts: 1642809600000,
            avatar: avatar3,
            text: "Наблюдаюсь и лечусь в клинике уже 10 лет! Счастлива, что мне повезло встретиться со специалистом высшего класса: Эдуардом Вадимовичем! Очень боялась стоматологов, т к ранее приходилось много заниматься зубами. С первого визита возникло взаимопонимание и уверенность, что ты попал в надежные руки, что доказало дальнейшее общение",
        },
    ];

    return (
        <Container maxWidth="xl">
            <BoxFlexColumn>
                <Carousel
                    responsive={{
                        tablet: {
                            breakpoint: {max: 999999, min: 464},
                            items: 2
                        },
                        mobile: {
                            breakpoint: {max: 600, min: 0},
                            items: 1
                        },
                    }}
                    arrows={false}
                    renderButtonGroupOutside={true}
                    customButtonGroup={<ButtonGroup/>}
                    infinite={true}
                >
                    {reviews.map((val, i) => (
                        <ReviewItem
                            key={i}
                            name={reviews[i].name}
                            ts={reviews[i].ts}
                            text={reviews[i].text}
                            avatar={reviews[i].avatar}
                        />
                    ))}
                </Carousel>
            </BoxFlexColumn>
        </Container>
    );
}

export default ReviewsBlock;