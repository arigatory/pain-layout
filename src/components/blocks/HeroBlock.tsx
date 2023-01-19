import React from "react";
import {Box, Container, Typography} from "@mui/material";
import {styled} from "@mui/system";
import theme from "../../theme";
import BoxFlexColumn from "../layout/BoxFlexColumn";

interface Props {
    background?: string,
    children?: React.ReactNode,
    title?: string,
    navigation?: React.ReactNode,
}

const HeroBlockBox = styled(Box)({
    padding: "232px 0 170px",
    backgroundPosition: "center",
    backgroundSize: "cover !important",
    borderRadius: "0 0 60px 60px",

    "@media (max-width: 899px)": {
        padding: "88px 0 60px",
    },
}) as typeof Box;

const NavigationBlock = styled(Box)(({theme}) => ({
    borderBottom: `1px solid ${theme.palette.border.main}`,
})) as typeof Box

const HeroBlockContentBox = styled(BoxFlexColumn)({
    alignItems: "center",
    justifyContent: "center",
    maxWidth: 833,
    textAlign: "center",
    margin: "0 auto",

    "@media (max-width: 899px)": {
        minHeight: "232px",
    },
}) as typeof BoxFlexColumn;

const HeroBlock = (props: Props) => {
    return (
        <Box>
            <HeroBlockBox
                sx={{
                    background: props.background,
                }}
            >
                <Container maxWidth="xl">
                    <HeroBlockContentBox>
                        {props.title &&
                            <Typography
                                variant="h1"
                                align="center"
                            >
                                {props.title}
                            </Typography>
                        }
                        {props.children}
                    </HeroBlockContentBox>
                </Container>
            </HeroBlockBox>
            {props.navigation &&
                <NavigationBlock>
                    <Container
                        maxWidth="xl"
                    >
                        {props.navigation}
                    </Container>
                </NavigationBlock>
            }
        </Box>
    );
}

HeroBlock.defaultProps = {
    background: theme.palette.gradient.main,
}

export default HeroBlock;