import React, {useState} from "react";
import SingleElementTemplate from "../templates/SingleElementTemplate";
import {Button, Link, TextField, Typography, useMediaQuery} from "@mui/material";
import {styled} from "@mui/system";
import BoxFlex from "../components/layout/BoxFlex";
import CPaper from "../components/surfaces/CPaper";
import BoxFlexColumn from "../components/layout/BoxFlexColumn";
import routes from "../routes";

const Content = styled(BoxFlexColumn)({
    width: 584,
    maxWidth: "100%",
    gridGap: 32,

    "@media (max-width: 899px)": {
        width: "auto",
    },
}) as typeof BoxFlexColumn

const LoginPage = () => {
    const [phoneNumber, setPhoneNumber] = useState('')
    const [password, setPassword] = useState('')
    const matches = useMediaQuery('(min-width:900px)');

    return (
        <SingleElementTemplate>
            <CPaper
                sx={{
                    gridGap: 32,
                }}
            >
                <Content>

                    <Typography
                        variant="h2"
                    >
                        Войти
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
                        label="Пароль"
                        variant="standard"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        required
                        fullWidth
                    />

                    <BoxFlex
                        sx={{
                            alignItems: "center",
                            justifyContent: "space-between",
                            gridGap: 20,
                        }}
                    >
                        <Link href={routes.restorePassword}>
                            <Typography
                                variant="body2"
                                color="text.tertiary"
                            >
                                Забыли пароль?
                            </Typography>
                        </Link>

                        <Button
                            variant="contained"
                            size="large"
                            sx={{
                                width: matches ? 200 : "auto",
                            }}
                        >
                            Войти
                        </Button>
                    </BoxFlex>

                </Content>
            </CPaper>

            <Typography
                variant="body2"
                mt="32px"
                textAlign="center"
            >
                Если у Вас ещё нет аккаунта <Link href={routes.test}>пройдите тест, что бы
                зарегистрироваться</Link>
            </Typography>
        </SingleElementTemplate>
    );
};

export default LoginPage;
