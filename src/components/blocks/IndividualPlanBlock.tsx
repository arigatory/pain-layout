import React, {useEffect, useState} from "react";
import {Box, Container, Grid, Link, Skeleton, Typography} from "@mui/material";
import BoxFlexColumn from "../layout/BoxFlexColumn";
import BoxFlex from "../layout/BoxFlex";
import theme from "../../theme";
import {styled} from "@mui/system";
import CPaper from "../surfaces/CPaper";
import {isDev, sleep} from "../../utils";
import CAvatar from "../data-display/CAvatar";
import {categories, getLightColorByCategory, getTitleByCategory} from "../../categories";
import CIconButton from "../inputs/CIconButton";
import Xmark from "../icons/Xmark";
import PlusButton from "../inputs/PlusButton";

const IndividualRowBox = styled(BoxFlex)(({theme}) => ({
    padding: "30px 0",
    borderTop: `1px solid ${theme.palette.border.main}`,
    gridGap: 20,
    justifyContent: "space-between",
})) as typeof BoxFlex

const IndividualItemPaper = styled(CPaper)(({theme}) => ({
    position: "relative",
    flexShrink: 0,
    width: 310,
    paddingLeft: 58,
    background: `linear-gradient(90deg, #C4C7D0 0%, #C4C7D0 30px, ${theme.palette.white.main} 30px)`,

    "@media (max-width: 899px)": {
        width: "100%",
    },
})) as typeof CPaper

const IndividualItemWrapper = styled(BoxFlex)({
    gridGap: 20,
    flexWrap: "wrap",
}) as typeof BoxFlex

const IndividualRowHeader = styled(BoxFlexColumn)({
    gridGap: 24,
    alignItems: "start",

    "@media (max-width: 899px)": {
        flexDirection: "row",
        justifyContent: "space-between",
    },
}) as typeof BoxFlexColumn

const PercentBox = styled(Box)({
    padding: "4px 16px",
    borderRadius: 40,
}) as typeof Box

const IndividualItem = (props: {
    title: string,
    color?: string,
}) => {
    return (
        <IndividualItemPaper
            sx={{
                background: props.color ? `linear-gradient(90deg, ${props.color} 0%, ${props.color} 30px, ${theme.palette.white.main} 30px)` : theme.palette.white.main,
            }}
        >
            <BoxFlexColumn
                sx={{
                    gridGap: 36,
                }}
            >
                <Typography
                    variant="subtitle2"
                >
                    {props.title}
                </Typography>

                <Link
                    href="#"
                >
                    <Typography
                        variant="subtitle2"
                        color="text.tertiary"
                    >
                        Посмотреть
                    </Typography>
                </Link>
            </BoxFlexColumn>
        </IndividualItemPaper>
    )
}

const IndividualSpecialist = (props: {
    id: number,
    name: string,
    avatar?: string,
}) => {
    const handleClick = () => {
        // todo implement
    }

    const handleClose = () => {
        // todo implement
    }

    return (
        <IndividualItemPaper>
            <BoxFlex
                sx={{
                    gridGap: 15,
                    alignItems: "center",
                }}
            >
                <BoxFlexColumn
                    sx={{
                        gridGap: 12,
                    }}
                >
                    <Typography
                        variant="subtitle2"
                    >
                        {props.name}
                    </Typography>

                    <Link
                        href="#"
                        onClick={handleClick}
                    >
                        <Typography
                            variant="subtitle2"
                            color="text.tertiary"
                        >
                            Записаться
                        </Typography>
                    </Link>
                </BoxFlexColumn>
                <CAvatar
                    src={props.avatar}
                    alt={props.name}
                />
            </BoxFlex>

            <CIconButton
                size="small"
                sx={{
                    backgroundColor: "#C4C7D0",
                    position: "absolute",
                    right: 0,
                    top: 0,
                    transform: "translate(35%, -35%)",
                    opacity: 0.6,

                    "&:hover": {
                        backgroundColor: "#C4C7D0",
                        opacity: 1,
                    }
                }}
                onClick={handleClose}
            >
                <Xmark
                    color={theme.palette.white.main}
                />
            </CIconButton>
        </IndividualItemPaper>
    )
}

const IndividualRow = (props: {
    title: string,
    percent: number,
    color?: string,
    items: {
        id: number,
        title: string,
    }[]
}) => {
    return (
        <IndividualRowBox>
            <Grid
                container
                spacing={2}
            >
                <Grid
                    item
                    xs={12}
                    md={3}
                >
                    <IndividualRowHeader>
                        <Typography
                            variant="h4"
                        >
                            {props.title}
                        </Typography>
                        <PercentBox
                            sx={{
                                backgroundColor: props.color,
                            }}
                        >
                            <Typography
                                variant="subtitle1"
                            >
                                {props.percent} %
                            </Typography>
                        </PercentBox>
                    </IndividualRowHeader>
                </Grid>
                <Grid
                    item
                    xs={12}
                    md={9}
                >

                    <IndividualItemWrapper>
                        {props.items.map(block => (
                            <IndividualItem
                                title={block.title}
                                color={props.color}
                            />
                        ))}
                    </IndividualItemWrapper>
                </Grid>
            </Grid>
        </IndividualRowBox>
    )
}

const IndividualPlanBlock = () => {
    const [loadingPlanData, setLoadingPlanData] = useState<boolean>(true)
    const [planData, setPlanData] = useState<{
        category: keyof typeof categories,
        percent: number,
        items: {
            id: number,
            title: string,
        }[]
    }[]>([])
    const [loadingMySpecialists, setLoadingMySpecialists] = useState<boolean>(true)
    const [mySpecialists, setMySpecialists] = useState<{id: number, name: string, avatar?: string}[]>([])

    const handleAddSpecialist = () => {
        // todo implement
    }

    const fetchMySpecialists = async () => {
        if (isDev) {
            await sleep(500)
            const response = require("../../mocks/individualPlan__getMySpecialists.json").data
            setMySpecialists(response)
        }
        setLoadingMySpecialists(false)
    };

    const fetchPlanData = async () => {
        if (isDev) {
            await sleep(1500)
            const response = require("../../mocks/individualPlan__getPlanData.json").data
            setPlanData(response)
        }
        setLoadingPlanData(false)
    };

    useEffect(() => {
        fetchMySpecialists()
        fetchPlanData()
    }, [])

    return (
        <Container maxWidth="xl">
            <BoxFlexColumn
                sx={{
                    gridGap: 50,

                    "@media (max-width: 899px)": {
                        gridGap: 40,
                    },
                }}
            >
                <Typography
                    variant="h2"
                >
                    Индивидуальный план
                </Typography>

                <BoxFlexColumn>
                    <IndividualRowBox>
                        {loadingMySpecialists ? (
                            <Skeleton
                                variant="rounded"
                                height="16rem"
                                width="100%"
                            />
                        ) : (
                            <Grid
                                container
                                spacing={2}
                            >
                                <Grid
                                    item
                                    xs={12}
                                    md={3}
                                >
                                    <Typography
                                        variant="h4"
                                    >
                                        Мои специалисты по боли
                                    </Typography>

                                </Grid>

                                <Grid
                                    item
                                    xs={12}
                                    md={9}
                                >
                                    <IndividualItemWrapper>
                                        {mySpecialists.map((specialist, i) => (
                                            <IndividualSpecialist
                                                key={i}
                                                id={specialist.id}
                                                name={specialist.name}
                                                avatar={specialist.avatar}
                                            />
                                        ))}
                                        <IndividualItemPaper
                                            sx={{
                                                paddingLeft: "38px",
                                                paddingRight: "6px",
                                            }}
                                        >
                                            <BoxFlex
                                                height="100%"
                                                alignItems="center"
                                            >
                                                <PlusButton
                                                    onClick={handleAddSpecialist}
                                                    sx={{
                                                        paddingRight: "12px",
                                                    }}
                                                >
                                                    Добавить специалиста
                                                </PlusButton>
                                            </BoxFlex>
                                        </IndividualItemPaper>
                                    </IndividualItemWrapper>
                                </Grid>
                            </Grid>
                        )}
                    </IndividualRowBox>
                    {loadingPlanData ? (
                        <>
                            <IndividualRowBox>
                                <Skeleton
                                    variant="rounded"
                                    height="16rem"
                                    width="100%"
                                />
                            </IndividualRowBox>

                            <IndividualRowBox>
                                <Skeleton
                                    variant="rounded"
                                    height="16rem"
                                    width="100%"
                                />
                            </IndividualRowBox>

                            <IndividualRowBox>
                                <Skeleton
                                    variant="rounded"
                                    height="16rem"
                                    width="100%"
                                />
                            </IndividualRowBox>
                        </>
                    ) : (
                      <>
                          {planData.map((planDatum, i) => (
                              <IndividualRow
                                  key={i}
                                  title={getTitleByCategory(planDatum.category)}
                                  percent={planDatum.percent}
                                  color={getLightColorByCategory(planDatum.category)}
                                  items={planDatum.items}
                              />
                          ))}
                      </>
                    )}
                </BoxFlexColumn>
            </BoxFlexColumn>
        </Container>
    );
}

export default IndividualPlanBlock;