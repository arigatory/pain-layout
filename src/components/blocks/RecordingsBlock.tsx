import React, {useState} from "react";
import {Button, Container, Table, TableBody, TableCell, TableRow, Typography} from "@mui/material";
import BoxFlexColumn from "../layout/BoxFlexColumn";
import avatar3 from "../../img/team-member3.png";
import CAvatar from "../data-display/CAvatar";
import BoxFlex from "../layout/BoxFlex";
import ArrowDownTray from "../icons/ArrowDownTray";
import RecordingCard from "../surfaces/RecordingCard";
import {dateFormatter} from "../../utils";
import InfoCard from "../surfaces/InfoCard";
import DoctorOpinionDialog from "../dialogs/DoctorOpinionDialog";
import {styled} from "@mui/system";

const RecordingMainContent = styled(BoxFlex)({
    gridGap: 130,

    "@media (max-width: 899px)": {
        flexDirection: "column",
        gridGap: 40,
    }
}) as typeof BoxFlex

const Content = styled(BoxFlexColumn)({
    gridGap: 100,

    "@media (max-width: 899px)": {
        gridGap: 50,
    }
}) as typeof BoxFlexColumn

const ArchiveBlock = (props: {
    data: {
        avatar: string,
        name: string,
        position: string,
        ts: number,
    }[]
}) => {

    return (
        <BoxFlexColumn
            sx={{
                gridGap: 50,
            }}
        >
            <Typography
                variant="h2"
            >
                Архив
            </Typography>

            {
                props.data.length === 0 &&
                <Typography
                    variant="body2"
                >
                    Здесь будут отчёты о проведённой консультации с важными моментами
                </Typography>
            }
            <Table>
                <TableBody>
                    {props.data.map((datum, i) => (
                        <React.Fragment
                            key={i}
                        >
                            <TableRow
                                sx={{
                                    display: {
                                        xs: "none",
                                        md: "table-row",
                                    }
                                }}
                            >
                                <TableCell>
                                    <BoxFlex
                                        sx={{
                                            gridGap: 20,
                                            alignItems: "center",
                                        }}
                                    >
                                        <CAvatar
                                            alt={datum.name}
                                            src={datum.avatar}
                                            size="sm"
                                        />
                                        <Typography
                                            variant="subtitle2"
                                        >
                                            {datum.name}
                                        </Typography>
                                    </BoxFlex>
                                </TableCell>
                                <TableCell>
                                    <Typography
                                        variant="body2"
                                    >
                                        {datum.position}
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                    >
                                        {dateFormatter(datum.ts)}
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Button
                                        variant="outlined"
                                        endIcon={<ArrowDownTray/>}
                                    >
                                        Скачать PDF
                                    </Button>
                                </TableCell>
                            </TableRow>
                            <TableRow
                                sx={{
                                    display: {
                                        xs: "table-row",
                                        md: "none",
                                    }
                                }}
                            >
                                <TableCell>
                                    <BoxFlexColumn
                                        sx={{
                                            gridGap: 20,
                                        }}
                                    >
                                        <BoxFlex
                                            sx={{
                                                alignItems: "center",
                                                gridGap: 13,
                                            }}
                                        >
                                            <CAvatar
                                                alt={datum.name}
                                                src={datum.avatar}
                                                size="md"
                                            />

                                            <BoxFlexColumn
                                                sx={{
                                                    gridGap: 4,
                                                }}
                                            >
                                                <Typography
                                                    variant="subtitle2"
                                                >
                                                    {datum.name}
                                                </Typography>
                                                <Typography
                                                    variant="body2"
                                                >
                                                    {datum.position}
                                                </Typography>
                                            </BoxFlexColumn>
                                        </BoxFlex>

                                        <BoxFlex
                                            sx={{
                                                justifyContent: "space-between",
                                                alignItems: "center",
                                            }}
                                        >
                                            <Typography
                                                variant="body2"
                                                color="text.secondary"
                                            >
                                                {dateFormatter(datum.ts)}
                                            </Typography>
                                            <Button
                                                variant="outlined"
                                                endIcon={<ArrowDownTray/>}
                                                size="small"
                                            >
                                                Скачать PDF
                                            </Button>
                                        </BoxFlex>
                                    </BoxFlexColumn>
                                </TableCell>
                            </TableRow>
                        </React.Fragment>
                    ))}
                </TableBody>
            </Table>
        </BoxFlexColumn>
    );
}

const RecordingsBlock = () => {
    const [openDialog, setOpenDialog] = useState<boolean>(false)

    const handleClickOpen = () => {
        setOpenDialog(true);
    };

    const recordingData = [
        {
            day: "Чт, 18 сен",
            time: "12:50",
            avatar: avatar3,
            name: "Шевцова Ксения Викторовна",
            position: "Врач-психиатр",
            description: "Пожалуйста, направьте дополнительную значимую информацию (результаты исследований), касающуюся вашего состояния в чат с врачом за 1 ч до приема. ",
            phoneNumber: "+7 923 345 8787",
            link: "Zoom.com/asdsa1923989213/32412312312321",
            price: 2000,
        },
        {
            day: "Чт, 18 сен",
            time: "12:50",
            avatar: avatar3,
            name: "Шевцова Ксения Викторовна",
            position: "Врач-психиатр",
            description: "Пожалуйста, направьте дополнительную значимую информацию (результаты исследований), касающуюся вашего состояния в чат с врачом за 1 ч до приема. ",
            phoneNumber: "+7 923 345 8787",
            link: "Zoom.com/asdsa1923989213/32412312312321",
            price: 2000,
        },
    ];

    const archiveData = [
        {
            avatar: avatar3,
            name: "Шевцова Ксения Викторовна",
            position: "Врач-психиатр",
            ts: 1642809600000,
        },
        {
            avatar: avatar3,
            name: "Шевцова Ксения Викторовна",
            position: "Врач-психиатр",
            ts: 1642809600000,
        },
        {
            avatar: avatar3,
            name: "Шевцова Ксения Викторовна",
            position: "Врач-психиатр",
            ts: 1642809600000,
        },
        {
            avatar: avatar3,
            name: "Шевцова Ксения Викторовна",
            position: "Врач-психиатр",
            ts: 1642809600000,
        }
    ];

    const infoBlocksData = [
        {
            text: `Что включает услуга <br /> «Мнение врача»`,
            onClick: handleClickOpen,
        },
        {
            text: "Если у вас не получается в назначенное время, пожалуйста, предупредите нас заранее",
            onClick: undefined,
        }
    ];

    return (
        <React.Fragment>
            <Container maxWidth="xl">
                <Content>
                    <BoxFlexColumn
                        sx={{
                            gridGap: 50,
                        }}
                    >
                        <Typography
                            variant="h2"
                        >
                            Записи к специалистам
                        </Typography>

                        <RecordingMainContent>
                            <BoxFlexColumn
                                sx={{
                                    gridGap: 20,
                                }}
                            >
                                {recordingData.length === 0 &&
                                    <Typography
                                        variant="body2"
                                    >
                                        Пока у Вас еще нет записей. Пройдите в Индивидуальный план и выберите,
                                        специалиста, к которому хотели бы записаться
                                    </Typography>
                                }
                                {recordingData.map((datum, i) => (
                                    <RecordingCard
                                        key={i}
                                        day={datum.day}
                                        time={datum.time}
                                        avatar={datum.avatar}
                                        name={datum.name}
                                        position={datum.position}
                                        description={datum.description}
                                        phoneNumber={datum.phoneNumber}
                                        link={datum.link}
                                        price={datum.price}
                                    />
                                ))}
                            </BoxFlexColumn>
                            <BoxFlexColumn
                                sx={{
                                    gridGap: 20,
                                    order: {
                                        xs: -1,
                                        md: 0,
                                    }
                                }}
                            >
                                {infoBlocksData.map((datum, i) => (
                                    <InfoCard
                                        key={i}
                                        text={datum.text}
                                        onClick={datum.onClick}
                                    />
                                ))}
                            </BoxFlexColumn>
                        </RecordingMainContent>
                    </BoxFlexColumn>

                    <ArchiveBlock
                        data={archiveData}
                    />
                </Content>
            </Container>
            <DoctorOpinionDialog
                openExternal={openDialog}
                handleChangeOpenExternal={(open) => setOpenDialog(open)}
            />
        </React.Fragment>
    );
}

export default RecordingsBlock;