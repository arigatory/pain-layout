import React from "react";
import {Container, Typography} from "@mui/material";
import {styled} from "@mui/system";
import BoxFlex from "../layout/BoxFlex";
import teamMember1 from "../../img/team-member1.png";
import teamMember2 from "../../img/team-member2.png";
import teamMember3 from "../../img/team-member3.png";
import SpecialistCard from "../surfaces/SpecialistCard";
import BoxFlexColumn from "../layout/BoxFlexColumn";

const SpecialistsWrapper = styled(BoxFlex)({
    flexWrap: "wrap",
    gridGap: 20,
    maxWidth: 1300,
}) as typeof BoxFlex;

const SpecialistsByCategoryBlock = () => {

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
                    Ведущие специалисты
                </Typography>

                <SpecialistsWrapper>
                    {specialists.map((val, i) => (
                        <SpecialistCard
                            name={specialists[i].name}
                            position={specialists[i].position}
                            text={specialists[i].text}
                            price={specialists[i].price}
                            img={specialists[i].img}
                        />
                    ))}
                </SpecialistsWrapper>
            </BoxFlexColumn>
        </Container>
    );
}

export default SpecialistsByCategoryBlock;