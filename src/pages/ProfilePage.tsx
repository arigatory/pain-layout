/* eslint-disable react-hooks/exhaustive-deps */
import {useEffect, useState} from "react";
import DefaultTemplate from "../templates/DefaultTemplate";
import HeroBlock from "../components/blocks/HeroBlock";
import {styled} from "@mui/system";
import {Box, Button, Container, Link, Typography, useMediaQuery} from "@mui/material";
import Identification from "../components/icons/Identification";
import UserGroup from "../components/icons/UserGroup";
import Gear from "../components/icons/Gear";
import Grid2 from "../components/icons/Grid2";
import BoxFlex from "../components/layout/BoxFlex";
import theme from "../theme";
import classNames from "classnames";
import SettingsBlock from "../components/blocks/SettingsBlock";
import MyMedicalRecordBlock from "../components/blocks/MyMedicalRecordBlock";
import RecordingsBlock from "../components/blocks/RecordingsBlock";
import IndividualPlanBlock from "../components/blocks/IndividualPlanBlock";
import ArrowRightOnRectangle from "../components/icons/ArrowRightOnRectangle";
import CIconButton from "../components/inputs/CIconButton";
import ArrowSmallLeft from "../components/icons/ArrowSmallLeft";

const NavigationsContainer = styled(BoxFlex)({
    justifyContent: "space-between",

    "@media (max-width: 899px)": {
        flexDirection: "column",
        marginTop: 20,
    },
}) as typeof BoxFlex

const NavigationBlockBox = styled(BoxFlex)({

    "@media (max-width: 899px)": {
        flexDirection: "column",

        "&:last-of-type a:last-of-type": {
            border: "none",
        },
    },
}) as typeof BoxFlex

const TabBox = styled(BoxFlex)(({theme}) => ({
    alignItems: "center",
    gridGap: 12,
    padding: "30px 0",

    "&.active": {
        color: theme.palette.text.primary,
        "& path": {
            stroke: theme.palette.primary.main,
        }
    },

    "@media (max-width: 899px)": {
        padding: "18px 0",
    },
})) as typeof BoxFlex

const TabButton = styled(Button)(({theme}) => ({

    "@media (max-width: 899px)": {
        justifyContent: "start",
        padding: 0,
        borderBottom: `1px solid ${theme.palette.border.main}`,
    },
})) as typeof Button

const ProfilePage = () => {
    const tabValues = {
        medicalCard: "medicalCard",
        individualPlan: "individualPlan",
        recordings: "recordings",
        settings: "settings",
    }
    const tabNavigation = {
        [tabValues.medicalCard]: {
            title: "Моя карта",
            icon: <Identification
                color={theme.palette.text.tertiary}
            />
        },
        [tabValues.individualPlan]: {
            title: "Индивидуальный план",
            icon: <Grid2
                color={theme.palette.text.tertiary}
            />
        },
        [tabValues.recordings]: {
            title: "Записи к специалистам",
            icon: <UserGroup
                color={theme.palette.text.tertiary}
            />
        },
    };

    const matches = useMediaQuery('(min-width:900px)');
    const [currentTab, setCurrentTab] = useState<string | null>(null)

    const handleClickTab = (tabValue: string): void => {
        setCurrentTab(tabValue)
    }

    useEffect(() => {
        if (matches) {
            setCurrentTab(tabValues.medicalCard)
        }
    }, [])

    return (
        <DefaultTemplate>
            {(matches || (!matches && currentTab === null)) &&
                <HeroBlock
                    title="Александр Сергеевич Пушкин"
                    navigation={
                        <NavigationsContainer>
                            <NavigationBlockBox>
                                {Object.keys(tabNavigation).map((tabValue, k) => (
                                    <TabButton
                                        key={k}
                                        variant="text"
                                        onClick={() => handleClickTab(tabValue)}
                                    >
                                        <TabBox
                                            className={
                                                classNames({
                                                    "active": currentTab === tabValue,
                                                })
                                            }
                                        >
                                            {tabNavigation[tabValue].icon}
                                            <Typography
                                                variant="subtitle2"
                                                color={currentTab === tabValue ? "text.primary" : "text.secondary"}
                                            >
                                                {tabNavigation[tabValue].title}
                                            </Typography>
                                        </TabBox>
                                    </TabButton>
                                ))}
                            </NavigationBlockBox>
                            <NavigationBlockBox>
                                <TabButton
                                    variant="text"
                                    onClick={() => handleClickTab(tabValues.settings)}
                                >
                                    <TabBox
                                        className={
                                            classNames({
                                                "active": currentTab === tabValues.settings,
                                            })
                                        }
                                    >
                                        <Gear
                                            color={theme.palette.text.tertiary}
                                        />
                                        <Typography
                                            variant="subtitle2"
                                            color={currentTab === tabValues.settings ? "text.primary" : "text.secondary"}
                                        >
                                            Настройки
                                        </Typography>
                                    </TabBox>
                                </TabButton>
                                <TabButton
                                    variant="text"
                                    component={Link}
                                    href="#"
                                >
                                    <TabBox>
                                        <ArrowRightOnRectangle
                                            color={theme.palette.text.tertiary}
                                        />
                                        <Typography
                                            variant="subtitle2"
                                            color="text.secondary"
                                        >
                                            Выход
                                        </Typography>
                                    </TabBox>
                                </TabButton>
                            </NavigationBlockBox>
                        </NavigationsContainer>
                    }
                />
            }

            {!matches && currentTab !== null &&
                <Container
                    maxWidth="xl"
                    disableGutters
                >
                    <Box
                        sx={{
                            margin: "88px 0 20px",
                            padding: "0 20px",
                        }}
                    >
                        <CIconButton
                            onClick={() => setCurrentTab(null)}
                            variant="outlined"
                            size="small"
                        >
                            <ArrowSmallLeft/>
                        </CIconButton>
                    </Box>
                </Container>
            }

            {currentTab === tabValues.medicalCard &&
                <MyMedicalRecordBlock/>
            }

            {currentTab === tabValues.individualPlan &&
                <IndividualPlanBlock/>
            }

            {currentTab === tabValues.recordings &&
                <RecordingsBlock/>
            }

            {currentTab === tabValues.settings &&
                <SettingsBlock/>
            }
        </DefaultTemplate>
    );
};

export default ProfilePage;
