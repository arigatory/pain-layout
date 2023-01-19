import React, {useState} from "react";
import DefaultTemplate from "../templates/DefaultTemplate";
import HeroBlock from "../components/blocks/HeroBlock";
import BoxFlexColumn from "../components/layout/BoxFlexColumn";
import CAvatar from "../components/data-display/CAvatar";
import {Button, Container, Grid, TextField, Typography} from "@mui/material";
import {styled} from "@mui/system";
import avatar3 from "../img/team-member3.png";
import BoxFlex from "../components/layout/BoxFlex";
import theme from "../theme";
import QuestionMarkCircle from "../components/icons/QuestionMarkCircle";
import Telegram from "../components/icons/Telegram";
import WhatsApp from "../components/icons/WhatsApp";
import Zoom from "../components/icons/Zoom";
import {priceFormatter} from "../utils";
import DoctorOpinionDialog from "../components/dialogs/DoctorOpinionDialog";
import CDatePicker from "../components/inputs/CDatePicker";
import {Moment} from "moment/moment";

const TitleBlock = styled(BoxFlexColumn)({
    alignItems: "center",
    textAlign: "center",
    width: 360,
    gridGap: 35,
}) as typeof BoxFlexColumn

const InfoBlock = styled(BoxFlexColumn)(({theme}) => ({
    padding: "32px 0",
    gridGap: 16,
    borderBottom: `1px solid ${theme.palette.border.main}`,

    "&:last-of-type": {
        borderBottom: "none",
    }
})) as typeof BoxFlexColumn

const FormBlock = styled(BoxFlexColumn)(({theme}) => ({
    background: theme.palette.white.main,
    maxWidth: 530,
    borderRadius: 30,
})) as typeof BoxFlexColumn

const FormContent = styled(BoxFlexColumn)({
    padding: 32,
    gridGap: 24,

    "@media (max-width: 899px)": {
        paddingRight: 16,
        paddingLeft: 16,
    },
}) as typeof BoxFlexColumn

const FormContentBottom = styled(BoxFlex)({
    justifyContent: "space-between",
    alignItems: "center",
    gridGap: 20,

    "@media (max-width: 899px)": {
        flexDirection: "column",
        alignItems: "stretch",
        textAlign: "center",
    },
}) as typeof BoxFlex

const FormBottom = styled(BoxFlex)({
    justifyContent: "center",
    borderTop: `1px dashed ${theme.palette.border.main}`,
    padding: "20px 32px 28px 32px",

    "@media (max-width: 899px)": {
        padding: "20px 20px 28px 20px",
    },
}) as typeof BoxFlex

const CommunicationMethodsContainer = styled(BoxFlex)({
    gridGap: 11,
}) as typeof BoxFlex

const CommunicationMethodButton = styled(Button)({
    borderRadius: 15,
    flex: "1 1 0",
    width: 0,
    padding: 16,

    "@media (max-width: 899px)": {
        padding: "8px 8px 12px 8px",
    },
}) as typeof Button

const StorePage = () => {
    const data = {
        name: "Шевцова Ксения Викторовна",
        position: "Невролог",
        avatar: avatar3,
        price: 7000,
        info: [
            {
                title: "Образование",
                text: "Первый МГМУ им. И.М. Сеченова (2013)",
            },
            {
                title: "Место работы",
                text: "УКБ №3 Клиника нервных болезней им. А.Я. Кожевникова",
            },
            {
                title: "Специализация",
                text: "Психиатрия и психосоматика, особенно хронические и необъяснимые боли, тревожные расстройства, навязчивости, психические расстройства у больных злокачественными новообразованиями",
            },
        ]
    };
    const communicationMethods: {
        [index: string]: {
            title: string,
            icon: React.ReactElement,
        }
    } = {
        telegram: {
            title: "Telegram",
            icon: <Telegram/>,
        },
        whatsapp: {
            title: "Whatsapp",
            icon: <WhatsApp/>,
        },
        zoom: {
            title: "Zoom",
            icon: <Zoom/>,
        },
    };

    const [date, setDate] = useState<Moment | null>(null);
    const [time, setTime] = useState('')
    const [selectedCommunicationMethod, setSelectedCommunicationMethod] = useState<keyof typeof communicationMethods>('')
    const [openDialog, setOpenDialog] = useState<boolean>(false)

    const handleClickOpen = () => {
        setOpenDialog(true);
    };

    const handleChangeCommunicationMethod = (newValue: keyof typeof communicationMethods): void => {
        setSelectedCommunicationMethod(newValue)
    }

    return (
        <DefaultTemplate>
            <HeroBlock>
                <TitleBlock>
                    <CAvatar
                        size="xl"
                        src={data.avatar}
                    />

                    <Typography
                        variant="h2"
                    >
                        {data.name}
                    </Typography>
                    <Typography
                        variant="captionUppercase"
                    >
                        {data.position}
                    </Typography>
                </TitleBlock>
            </HeroBlock>

            <Container
                maxWidth="xl"
            >
                <Grid
                    container
                    spacing={{
                        sx: 2,
                        md: 16,
                    }}
                >
                    <Grid
                        item
                        xs={12}
                        md={6}
                    >
                        {data.info.map((datum, i) => (
                            <InfoBlock
                                key={i}
                            >
                                <Typography
                                    variant="subtitle1"
                                >
                                    {datum.title}
                                </Typography>
                                <Typography
                                    variant="body1"
                                    color="text.secondary"
                                >
                                    {datum.text}
                                </Typography>
                            </InfoBlock>
                        ))}
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        md={6}
                    >
                        <FormBlock>
                            <FormContent>
                                <Typography
                                    variant="h4"
                                >
                                    Записаться
                                </Typography>

                                <Grid
                                    container
                                    spacing={2}
                                >
                                    <Grid
                                        item
                                        xs={12}
                                        md={6}
                                    >
                                        <CDatePicker
                                            label="Дата"
                                            onChange={setDate}
                                            value={date}
                                            fullWidth
                                        />
                                    </Grid>
                                    <Grid
                                        item
                                        xs={12}
                                        md={6}
                                    >
                                        <TextField
                                            label="Время"
                                            variant="standard"
                                            onChange={(e) => setTime(e.target.value)}
                                            value={time}
                                            required
                                            fullWidth
                                        />
                                    </Grid>
                                </Grid>
                                <BoxFlexColumn
                                    sx={{
                                        gridGap: 16,
                                    }}
                                >
                                    <Typography
                                        variant="subtitle1"
                                    >
                                        Способ связи
                                    </Typography>

                                    <CommunicationMethodsContainer>
                                        {Object.keys(communicationMethods).map((method, i) => (
                                            <CommunicationMethodButton
                                                key={i}
                                                variant={selectedCommunicationMethod === method ? "contained" : "outlined"}
                                                onClick={() => handleChangeCommunicationMethod(method as keyof typeof communicationMethods)}
                                            >
                                                <BoxFlexColumn
                                                    sx={{
                                                        width: "100%",
                                                        justifyContent: "start",
                                                        gridGap: 19,
                                                        textAlign: "left",
                                                    }}
                                                >
                                                    {communicationMethods[method as keyof typeof communicationMethods].icon}

                                                    <Typography
                                                        variant="body3"
                                                    >
                                                        {communicationMethods[method as keyof typeof communicationMethods].title}
                                                    </Typography>
                                                </BoxFlexColumn>
                                            </CommunicationMethodButton>
                                        ))}
                                    </CommunicationMethodsContainer>
                                </BoxFlexColumn>
                                <FormContentBottom>
                                    <Typography
                                        variant="h4"
                                    >
                                        {priceFormatter(data.price)}
                                    </Typography>

                                    <Button
                                        variant="contained"
                                        size="large"
                                    >
                                        Оплатить
                                    </Button>
                                </FormContentBottom>
                            </FormContent>
                            <FormBottom>
                                <Button
                                    variant="text"
                                    endIcon={
                                        <QuestionMarkCircle
                                            color={theme.palette.text.tertiary}
                                        />
                                    }
                                    onClick={handleClickOpen}
                                >
                                    <Typography
                                        variant="subtitle2"
                                        color="text.tertiary"
                                    >
                                        Услуга «Мнение врача»
                                    </Typography>
                                </Button>
                            </FormBottom>
                        </FormBlock>
                    </Grid>
                </Grid>
            </Container>

            <DoctorOpinionDialog 
                openExternal={openDialog}
                handleChangeOpenExternal={(open) => setOpenDialog(open)}
            />
        </DefaultTemplate>
    );
};

export default StorePage;
