import React, {useState} from "react";
import DefaultTemplate from "../templates/DefaultTemplate";
import HeroBlock from "../components/blocks/HeroBlock";
import YourPainBlock from "../components/blocks/YourPainBlock";
import ArticlesBlock from "../components/blocks/ArticlesBlock";
import PosterBlock from "../components/blocks/PosterBlock";
import {Button, Link, TextField, Typography} from "@mui/material";
import theme from "../theme";
import routes from "../routes";
import BoxFlexColumn from "../components/layout/BoxFlexColumn";
import BoxFlex from "../components/layout/BoxFlex";

const PlatformPage = () => {
    const [email, setEmail] = useState('');

    return (
        <DefaultTemplate>
            <HeroBlock
                title="Платформа о боли"
            />

            <YourPainBlock/>

            <ArticlesBlock/>

            <PosterBlock
                background={theme.palette.surface.main}
            >
                <BoxFlexColumn
                    sx={{
                        alignItems: "center",
                        textAlign: "center",
                        margin: "0 auto",
                    }}
                >
                    <Typography
                        variant="h2"
                    >
                        Еженедельная рассылка свежих и<br/> важных материалов
                    </Typography>

                    <BoxFlex
                        sx={{
                            margin: "82px 0 40px",
                            alignItems: "center",
                            gridGap: 20,
                            width: "100%",
                        }}
                    >
                        <TextField
                            label="Email"
                            variant="standard"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            required
                            fullWidth
                        />

                        <Button
                            disabled={email.length === 0}
                            variant="contained"
                        >
                            Подписаться
                        </Button>
                    </BoxFlex>

                    <Typography
                        variant="body3"
                    >
                        Нажимая кнопку “Подписаться” Вы даете согласие на <Link
                        href={routes.policyPrivacy}>обработку персональных данных</Link>
                    </Typography>
                </BoxFlexColumn>
            </PosterBlock>
        </DefaultTemplate>
    );
};

export default PlatformPage;
