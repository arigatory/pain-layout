import React from "react";
import {Container, Typography} from "@mui/material";
import teamMember1 from "../../img/team-member1.png";
import teamMember2 from "../../img/team-member2.png";
import teamMember3 from "../../img/team-member3.png";
import SpecialistCard from "../surfaces/SpecialistCard";
import Carousel from "react-multi-carousel";
import BoxFlex from "../layout/BoxFlex";
import CIconButton from "../inputs/CIconButton";
import ArrowSmallLeft from "../icons/ArrowSmallLeft";
import ArrowSmallRight from "../icons/ArrowSmallRight";
import BoxFlexColumn from "../layout/BoxFlexColumn";

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
                Ведущие специалисты

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

const SpecialistsCarouselBlock = () => {

    const specialists = [
        {
            name: "Шевцова Ксения Викторовна",
            position: "Психиатр",
            img: teamMember1,
            text: "Боли в спине, проведение лечебно-медикаментозных блокад в триггерные болевые зоны",
            price: 2000,
        },
        {
            name: "Волель Беатриса Альбертовна",
            position: "Психиатр",
            img: teamMember2,
            text: "Психиатрия и психосоматика, соматоформные и ипохондрические расстройства",
            price: 2000,
        },
        {
            name: "Петелин Дмитрий Сергеевич",
            position: "Психиатр",
            img: teamMember3,
            text: "Психиатрия и психосоматика, хронические и необъяснимые боли, тревожные расстройства",
            price: 2000,
        },
    ];

    return (
        <Container maxWidth="xl">
            <BoxFlexColumn>
                <Carousel
                    responsive={{
                        tablet: {
                            breakpoint: {max: 999999, min: 464},
                            items: 3
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
                    {specialists.map((val, i) => (
                        <SpecialistCard
                            name={specialists[i].name}
                            position={specialists[i].position}
                            text={specialists[i].text}
                            price={specialists[i].price}
                            img={specialists[i].img}
                        />
                    ))}
                </Carousel>
            </BoxFlexColumn>
        </Container>
    );
}

export default SpecialistsCarouselBlock;