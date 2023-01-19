import React, {useEffect, useState} from "react";
import {
    Box,
    Button,
    Checkbox,
    Container,
    FormControl,
    FormControlLabel,
    Grid,
    InputLabel,
    MenuItem,
    SelectChangeEvent,
    Skeleton,
    Table,
    TableCell,
    TableRow,
    Typography,
    useMediaQuery
} from "@mui/material";
import BoxFlex from "../layout/BoxFlex";
import CSelect from "../inputs/CSelect";
import DocumentText from "../icons/DocumentText";
import {styled} from "@mui/system";
import CPaper from "../surfaces/CPaper";
import BoxFlexColumn from "../layout/BoxFlexColumn";
import {makeStyles} from "@mui/styles";
import LinearProgressWithLabel from "../charts/LinearProgressWithLabel";
import PieChart from "../charts/PieChart";
import PainScore from "../data-display/PainScore";
import PainProgress from "../data-display/PainProgress";
import theme from "../../theme";
import {isDev, sleep} from "../../utils";
import PlusButton from "../inputs/PlusButton";
import DateAgo from "../functional/DateAgo";
import BarChart from "../charts/BarChart";

const useStyles = makeStyles({
    parent: {
        display: "grid",
        gridGap: 20,
        gridTemplateColumns: "repeat(3, 1fr)",
        gridTemplateRow: "repeat(5, 1fr)",

        "@media (max-width: 899px)": {
            display: "flex",
            flexDirection: "column",
        },
    },
    block1: {
        gridArea: "1 / 1 / 2 / 2",
    },
    block2: {
        gridArea: "2 / 1 / 5 / 2",
    },
    block3: {
        gridArea: "1 / 2 / 3 / 3",
    },
    block4: {
        gridArea: "1 / 3 / 3 / 4",
    },
    block5: {
        gridArea: "3 / 2 / 5 / 4",
    },
    block6: {
        gridArea: "5 / 1 / 6 / 2",
    },
    block7: {
        gridArea: "5 / 2 / 6 / 3",
    },
    block8: {
        gridArea: "5 / 3 / 6 / 4",
    },
    block9: {
        gridArea: "6 / 1 / 7 / 4",
    },
});

const TitleContainer = styled(BoxFlex)({
    justifyContent: "space-between",
    marginBottom: "50px",

    "@media (max-width: 899px)": {
        flexDirection: "column",
        gridGap: 40,
    },
    "@media(max-width: 599px)": {
        padding: "0 20px",
    }
}) as typeof BoxFlex

const LocalizationGraphWrapper = styled(BoxFlex)(({theme}) => ({
    borderRadius: 20,
    backgroundColor: theme.palette.background.default,
    gridGap: 20,
    padding: "25px 50px",
    minHeight: "231px",
})) as typeof BoxFlex

const NoteItem = styled(BoxFlex)({
    display: "grid",
    gridTemplateColumns: "235px 1fr",
    gridTemplateRows: "1fr",
    gridGap: "14px",

    "@media (max-width: 899px)": {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
}) as typeof BoxFlex

const ControlMethodWrapper = styled(BoxFlexColumn)(({theme}) => ({
    borderRadius: 15,
    backgroundColor: theme.palette.background.default,
    padding: "18px 19px 18px 24px",
})) as typeof BoxFlexColumn

const ControlMethodItem = styled(BoxFlex)(({theme}) => ({
    justifyContent: "space-between",
    padding: "18px 0",
    borderBottom: `1px solid ${theme.palette.border.main}`,

    "&:first-of-type": {
        paddingTop: 0,
    },
    "&:last-of-type": {
        paddingBottom: 0,
        borderBottom: "none",
    }
})) as typeof BoxFlex

const InfoBlock = (props: {
    title: string,
    columnTitle1?: string,
    columnTitle2?: string,
    rows: {
        title: string,
        value: string,
    }[],
}) => (
    <BoxFlexColumn
        sx={{
            gridGap: 12,
        }}
    >
        <Typography
            variant="subtitle1"
        >
            {props.title}
        </Typography>

        <Table
            className="pain-table"
        >
            {(props.columnTitle1 && props.columnTitle2) &&
                <TableRow>
                    <TableCell>
                        <Typography
                            variant="captionUppercase"
                            color="text.tertiary"
                        >
                            {props.columnTitle1}
                        </Typography>
                    </TableCell>
                    <TableCell>
                        <Typography
                            variant="captionUppercase"
                            color="text.tertiary"
                        >
                            {props.columnTitle2}
                        </Typography>
                    </TableCell>
                </TableRow>
            }
            {props.rows.map((data, i) => (
                <TableRow
                    key={i}
                >
                    <TableCell>
                        <Typography
                            variant="body2"
                            color="text.secondary"
                        >
                            {data.title}
                        </Typography>
                    </TableCell>
                    <TableCell>
                        <Typography
                            variant="body2"
                        >
                            {data.value}
                        </Typography>
                    </TableCell>
                </TableRow>
            ))}
        </Table>
    </BoxFlexColumn>
)

const ProgressesBlock = (props: {
    title: string,
    data: {
        title: string,
        value: number,
    }[]
}) => (
    <BoxFlexColumn
        sx={{
            gridGap: 12,
        }}
    >
        <Typography
            variant="subtitle1"
        >
            {props.title}
        </Typography>

        <BoxFlexColumn>
            {props.data.map((datum, i) => (
                <LinearProgressWithLabel
                    key={i}
                    value={datum.value}
                    title={datum.title}
                />
            ))}
        </BoxFlexColumn>
    </BoxFlexColumn>
)

const PainSyndromeBlock = (props: {
    data: {
        localization: string,
        startTs: number,
    }[]
}) => {
    return (
        <BoxFlexColumn
            height="100%"
            justifyContent="space-between"
        >
            <BoxFlexColumn>
                <Typography
                    variant="subtitle1"
                    marginBottom="20px"
                >
                    Болевой синдром
                </Typography>

                <Grid
                    container
                    sx={{
                        borderBottom: `1px solid ${theme.palette.border.main}`,
                        paddingBottom: "11px",
                    }}
                >
                    <Grid
                        item
                        xs={6}
                    >
                        <Typography
                            variant="captionUppercase"
                            color="text.tertiary"
                        >
                            Локализация
                        </Typography>
                    </Grid>
                    <Grid
                        item
                        xs={6}
                    >
                        <Typography
                            variant="captionUppercase"
                            color="text.tertiary"
                        >
                            Появление
                        </Typography>
                    </Grid>
                </Grid>

                {props.data.map((datum, i) => (
                    <Grid
                        key={i}
                        container
                        sx={{
                            paddingTop: "12px",
                            marginBottom: "33px",
                        }}
                    >
                        <Grid
                            item
                            xs={6}
                        >
                            <Typography
                                variant="subtitle2"
                            >
                                {datum.localization}
                            </Typography>
                        </Grid>
                        <Grid
                            item
                            xs={6}
                        >
                            <Typography
                                variant="subtitle2"
                            >
                                <DateAgo
                                    ts={datum.startTs}
                                />
                            </Typography>
                        </Grid>
                    </Grid>
                ))}
            </BoxFlexColumn>

            <BoxFlexColumn>
                <PlusButton
                    sx={{
                        marginBottom: "21px",
                    }}
                >
                    Добавить историю моей боли
                </PlusButton>

                <LocalizationGraphWrapper>
                </LocalizationGraphWrapper>
            </BoxFlexColumn>
        </BoxFlexColumn>
    )
}

const NotesBlock = (props: {
    data: {
        date: string,
        content: string,
    }[]
}) => {
    return (
        <BoxFlexColumn
            sx={{
                gridGap: 31,
            }}
        >
            <Typography
                variant="subtitle1"
            >
                Примечания и дополнительная информация
            </Typography>

            <BoxFlexColumn
                rowGap="14px"
            >
                {props.data.map((datum, i) => (
                    <NoteItem
                        key={i}
                    >
                        {i === 0
                            &&
                            <PlusButton>
                                Добавить запись
                            </PlusButton>
                        }

                        <BoxFlex
                            sx={{
                                gridArea: "1 / 2 / 2 / 3",
                                padding: "11px 18px",
                                borderRadius: "20px",
                                backgroundColor: theme.palette.background.default,
                            }}
                        >
                            <Typography
                                variant="body2"
                            >
                                {datum.date} {datum.content}
                            </Typography>
                        </BoxFlex>
                    </NoteItem>
                ))}
            </BoxFlexColumn>
        </BoxFlexColumn>
    )
}

const ControlMethodsBlock = (props: {
    values: {
        psychotherapy: null | number,
        meditation: null | number,
        yoga: null | number,
        bos: null | number,
        physical: null | number,
        manual: null | number,
        acupuncture: null | number,
        invasive: null | number,
    }
}) => {
    const [isPainkiller, setIsPainkiller] = useState<boolean>(false)

    const data = [
        {
            title: "Разум",
            items: {
                psychotherapy: {
                    title: "Психотерапия",
                    color: theme.palette.psychotherapy.main,
                },
                meditation: {
                    title: "Медитация",
                    color: theme.palette.meditation.main,
                },
                yoga: {
                    title: "Йога",
                    color: theme.palette.yoga.main,
                },
                bos: {
                    title: "БОС",
                    color: theme.palette.bos.main,
                },
            }
        },
        {
            title: "Тело",
            items: {
                physical: {
                    title: "Физическая терапия",
                    color: theme.palette.physical.main,
                },
                manual: {
                    title: "Мануальная терапия",
                    color: theme.palette.manual.main,
                },
                acupuncture: {
                    title: "Акупунктура",
                    color: theme.palette.acupuncture.main,
                },
                invasive: {
                    title: "Инвазивные методы",
                    color: theme.palette.invasive.main,
                },
            }
        }
    ]
    return (
        <BoxFlexColumn>
            <Typography
                variant="subtitle1"
                marginBottom="26px"
            >
                Методы контроля
            </Typography>

            {data.map((group, i) => (
                <BoxFlexColumn
                    key={i}
                    marginBottom="24px"
                >
                    <Typography
                        variant="subtitle1"
                        marginBottom="6px"
                        paddingLeft="12px"
                    >
                        {group.title}
                    </Typography>

                    <ControlMethodWrapper>
                        {Object.keys(group.items).map((groupKey, k) => (
                            <ControlMethodItem
                                key={k}
                            >
                                <Typography
                                    variant="subtitle2"
                                >
                                    {group.items[groupKey as keyof typeof group.items]?.title}
                                </Typography>

                                <BoxFlex
                                    sx={{
                                        backgroundColor: group.items[groupKey as keyof typeof group.items]?.color,
                                        padding: "4px 16px",
                                        borderRadius: 40,
                                    }}
                                >
                                    <Typography
                                        variant="subtitle1"
                                    >
                                        {props.values[groupKey as keyof typeof props.values] ? props.values[groupKey as keyof typeof props.values] + "%" : "-"}
                                    </Typography>
                                </BoxFlex>
                            </ControlMethodItem>
                        ))}
                    </ControlMethodWrapper>
                </BoxFlexColumn>
            ))}

            <FormControlLabel
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
                control={
                    <Checkbox
                        checked={isPainkiller}
                        onChange={e => setIsPainkiller(e.target.checked)}
                    />
                }
                labelPlacement="start"
                label={
                    <Typography
                        variant="subtitle1"
                    >
                        Обезболивающие
                    </Typography>
                }
            />
        </BoxFlexColumn>
    )
}

const MyMedicalRecordBlock = () => {
    const classes = useStyles();
    const periodVariants: { [index: string]: string } = {
        month: "За месяц",
        week: "За неделю",
        day: "За день",
    };
    const [loadingMainInfo, setLoadingMainInfo] = useState<boolean>(true)
    const [profileName, setProfileName] = useState<string>("")
    const [mainInfo, setMainInfo] = useState<[]>([])
    const [loadingControlMethods, setLoadingControlMethods] = useState<boolean>(true)
    const [controlMethodsData, setControlMethodsData] = useState<{
        psychotherapy: null | number,
        meditation: null | number,
        yoga: null | number,
        bos: null | number,
        physical: null | number,
        manual: null | number,
        acupuncture: null | number,
        invasive: null | number,
    }>({
        psychotherapy: null,
        meditation: null,
        yoga: null,
        bos: null,
        physical: null,
        manual: null,
        acupuncture: null,
        invasive: null,
    })
    const [loadingPainNatureData, setLoadingPainNatureData] = useState<boolean>(true)
    const [painNatureData, setPainNatureData] = useState<{ title: string, value: number }[]>([])
    const [loadingPainStrength, setLoadingPainStrength] = useState<boolean>(true)
    const [painStrengthData, setPainStrengthData] = useState<{ date: string, value: number }[]>([])
    const [loadingPainSyndrome, setLoadingPainSyndrome] = useState<boolean>(true)
    const [painSyndromeData, setPainSyndromeData] = useState<{ localization: string, startTs: number }[]>([])
    const [painStrengthScore, setPainStrengthScore] = useState<{ value: null | number, diff: null | number }>({
        value: null,
        diff: null
    })
    const [loadingAssociatedSymptomsData, setLoadingAssociatedSymptomsData] = useState<boolean>(true)
    const [associatedSymptomsData, setAssociatedSymptomsData] = useState<{ title: string, value: number }[]>([])
    const [loadingAggravatingFactorsData, setLoadingAggravatingFactorsData] = useState<boolean>(true)
    const [aggravatingFactorsData, setAggravatingFactorsData] = useState<{ title: string, value: number }[]>([])
    const [loadingFacilitatingFactorsData, setLoadingFacilitatingFactorsData] = useState<boolean>(true)
    const [facilitatingFactorsData, setFacilitatingFactorsData] = useState<{ title: string, value: number }[]>([])
    const [loadingNotes, setLoadingNotes] = useState<boolean>(true)
    const [notes, setNotes] = useState<{ date: string, content: string }[]>([])
    const matches = useMediaQuery(theme.breakpoints.only('xs'));
    const [period, setPeriod] = useState<keyof typeof periodVariants>('')

    const handleChangePeriod = (event: SelectChangeEvent<HTMLInputElement | unknown>): void => {
        setPeriod(event.target.value as string);
    }

    const fetchMainInfo = async () => {
        if (isDev) {
            await sleep(500)
            const response = require("../../mocks/profile__getMainInfo.json").data
            setProfileName(response.title)
            setMainInfo(response.info)
        }
        setLoadingMainInfo(false)
    };

    const fetchControlMethodsData = async () => {
        if (isDev) {
            await sleep(600)
            const response = require("../../mocks/profile__getControlMethodsData.json").data
            setControlMethodsData(response)
        }
        setLoadingControlMethods(false)
    };

    const fetchPainNatureData = async () => {
        if (isDev) {
            await sleep(800)
            const response = require("../../mocks/profile__getPainNatureData.json").data
            setPainNatureData(response)
        }
        setLoadingPainNatureData(false)
    };

    const fetchPainStrength = async () => {
        if (isDev) {
            await sleep(1000)
            const response = require("../../mocks/profile__getPainStrength.json").data
            setPainStrengthData(response.data)
            setPainStrengthScore(response.score)
        }
        setLoadingPainStrength(false)
    };

    const fetchPainSyndromeData = async () => {
        if (isDev) {
            await sleep(800)
            const response = require("../../mocks/profile__getPainSyndromeData.json").data
            setPainSyndromeData(response)
        }
        setLoadingPainSyndrome(false)
    };

    const fetchAssociatedSymptomsData = async () => {
        if (isDev) {
            await sleep(1000)
            const response = require("../../mocks/profile__getAssociatedSymptopmsData.json").data
            setAssociatedSymptomsData(response)
        }
        setLoadingAssociatedSymptomsData(false)
    }

    const fetchAggravatingFactorsData = async () => {
        if (isDev) {
            await sleep(1000)
            const response = require("../../mocks/profile__getAggravatingFactorsData.json").data
            setAggravatingFactorsData(response)
        }
        setLoadingAggravatingFactorsData(false)
    }

    const fetchFacilitatingFactorsData = async () => {
        if (isDev) {
            await sleep(1000)
            const response = require("../../mocks/profile__getFacilitatingFactorsData.json").data
            setFacilitatingFactorsData(response)
        }
        setLoadingFacilitatingFactorsData(false)
    }

    const fetchNotes = async () => {
        if (isDev) {
            await sleep(1100)
            const response = require("../../mocks/profile__getNotes.json").data
            setNotes(response)
        }
        setLoadingNotes(false)
    }

    useEffect(() => {
        fetchMainInfo()
        fetchControlMethodsData()
        fetchPainNatureData()
        fetchPainSyndromeData()
        fetchPainStrength()
        fetchAssociatedSymptomsData()
        fetchAggravatingFactorsData()
        fetchFacilitatingFactorsData()
        fetchNotes()
    }, [])

    return (
        <Container
            maxWidth="xl"
            disableGutters={matches}
        >
            <TitleContainer>
                <Typography
                    variant="h2"
                >
                    Моя карта
                </Typography>

                <BoxFlex
                    sx={{
                        gridGap: 24,
                    }}
                >
                    <FormControl
                        variant="standard"
                        sx={{
                            minWidth: {
                                md: 300,
                            },
                            width: "100%",
                        }}
                    >
                        <InputLabel>
                            Период
                        </InputLabel>
                        <CSelect
                            value={period}
                            onChange={handleChangePeriod}
                            label="Период"
                        >
                            {Object.keys(periodVariants).map((val: string, index: number) => (
                                <MenuItem
                                    value={val}
                                    key={index}
                                >
                                    {periodVariants[val]}
                                </MenuItem>
                            ))}
                        </CSelect>
                    </FormControl>

                    <Button
                        variant="outlined"
                        size="large"
                        sx={{
                            flexShrink: 0,
                            padding: {
                                xs: "16px",
                            }
                        }}
                    >
                        <BoxFlex
                            sx={{
                                gridGap: 12,
                            }}
                        >
                            <Box
                                sx={{
                                    display: {
                                        xs: "none",
                                        md: "block",
                                    }
                                }}
                            >
                                Скачать
                            </Box>
                            <DocumentText/>
                        </BoxFlex>
                    </Button>
                </BoxFlex>
            </TitleContainer>

            <Box
                className={classes.parent}
            >
                {loadingMainInfo ? (
                    <Skeleton
                        variant="rounded"
                        className={classes.block1}
                        height="16rem"
                    />
                ) : (
                    <CPaper
                        className={classes.block1}
                    >
                        <InfoBlock
                            title={profileName}
                            rows={mainInfo}
                        />
                    </CPaper>
                )}
                {loadingControlMethods ? (
                    <Skeleton
                        variant="rounded"
                        className={classes.block2}
                        height="16rem"
                    />
                ) : (
                    <CPaper
                        className={classes.block2}
                    >
                        <ControlMethodsBlock
                            values={controlMethodsData}
                        />
                    </CPaper>
                )}

                {loadingPainSyndrome ? (
                    <Skeleton
                        variant="rounded"
                        className={classes.block3}
                        height="16rem"
                    />
                ) : (
                    <CPaper
                        className={classes.block3}
                    >
                        <PainSyndromeBlock
                            data={painSyndromeData}
                        />
                    </CPaper>
                )}

                {loadingPainNatureData ? (
                    <Skeleton
                        variant="rounded"
                        className={classes.block4}
                        height="32rem"
                    />
                ) : (
                    <CPaper
                        className={classes.block4}
                    >
                        <BoxFlexColumn
                            sx={{
                                gridGap: 20,
                            }}
                        >
                            <Typography
                                variant="subtitle1"
                            >
                                Характер боли
                            </Typography>

                            <PieChart
                                data={painNatureData}
                            />
                        </BoxFlexColumn>
                    </CPaper>
                )}

                {loadingPainStrength ? (
                    <Skeleton
                        variant="rounded"
                        className={classes.block5}
                        height="32rem"
                    />
                ) : (
                    <CPaper
                        className={classes.block5}
                    >
                        <BoxFlexColumn
                            sx={{
                                gridGap: 20,
                            }}
                        >
                            <BoxFlex
                                sx={{
                                    justifyContent: "space-between",
                                }}
                            >
                                <Typography
                                    variant="subtitle1"
                                >
                                    Сила боли
                                </Typography>

                                <BoxFlex
                                    sx={{
                                        gridGap: 16,
                                    }}
                                >
                                    <PainScore
                                        value={painStrengthScore.value}
                                    />
                                    <PainProgress
                                        value={painStrengthScore.diff}
                                    />
                                </BoxFlex>
                            </BoxFlex>

                            <BarChart
                                title="Сила боли"
                                data={matches ? painStrengthData.slice(-4) : painStrengthData}
                            />
                        </BoxFlexColumn>
                    </CPaper>
                )}

                {loadingAssociatedSymptomsData ? (
                    <Skeleton
                        variant="rounded"
                        className={classes.block6}
                        height="16rem"
                    />
                ) : (
                    <CPaper
                        className={classes.block6}
                    >
                        <ProgressesBlock
                            title="Сопутствующие симптомы"
                            data={associatedSymptomsData}
                        />
                    </CPaper>
                )}

                {loadingAggravatingFactorsData ? (
                    <Skeleton
                        variant="rounded"
                        className={classes.block7}
                        height="16rem"
                    />
                ) : (
                    <CPaper
                        className={classes.block7}
                    >
                        <ProgressesBlock
                            title="Обостряющие факторы"
                            data={aggravatingFactorsData}
                        />
                    </CPaper>
                )}

                {loadingFacilitatingFactorsData ? (
                    <Skeleton
                        variant="rounded"
                        className={classes.block8}
                        height="16rem"
                    />
                ) : (
                    <CPaper
                        className={classes.block8}
                    >
                        <ProgressesBlock
                            title="Облегчающие факторы"
                            data={facilitatingFactorsData}
                        />
                    </CPaper>
                )}


                {loadingNotes ? (
                    <Skeleton
                        variant="rounded"
                        className={classes.block9}
                        height="16rem"
                    />
                ) : (
                    <CPaper
                        className={classes.block9}
                    >
                        <NotesBlock
                            data={notes}
                        />
                    </CPaper>
                )}
            </Box>
        </Container>
    );
}

export default MyMedicalRecordBlock;