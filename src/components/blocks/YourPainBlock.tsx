import React, {useEffect, useState} from "react";
import {Container, Skeleton, Typography} from "@mui/material";
import {styled} from "@mui/system";
import CIconButton from "../inputs/CIconButton";
import ArrowSmallRight from "../icons/ArrowSmallRight";
import theme from "../../theme";
import CPaper from "../surfaces/CPaper";
import BoxFlexColumn from "../layout/BoxFlexColumn";
import BoxFlex from "../layout/BoxFlex";
import {isDev, sleep} from "../../utils";

const PainContainer = styled(BoxFlex)({
    flexWrap: "wrap",
    gridGap: 12,

    "@media (max-width: 899px)": {
        gridGap: 16,
    }
}) as typeof BoxFlex;

const PainItem = styled(BoxFlexColumn)({
    justifyContent: "space-between",
    height: 148,
}) as typeof BoxFlexColumn;

const StyledCPaper = styled(CPaper)({
    padding: "16px 20px",
    width: 152,
}) as typeof CPaper;

const YourPainBlock = () => {
    const [loading, setLoading] = useState<boolean>(true)
    const [categories, setCategories] = useState<{ id: number, name: string }[]>([])

    const fetchCategories = async () => {
        if (isDev) {
            await sleep(900)
            const response = require("../../mocks/posts__getCategories.json").data
            setCategories(response)
        }
        setLoading(false)
    };

    useEffect(() => {
        fetchCategories()
    }, [])

    return (
        <Container maxWidth="xl">
            <Typography
                variant="h2"
                className="block-title"
            >
                Что у вас болит?
            </Typography>
            <PainContainer>
                {loading ? (
                    <Skeleton
                        variant="rounded"
                        width="100%"
                        height="148px"
                    />
                ) : (
                    <>
                        {categories.map((category, i) => (
                            <StyledCPaper
                                key={i}
                            >
                                <PainItem>
                                    <Typography
                                        variant="subtitle2"
                                    >
                                        {category.name}
                                    </Typography>
                                    <CIconButton
                                        sx={{
                                            backgroundColor: theme.palette.background.default,
                                        }}
                                    >
                                        <ArrowSmallRight
                                            color={theme.palette.text.primary}
                                        />
                                    </CIconButton>
                                </PainItem>
                            </StyledCPaper>
                        ))}
                    </>
                )}
            </PainContainer>
        </Container>
    );
}

export default YourPainBlock;