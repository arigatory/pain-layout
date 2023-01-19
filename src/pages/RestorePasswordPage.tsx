import React, {useState} from "react";
import SingleElementTemplate from "../templates/SingleElementTemplate";
import {Button, Link, TextField, Typography} from "@mui/material";
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

const ButtonContainer = styled(BoxFlex)({
    alignItems: "center",
    justifyContent: "space-between",
    gridGap: 20,

    "@media (max-width: 899px)": {
        flexDirection: "column",

        "& button": {
            order: "-1",
        }
    },
}) as typeof BoxFlex

const RestorePasswordPage = () => {
    const [phoneNumber, setPhoneNumber] = useState('')

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
                        Восстановление пароля
                    </Typography>

                    <TextField
                        label="Телефон"
                        variant="standard"
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        value={phoneNumber}
                        required
                        fullWidth
                        helperText="На указанный номер будет выслан новый пароль"
                    />

                    <ButtonContainer>
                        <Button
                            variant="outlined"
                            size="large"
                            component={Link}
                            href={routes.login}
                            fullWidth
                        >
                            Войти
                        </Button>

                        <Button
                            variant="contained"
                            size="large"
                            fullWidth
                        >
                            Отправить
                        </Button>
                    </ButtonContainer>

                </Content>
            </CPaper>
        </SingleElementTemplate>
    );
};

export default RestorePasswordPage;
