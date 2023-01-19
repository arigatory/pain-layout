import React from "react";
import {Box, Container, Typography} from "@mui/material";
import {styled} from "@mui/system";
import partners01 from "../../img/partners-01.png";
import partners02 from "../../img/partners-02.png";
import partners03 from "../../img/partners-03.png";
import CPaper from "../surfaces/CPaper";
import theme from "../../theme";
import BoxFlex from "../layout/BoxFlex";

const OurPartnersContainer = styled(BoxFlex)({
    gridGap: 20,

    "@media (max-width: 899px)": {
        flexDirection: "column",
        gridGap: 12,
    },
}) as typeof Box;

const OurPartnersItem = styled(BoxFlex)({
    height: 160,
    alignItems: "center",
    justifyContent: "center",
}) as typeof BoxFlex;

const StyledCPaper = styled(CPaper)({
    backgroundColor: theme.palette.surface.main,
    flex: "1 1 0",
    width: 0,

    "@media (max-width: 899px)": {
        width: "auto",
        flex: "initial",
    },
}) as typeof CPaper;


const OurPartnersBlock = () => {

    const partners = [
        partners01,
        partners02,
        partners03,
    ];

    return (
        <Container maxWidth="xl">
            <Typography
                variant="h2"
                className="block-title"
            >
                Наши партнеры
            </Typography>

            <OurPartnersContainer>
                {partners.map((partner, i) => (
                    <StyledCPaper
                        key={i}
                    >
                        <OurPartnersItem>
                            <img
                                src={partner}
                                alt="Наш партнер"
                            />
                        </OurPartnersItem>
                    </StyledCPaper>
                ))}
            </OurPartnersContainer>

        </Container>
    );
}

export default OurPartnersBlock;