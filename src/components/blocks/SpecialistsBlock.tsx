import React from "react";
import {Button, Container, Link, Typography} from "@mui/material";
import teamMember1 from "../../img/team-member1.png";
import teamMember2 from "../../img/team-member2.png";
import teamMember3 from "../../img/team-member3.png";
import routes from "../../routes";
import SpecialistCard from "../surfaces/SpecialistCard";
import Carousel from "react-multi-carousel";

const SpecialistsBlock = () => {

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
            <Typography
                variant="h2"
                className="block-title"
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                }}
            >
                Ведущие специалисты

                <Button
                    variant="outlined"
                    color="primary"
                    size="large"
                    component={Link}
                    href={routes.specialists}
                    sx={{
                        display: {
                            xs: "none",
                            sm: "block",
                        },
                    }}
                >
                    Все специалисты
                </Button>
            </Typography>

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
            >
                {specialists.map((val, i) => (
                    <SpecialistCard
                        key={i}
                        name={specialists[i].name}
                        position={specialists[i].position}
                        text={specialists[i].text}
                        price={specialists[i].price}
                        img={specialists[i].img}
                    />
                ))}
            </Carousel>
        </Container>
    );
}

export default SpecialistsBlock;