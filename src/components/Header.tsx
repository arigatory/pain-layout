import {
    AppBar,
    appBarClasses,
    Box,
    Button,
    Container,
    CssBaseline, Divider,
    Drawer,
    IconButton,
    List,
    ListItem,
    Toolbar,
    Typography,
    Link,
    useMediaQuery,
} from "@mui/material";
import React, {useState} from "react";
import Logo from "./icons/Logo";
import Menu from "./icons/Menu";
import ArrowUpRight from "./icons/ArrowUpRight";
import routes from "../routes";
import {styled} from "@mui/system";
import theme from "../theme";
import Xmark from "./icons/Xmark";
import BoxFlexColumn from "./layout/BoxFlexColumn";
import BoxFlex from "./layout/BoxFlex";

interface Props {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window?: () => Window;
}

const drawerWidth = 310;
const navItems = [
    [
        {
            title: "Платформа о боли",
            url: routes.platform,
            isExternal: false,
        },
        {
            title: "О нас",
            url: routes.about,
            isExternal: false,
        },
        {
            title: "Контакты",
            url: routes.contacts,
            isExternal: false,
        },
    ],
    [
        {
            title: "Магазин",
            url: "https://www.google.com/",
            isExternal: true,
        },
        {
            title: "Дневник",
            url: "https://ya.ru/",
            isExternal: true,
        }
    ]
];

const StyledAppBar = styled(AppBar)(({theme}) => ({
    [`&.${appBarClasses.root}`]: {
        backgroundColor: "transparent",
        boxShadow: "none",
        border: `1px solid ${theme.palette.border.main}`,
    },
})) as typeof AppBar;

const NavItemsWrapper = styled(Box)(({theme}) => ({
    gridGap: 30,

    "& a": {
        display: "flex",
        alignItems: "center",
        gridGap: 8,

        "& span": {
            fontSize: 15,
            fontWeight: 500,
            lineHeight: "20px",
            color: theme.palette.text.primary,
        }
    },
})) as typeof Box;

const StyledList = styled(List)(({theme}) => ({
    display: "flex",
    flexDirection: "column",
    gridGap: 20,

    "&:not(:last-child)": {
        borderBottom: `1px solid ${theme.palette.border.main}`,
        paddingBottom: "40px",
        marginBottom: "40px",
    },

    "& li": {
        padding: "0 20px",
    },

    "& a": {
        gridGap: 8,
    },
})) as typeof List;

const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
    padding: "22px 0",

    "@media (max-width: 899px)": {
        padding: "14px 0",
    },
}) as typeof Toolbar;

const Header = (props: Props) => {
    const {window} = props;
    const [mobileOpen, setMobileOpen] = useState(false);
    const matches = useMediaQuery('(min-width:900px)');

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    }

    const drawer = (
        <BoxFlexColumn
            component="nav"
        >
            <Container maxWidth="xl">
                <BoxFlex
                    sx={{
                        alignItems: "center",
                        padding: "18px 0"
                    }}
                >
                    <IconButton
                        onClick={handleDrawerToggle}
                        sx={{
                            mr: matches ? 2 : 0,
                            display: {lg: "none"},
                        }}
                    >
                        <Xmark/>
                    </IconButton>

                    <Link
                        href={routes.home}
                        style={{
                            display: "flex",
                        }}
                    >
                        <Logo
                            height={matches ? undefined : 16}
                        />
                    </Link>
                </BoxFlex>
            </Container>
            <Divider
                sx={{
                    borderColor: theme.palette.border.main,
                }}
            />
            <Button
                variant="contained"
                size="medium"
                color="primary"
                sx={{
                    margin: "32px 20px",
                }}
                component={Link}
                href={routes.specialists}
            >
                Записаться
            </Button>
            {navItems.map((items, k) => (
                <StyledList
                    key={`list${k}`}
                >
                    {
                        Object.keys(items).map((value, index) => (
                            <ListItem
                                key={`listItem${index}`}
                                disablePadding
                            >
                                {items[index].isExternal ? (
                                    <a
                                        href={items[index].url}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <BoxFlex
                                            sx={{
                                                alignItems: "center",
                                                gridGap: 8,
                                            }}
                                        >
                                            <Typography
                                                variant="h3"
                                                color="text.primary"
                                            >
                                                {items[index].title}
                                            </Typography>

                                            <ArrowUpRight
                                                width={17}
                                                height={17}
                                                color={theme.palette.text.tertiary}
                                            />
                                        </BoxFlex>
                                    </a>
                                ) : (
                                    <Link
                                        href={items[index].url}
                                    >
                                        <Typography
                                            variant="h3"
                                            color="text.primary"
                                        >
                                            {items[index].title}
                                        </Typography>
                                    </Link>
                                )}
                            </ListItem>
                        ))
                    }
                </StyledList>
            ))}
        </BoxFlexColumn>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <>
            <CssBaseline/>
            <StyledAppBar position="absolute">
                <Container maxWidth="xl">
                    <StyledToolbar
                        disableGutters
                    >
                        <BoxFlex
                            sx={{
                                alignItems: "center",
                                gridGap: "72px",
                            }}
                        >
                            <BoxFlex
                                sx={{
                                    alignItems: "center",
                                }}
                            >
                                <IconButton
                                    onClick={handleDrawerToggle}
                                    sx={{
                                        mr: matches ? 2 : 0,
                                        display: {lg: "none"},
                                    }}
                                >
                                    <Menu/>
                                </IconButton>

                                <Link
                                    href={routes.home}
                                    style={{
                                        display: "flex",
                                    }}
                                >
                                    <Logo
                                        height={matches ? undefined : 16}
                                    />
                                </Link>
                            </BoxFlex>

                            <NavItemsWrapper
                                sx={{
                                    display: {xs: 'none', lg: 'flex'}
                                }}
                                component="nav"
                            >
                                {navItems.map((items) => (
                                    Object.keys(items).map((value, index) => (
                                        <React.Fragment
                                            key={index}
                                        >
                                            {items[index].isExternal ? (
                                                <a
                                                    href={items[index].url}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                >
                                                    <span>{items[index].title}</span>
                                                    <ArrowUpRight
                                                        width={17}
                                                        height={17}
                                                        color={theme.palette.text.tertiary}
                                                    />
                                                </a>
                                            ) : (
                                                <Link
                                                    href={items[index].url}
                                                >
                                                    <span>{items[index].title}</span>
                                                </Link>
                                            )}
                                        </React.Fragment>
                                    ))
                                ))}
                            </NavItemsWrapper>
                        </BoxFlex>

                        <BoxFlex
                            sx={{
                                gridGap: 10,
                                alignItems: "center",
                            }}
                        >
                            <Button
                                variant="outlined"
                                size="medium"
                                sx={{
                                    display: {xs: 'none', lg: 'flex'}
                                }}
                                component={Link}
                                href={routes.specialists}
                            >
                                Записаться
                            </Button>

                            <Button
                                variant="contained"
                                size={matches ? "medium" : "small"}
                                color="primary"
                                component={Link}
                                href={routes.login}
                            >
                                Войти
                            </Button>
                        </BoxFlex>

                    </StyledToolbar>
                </Container>
            </StyledAppBar>
            <Drawer
                container={container}
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                }}
                sx={{
                    display: {xs: 'block', lg: 'none'},
                    '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth},
                }}
            >
                {drawer}
            </Drawer>

        </>
    );
}

export default Header;