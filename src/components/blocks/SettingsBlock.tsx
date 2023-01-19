import React, {useState} from "react";
import {
    Button,
    Checkbox,
    Container,
    FormControl,
    FormControlLabel,
    Grid,
    InputLabel,
    MenuItem,
    SelectChangeEvent,
    TextField,
    Typography, useMediaQuery
} from "@mui/material";
import CPaper from "../surfaces/CPaper";
import BoxFlexColumn from "../layout/BoxFlexColumn";
import BoxFlex from "../layout/BoxFlex";
import CSelect from "../inputs/CSelect";
import {styled} from "@mui/system";

const ButtonWrapper = styled(BoxFlex)({
    justifyContent: "end",
    gridGap: 20,
    marginTop: "52px",

    "@media (max-width: 899px)": {
        flexDirection: "column",
        marginTop: 12,
    },
}) as typeof BoxFlex

const SettingsBlock = () => {
    const genderVariants: { [index: string]: string } = {
        man: "Мужчина",
        woman: "Женщина",
    };

    const [phoneNumber, setPhoneNumber] = useState<string>("")
    const [email, setEmail] = useState<string>('')
    const [isWhatsAppNotification, setIsWhatsAppNotification] = useState<boolean>(false)
    const [isTelegramNotification, setIsTelegramNotification] = useState<boolean>(false)
    const [firstName, setFirstName] = useState<string>('')
    const [secondName, setSecondName] = useState<string>('')
    const [patronymic, setPatronymic] = useState<string>('')
    const [dateOfBirth, setDateOfBirth] = useState<string>('')
    const [gender, setGender] = useState<keyof typeof genderVariants>('')
    const [height, setHeight] = useState<string>('')
    const [weight, setWeight] = useState<string>('')

    const handleChangeGender = (event: SelectChangeEvent<HTMLInputElement | unknown>): void => {
        setGender(event.target.value as string);
    }

    return (
        <Container maxWidth="xl">
            <BoxFlexColumn
                sx={{
                    maxWidth: 640,
                    gridGap: 28,
                    margin: "0 auto",
                }}
            >
                {useMediaQuery('(max-width:899px)') &&
                    <Typography
                        variant="h2"
                    >
                        Настройки
                    </Typography>
                }
                <CPaper>
                    <BoxFlexColumn
                        sx={{
                            gridGap: 28,
                        }}
                    >
                        <Typography
                            variant="h3"
                        >
                            Контакты
                        </Typography>

                        <TextField
                            label="Телефон"
                            variant="standard"
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            value={phoneNumber}
                            required
                            fullWidth
                        />

                        <TextField
                            label="Почта"
                            variant="standard"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            required
                            fullWidth
                        />

                        <BoxFlexColumn>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={isWhatsAppNotification}
                                        onChange={e => setIsWhatsAppNotification(e.target.checked)}
                                    />
                                }
                                label={
                                    <Typography
                                        variant="body2"
                                    >
                                        Уведомление по Whatsapp
                                    </Typography>
                                }
                            />

                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={isTelegramNotification}
                                        onChange={e => setIsTelegramNotification(e.target.checked)}
                                    />
                                }
                                label={
                                    <Typography
                                        variant="body2"
                                    >
                                        Уведомление по Telegram
                                    </Typography>
                                }
                            />
                        </BoxFlexColumn>
                    </BoxFlexColumn>
                </CPaper>

                <CPaper>
                    <BoxFlexColumn
                        sx={{
                            gridGap: 34,
                        }}
                    >
                        <Typography
                            variant="h3"
                        >
                            Личные данные
                        </Typography>

                        <BoxFlexColumn
                            sx={{
                                gridGap: 20,
                            }}
                        >
                            <TextField
                                label="Фамилия"
                                variant="standard"
                                onChange={(e) => setSecondName(e.target.value)}
                                value={secondName}
                                required
                            />

                            <TextField
                                label="Имя"
                                variant="standard"
                                onChange={(e) => setFirstName(e.target.value)}
                                value={firstName}
                                required
                            />

                            <TextField
                                label="Отчество"
                                variant="standard"
                                onChange={(e) => setPatronymic(e.target.value)}
                                value={patronymic}
                                required
                            />

                            <Grid
                                container
                                spacing={"20px"}
                            >
                                <Grid
                                    item
                                    xs={12}
                                    md={6}
                                >
                                    <TextField
                                        label="Дата рождения"
                                        variant="standard"
                                        onChange={(e) => setDateOfBirth(e.target.value)}
                                        value={dateOfBirth}
                                        fullWidth
                                    />
                                </Grid>

                                <Grid
                                    item
                                    xs={12}
                                    md={6}
                                >
                                    <FormControl
                                        variant="standard"
                                        fullWidth
                                    >
                                        <InputLabel>
                                            Пол
                                        </InputLabel>
                                        <CSelect
                                            value={gender}
                                            onChange={handleChangeGender}
                                            label="Пол"
                                        >
                                            {Object.keys(genderVariants).map((val: string, i: number) => (
                                                <MenuItem
                                                    value={val}
                                                    key={i}
                                                >
                                                    {genderVariants[val]}
                                                </MenuItem>
                                            ))}
                                        </CSelect>
                                    </FormControl>
                                </Grid>
                            </Grid>

                            <Grid
                                container
                                spacing={"20px"}
                            >
                                <Grid
                                    item
                                    xs={12}
                                    md={6}
                                >
                                    <TextField
                                        label="Рост"
                                        variant="standard"
                                        onChange={(e) => setHeight(e.target.value)}
                                        value={height}
                                        fullWidth
                                    />
                                </Grid>

                                <Grid
                                    item
                                    xs={12}
                                    md={6}
                                >
                                    <TextField
                                        label="Вес"
                                        variant="standard"
                                        onChange={(e) => setWeight(e.target.value)}
                                        value={weight}
                                        fullWidth
                                    />
                                </Grid>
                            </Grid>

                        </BoxFlexColumn>
                    </BoxFlexColumn>
                </CPaper>

                <ButtonWrapper>
                    <Button
                        variant="outlined"
                        size="large"
                    >
                        Отменить
                    </Button>
                    <Button
                        variant="contained"
                        size="large"
                        sx={{
                            order: {
                                xs: -1,
                                md: 0,
                            }
                        }}
                    >
                        Сохранить
                    </Button>
                </ButtonWrapper>
            </BoxFlexColumn>
        </Container>
    );
}

export default SettingsBlock;