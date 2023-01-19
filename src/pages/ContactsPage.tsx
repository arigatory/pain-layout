import React, {useState} from "react";
import DefaultTemplate from "../templates/DefaultTemplate";
import HeroBlock from "../components/blocks/HeroBlock";
import {Button, Container, Grid, Link, TextField, Typography} from "@mui/material";
import socialLinks from "../social-links";
import LinkList from "../components/data-display/LinkList";
import ArrowUpRight from "../components/icons/ArrowUpRight";
import theme from "../theme";
import CPaper from "../components/surfaces/CPaper";
import routes from "../routes";
import BoxFlexColumn from "../components/layout/BoxFlexColumn";
import BoxFlex from "../components/layout/BoxFlex";
import {styled} from "@mui/system";

const BottomContent = styled(BoxFlex)({
    alignItems: "center",
    justifyContent: "space-between",
    gridGap: 25,

    "@media (max-width: 899px)": {
        flexDirection: "column",

        "& button": {
            order: -1,
            width: "100%",
        },
    },
}) as typeof BoxFlex

const ContactsPage = () => {
    const [email, setEmail] = useState('');
    const [msg, setMsg] = useState('');

    return (
        <DefaultTemplate>
            <HeroBlock
                title="Контакты"
            />

            <Container
                maxWidth="xl"
            >
                <Grid
                    container
                    spacing={16.5}
                >
                    <Grid
                        item
                        xs={12}
                        md={6}
                    >
                        <LinkList
                            title="Мы в соцсетях"
                            items={socialLinks}
                            icon={<ArrowUpRight
                                color={theme.palette.text.tertiary}
                            />}
                        />

                    </Grid>
                    <Grid
                        item
                        xs={12}
                        md={6}
                    >
                        <CPaper>
                            <BoxFlexColumn>
                                <Typography
                                    variant="h3"
                                    sx={{
                                        marginBottom: "36px",
                                    }}
                                >
                                    Написать нам
                                </Typography>

                                <TextField
                                    label="Email"
                                    variant="standard"
                                    onChange={(e) => setEmail(e.target.value)}
                                    value={email}
                                    type="email"
                                    required
                                    sx={{
                                        marginBottom: "40px",
                                    }}
                                />

                                <TextField
                                    label="Сообщение"
                                    multiline
                                    rows={4}
                                    variant="standard"
                                    onChange={(e) => setMsg(e.target.value)}
                                    value={msg}
                                    required
                                    sx={{
                                        marginBottom: "40px",
                                    }}
                                />

                                <BottomContent>
                                    <Typography
                                        variant="body3"
                                    >
                                        Нажимая кнопку “Отправить” Вы даете согласие на <Link
                                        href={routes.policyPrivacy}>обработку персональных данных</Link>
                                    </Typography>

                                    <Button
                                        variant="contained"
                                        color="primary"
                                        size="large"
                                        sx={{
                                            flexShrink: 0,
                                        }}
                                    >
                                        Отправить
                                    </Button>
                                </BottomContent>
                            </BoxFlexColumn>
                        </CPaper>
                    </Grid>
                </Grid>
            </Container>
        </DefaultTemplate>
    );
};

export default ContactsPage;
