import React from "react";
import '@material-ui/core/styles';
import {SimplePaletteColorOptions} from "@mui/material/styles/createPalette";
import { Theme } from '@mui/material/styles';

declare module "@mui/material/styles/createPalette" {
    interface Palette {
        gradient: SimplePaletteColorOptions;
        border: SimplePaletteColorOptions;
        overlay: SimplePaletteColorOptions;
        surface: SimplePaletteColorOptions;
        psychotherapy: SimplePaletteColorOptions;
        meditation: SimplePaletteColorOptions;
        yoga: SimplePaletteColorOptions;
        bos: SimplePaletteColorOptions;
        physical: SimplePaletteColorOptions;
        manual: SimplePaletteColorOptions;
        acupuncture: SimplePaletteColorOptions;
        invasive: SimplePaletteColorOptions;
        textInverse: TypeText;
        white: SimplePaletteColorOptions;
    }

    interface PaletteOptions {
        gradient?: SimplePaletteColorOptions;
        border?: SimplePaletteColorOptions;
        overlay?: SimplePaletteColorOptions;
        surface?: SimplePaletteColorOptions;
        psychotherapy?: SimplePaletteColorOptions;
        meditation?: SimplePaletteColorOptions;
        yoga?: SimplePaletteColorOptions;
        bos?: SimplePaletteColorOptions;
        physical?: SimplePaletteColorOptions;
        manual?: SimplePaletteColorOptions;
        acupuncture?: SimplePaletteColorOptions;
        invasive?: SimplePaletteColorOptions;
        textInverse?: TypeText;
        white?: SimplePaletteColorOptions;
    }
    interface TypeText {
        tertiary: string;
    }
}

declare module "@mui/material/styles" {
    interface TypographyVariants {
        captionUppercase: React.CSSProperties;
        body3: React.CSSProperties;
        menu: React.CSSProperties;
        tabs: React.CSSProperties;
        tags: React.CSSProperties;
    }

    // allow configuration using `createTheme`
    interface TypographyVariantsOptions {
        captionUppercase?: React.CSSProperties;
        body3?: React.CSSProperties;
        menu?: React.CSSProperties;
        tabs?: React.CSSProperties;
        tags?: React.CSSProperties;
    }
}

// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
    interface TypographyPropsVariantOverrides {
        captionUppercase: true;
        body3: true;
        menu: true;
        tabs: true;
        tags: true;
    }
}

declare module '@mui/styles/defaultTheme' {
    interface DefaultTheme extends Theme {}
}