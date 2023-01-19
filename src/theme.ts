import {createTheme} from "@mui/material/styles";
import LinkBehavior from "./overridden-components/Link"
import {LinkProps} from '@mui/material/Link';
import avatar from "./img/avatar.png";

const colors = {
    primary: {
        main: "#2452AB",
        dark: "#123374",
        light: "#86A0D1",
    },
    secondary: {
        main: "#D4DDED",
    },
    text: {
        primary: "#001751",
        secondary: "rgba(0, 26, 75, 0.7)",
    },
    border: {
        main: "rgba(20, 36, 77, 0.15)",
    },
    background: {
        default: "#F5F2F1",
    },
    overlay: "rgba(30, 22, 19, 0.4)",
    disabled: "rgba(0, 26, 75, 0.2)",
    white: "#FFF",
}

// A custom theme for this app
export default createTheme({
    typography: {
        fontFamily: `"Inter", "Roboto", "Helvetica", "Arial", sans-serif`,
        h1: {
            fontFamily: `"Right Grotesk", "Roboto", sans-serif`,
            fontWeight: 500,
            fontSize: 65,
            lineHeight: "70px",

            "@media (max-width: 899px)": {
                fontSize: "35px",
                lineHeight: "40px",
            },
        },
        h2: {
            fontFamily: `"Right Grotesk", "Roboto", sans-serif`,
            fontWeight: 500,
            fontSize: 45,
            lineHeight: "50px",

            "@media (max-width: 899px)": {
                fontSize: "28px",
                lineHeight: "33px",
            },

            "&.block-title": {
                marginBottom: 50,

                "@media (max-width: 899px)": {
                    marginBottom: 32,
                },
            }
        },
        h3: {
            fontFamily: `"Right Grotesk", "Roboto", sans-serif`,
            fontWeight: 500,
            fontSize: 30,
            lineHeight: "35px",

            "@media (max-width: 899px)": {
                fontSize: "24px",
                lineHeight: "29px",
            },
        },
        h4: {
            fontFamily: `"Right Grotesk", "Roboto", sans-serif`,
            fontWeight: 500,
            fontSize: 25,
            lineHeight: "30px",

            "@media (max-width: 899px)": {
                fontSize: "20px",
                lineHeight: "25px",
            },
        },
        subtitle1: {
            fontWeight: 600,
            fontSize: 20,
            lineHeight: "28px",
        },
        subtitle2: {
            fontWeight: 500,
            fontSize: 16,
            lineHeight: "24px",
        },
        body1: {
            fontWeight: 400,
            fontSize: 20,
            lineHeight: "28px",
        },
        body2: {
            fontWeight: 400,
            fontSize: 16,
            lineHeight: "24px",
        },
        body3: {
            fontWeight: 400,
            fontSize: 14,
            lineHeight: "20px",
        },
        captionUppercase: {
            fontWeight: 600,
            fontSize: 14,
            lineHeight: "18px",
            textTransform: "uppercase",
        },
        caption: {
            fontFamily: `"Roboto", sans-serif`,
            fontWeight: 400,
            fontSize: 12,
            lineHeight: "18px",
        },
    },
    components: {
        MuiTable: {
            styleOverrides: {
                root: {
                    borderTop: `1px solid ${colors.border.main}`,
                }
            }
        },
        MuiLink: {
            defaultProps: {
                component: LinkBehavior,
            } as LinkProps,
            styleOverrides: {
                root: {
                    textDecoration: "none",
                },
            },
        },
        MuiButtonBase: {
            defaultProps: {
                LinkComponent: LinkBehavior,
            },
        },
        MuiTypography: {
            defaultProps: {
                variantMapping: {
                    body3: "p",
                    caption: "p",
                    captionUppercase: "p",
                },
            },
        },
        MuiAvatar: {
            defaultProps: {
                src: avatar,
            },
        },
        MuiFormLabel: {
            styleOverrides: {
                root: {
                    fontSize: 16,
                    fontWeight: 400,
                    color: colors.text.secondary,
                },
            },
        },
        MuiInputBase: {
            styleOverrides: {
                root: {
                    fontSize: 16,
                    fontWeight: 400,
                    color: colors.text.secondary,

                    "&::before": {
                        borderBottom: `1px solid ${colors.border.main} !important`,
                    },

                    "& input": {
                        padding: "0 0 12px",
                    },

                    "& svg": {
                        flexShrink: 0,
                    },

                    "& .Mui-disabled ~ svg path": {
                        stroke: colors.disabled,
                    }
                },
            },
        },
        MuiDialog: {
            styleOverrides: {
                paper: {
                    boxShadow: "none",
                    borderRadius: 30,
                },
            },
        },
        MuiDialogContent: {
            styleOverrides: {
                root: {
                    paddingBottom: 38,
                },
            },
        },
        MuiBackdrop: {
            styleOverrides: {
                root: {
                    background: colors.overlay,
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: "inherit",
                    boxShadow: "none",
                    fontSize: 16,
                    fontWeight: 500,
                    lineHeight: "20px",
                    borderRadius: "40px",

                    "&:hover": {
                        boxShadow: "none",
                        transition: "fill 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, stroke 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
                    },

                    "&:disabled": {
                        color: colors.white,
                    },

                },
                text: {
                    borderRadius: 0,
                },
                containedPrimary: {
                    "& path": {
                        stroke: colors.white,
                        // fill: colors.white,
                    },
                },
                outlinedPrimary: {
                    "& path": {
                        stroke: colors.text.primary,
                        // fill: colors.text.primary,
                    },
                    "&:hover path": {
                        stroke: colors.white,
                        // fill: colors.white,
                    },

                    "&:disabled": {
                        color: colors.disabled,
                        borderColor: colors.disabled,
                        "& path": {
                            stroke: colors.disabled,
                            // fill: colors.disabled,
                        },
                    },
                },
                contained: {
                    "&:disabled": {
                        backgroundColor: colors.disabled,
                    }
                },
                outlined: {
                    color: colors.text.primary,
                    borderColor: colors.border.main,

                    "&:hover": {
                        backgroundColor: colors.primary.dark,
                        borderColor: colors.primary.dark,
                        color: colors.white,
                    },
                },
                sizeLarge: {
                    padding: "18px 40px",
                },
                sizeMedium: {
                    padding: "12px 30px",
                },
                sizeSmall: {
                    padding: "6px 16px",
                },
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    boxShadow: "none",
                    borderRadius: 30,
                },
            },
        },
        MuiFormHelperText: {
            styleOverrides: {
                root: {
                    fontWeight: 600,
                    fontSize: 16,
                    lineHeight: "24px",
                    marginTop: 16,
                },
            },
        },
        MuiMenu: {
            defaultProps: {
                elevation: 0,
            },
            styleOverrides: {
                root: {
                    "& .MuiPaper-root": {
                        boxShadow: "0px 10px 20px rgba(0, 12, 54, 0.08)",
                        borderRadius: 8,
                    },

                    "& .MuiMenuItem-root": {
                        fontSize: 16,
                        lineHeight: "24px",
                        paddingTop: 8,
                        paddingBottom: 8,

                        "&.Mui-selected": {
                            backgroundColor: colors.secondary.main,
                            color: colors.primary.main,
                        }
                    },
                },
            },
        },
        MuiSelect: {
            styleOverrides: {
                select: {
                    paddingTop: 7,
                },
            },
        },
        MuiChip: {
            styleOverrides: {
                root: {
                    backgroundColor: colors.white,
                    height: 48,
                    borderRadius: 40,
                },
                label: {
                    paddingRight: 16,
                    paddingLeft: 16,
                }
            },
        },
        MuiLinearProgress: {
            styleOverrides: {
                root: {
                    height: 8,
                    borderRadius: 20,
                    backgroundColor: colors.background.default,
                },
                barColorPrimary: {
                    borderRadius: 20,
                    backgroundColor: colors.primary.light,
                },
            },
        },
    },
    palette: {
        primary: {
            dark: colors.primary.dark,
            main: colors.primary.main,
            light: colors.primary.light,
        },
        secondary: {
            main: colors.secondary.main,
        },
        gradient: {
            main: "linear-gradient(92.74deg, #E1E6EB 0%, #D5E6E5 47.4%, #EFEFE1 100%)",
        },
        text: {
            primary: colors.text.primary,
            secondary: colors.text.secondary,
            tertiary: "rgba(0, 26, 75, 0.4)",
            disabled: colors.disabled,
        },
        textInverse: {
            primary: colors.white,
            secondary: "rgba(255, 255, 255, 0.7",
            tertiary: "rgba(255, 255, 255, 0.5)",
            disabled: "rgba(255, 255, 255, 0.15)",
        },
        background: {
            default: colors.background.default,
        },
        surface: {
            dark: "#1E2937",
            main: "#EDE6E4",
            light: colors.white,
        },
        border: {
            dark: "rgba(255, 255, 255, 0.2)",
            main: colors.border.main,
        },
        overlay: {
            main: colors.overlay,
        },
        success: {
            main: "#82BC92",
        },
        warning: {
            main: "#EAB980",
        },
        error: {
            main: "#DF7676",
        },
        psychotherapy: {
            main: "#94AAE3",
            light: "#CDD7F1",
        },
        meditation: {
            main: "#95C9E0",
            light: "#CDE6F1",
        },
        yoga: {
            main: "#8FC39D",
            light: "#CAE0D8",
        },
        bos: {
            main: "#ABCF71",
            light: "#D8E0CA",
        },
        physical: {
            main: "#DFC06F",
            light: "#ECE3D0",
        },
        manual: {
            main: "#E3A673",
            light: "#EED5C0",
        },
        acupuncture: {
            main: "#E88C7F",
            light: "#F4D2CE",
        },
        invasive: {
            main: "#D3A6CF",
            light: "#E0C8DE",
        },
        white: {
            main: colors.white,
            dark: "rgba(255, 255, 255, 0.7)",
        },
    },
});
