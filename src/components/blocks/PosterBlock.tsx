import React from "react";
import {Container} from "@mui/material";
import {styled} from "@mui/system";
import BoxFlex from "../layout/BoxFlex";

interface Props {
    background?: string,
    children?: React.ReactNode,
}

const PosterBox = styled(BoxFlex)({
    backgroundPosition: "center",
    backgroundSize: "cover !important",
    borderRadius: 30,
    height: 700,
    alignItems: "center",
    padding: "82px 155px",

    "@media (max-width: 899px)": {
        height: "auto",
        padding: "58px 24px",
    },
}) as typeof BoxFlex;

const PosterBlock = (props: Props) => {
    return (
        <Container maxWidth="xl">
            <PosterBox
                sx={{
                    background: props.background,
                }}
            >
                {props.children}
            </PosterBox>
        </Container>
    );
}

export default PosterBlock;