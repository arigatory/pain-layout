import React from "react";
import {styled} from "@mui/system";
import {Box, Container, Grid, Link, Typography} from "@mui/material";
import routes from "../routes";
import ArrowUpRight from "./icons/ArrowUpRight";
import theme from "../theme";
import socialLinks from "../social-links";
import BoxFlex from "./layout/BoxFlex";
import {makeStyles} from "@mui/styles";
import classNames from "classnames";

const FooterBox = styled(Box)(({theme}) => ({
    backgroundColor: theme.palette.surface.dark,
    padding: "180px 0 130px",
    marginTop: "-80px",

    "@media (max-width: 899px)": {
        padding: "110px 0 60px",
    },
})) as typeof Box;

const CopyrightTitle = styled(Typography)({
    "@media (max-width: 899px)": {
        textAlign: "center",
        marginBottom: "40px",
    },
}) as typeof Typography;

const LinksContainer = styled(Box)({
    display: "grid",
    gridGap: "20px 184px",
    gridTemplateColumns: "1fr 1fr",

    "@media (max-width: 899px)": {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gridGap: "16px",
    },
}) as typeof Box;

const SocialLinksContainer = styled(BoxFlex)({
    alignItems: "center",
    gridGap: "21px",

    "@media (max-width: 899px)": {
        justifyContent: "center",
        marginBottom: "40px",
    },
}) as typeof BoxFlex;

const useStyles = makeStyles({
    link: {
        display: "flex",
    },
    hideMobile: {
        "@media (max-width: 899px)": {
            display: "none",
        },
    },
});

const navItems = [
    {
        title: "Платформа о боли",
        url: routes.platform,
        isExternal: false,
        mobileHide: true,
    },
    {
        title: "Магазин",
        url: "https://www.google.com/",
        isExternal: true,
        mobileHide: true,
    },
    {
        title: "О нас",
        url: routes.about,
        isExternal: false,
        mobileHide: true,
    },
    {
        title: "Дневник",
        url: "https://ya.ru/",
        isExternal: true,
        mobileHide: true,
    },
    {
        title: "Контакты",
        url: routes.contacts,
        isExternal: false,
        mobileHide: true,
    },
    {
        title: "Политика конфиденциальности",
        url: "#",
        isExternal: false,
        mobileHide: false,
    },
    {
        title: "Записаться",
        url: routes.specialists,
        isExternal: false,
        mobileHide: true,
    },
    {
        title: "Публичная оферта",
        url: "#",
        isExternal: false,
        mobileHide: false,
    },
];

const Footer = () => {
    const classes = useStyles();
    return (
        <FooterBox
            component="footer"
        >
            <Container maxWidth="xl">
                <Grid container>
                    <Grid
                        item
                        xs={12}
                        md={6}
                    >
                        <BoxFlex
                            sx={{
                                flexDirection: "column",
                                justifyContent: "space-between",
                                height: "100%",
                            }}
                        >
                            <CopyrightTitle
                                variant="subtitle1"
                                color="white.main"
                            >
                                © Painpoint, 2023
                            </CopyrightTitle>

                            <SocialLinksContainer>
                                {socialLinks.map((val, i) => (
                                    <Link
                                        key={i}
                                        href={socialLinks[i].url}
                                    >
                                        <Typography
                                            variant="body2"
                                            color="white.main"
                                        >
                                            {socialLinks[i].title}
                                        </Typography>
                                    </Link>
                                ))}
                            </SocialLinksContainer>
                        </BoxFlex>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        md={6}
                    >
                        <LinksContainer>
                            {navItems.map((val, i) => (
                                <React.Fragment
                                    key={i}
                                >
                                    {navItems[i].isExternal ? (
                                        <a
                                            href={navItems[i].url}
                                            target="_blank"
                                            rel="noreferrer"
                                            className={
                                                classNames({
                                                    [classes.link]: true,
                                                    [classes.hideMobile]: navItems[i].mobileHide,
                                                })
                                            }
                                        >
                                            <BoxFlex
                                                sx={{
                                                    alignItems: "center",
                                                    gridGap: "8px",
                                                }}
                                            >
                                                <Typography
                                                    variant="body2"
                                                    color="white.dark"
                                                >
                                                    {navItems[i].title}
                                                </Typography>
                                                <ArrowUpRight
                                                    width={17}
                                                    height={17}
                                                    color={theme.palette.white.dark}
                                                />
                                            </BoxFlex>
                                        </a>
                                    ) : (
                                        <Link
                                            href={navItems[i].url}
                                            sx={{
                                                display: {
                                                    xs: navItems[i].mobileHide ? "none" : "block",
                                                    md: "block",
                                                }
                                            }}
                                        >
                                            <Typography
                                                variant="body2"
                                                color="white.dark"
                                            >
                                                {navItems[i].title}
                                            </Typography>
                                        </Link>
                                    )}
                                </React.Fragment>
                            ))}
                        </LinksContainer>
                    </Grid>
                </Grid>
            </Container>
        </FooterBox>
    );
}

export default Footer;