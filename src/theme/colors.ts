import { PaletteOptions, SimplePaletteColorOptions } from "@mui/material";

export interface DefaultPaletteOptions extends PaletteOptions {
  primary?: SimplePaletteColorOptions;
}

export const lightPalette: DefaultPaletteOptions = {
  mode: "light",
  primary: {
    main: "#D50000",
  },
  text: {
    primary: "#161616",
    secondary: "#FFFFFF", // This is the color of the text which is same on light and dark mode
  },
  background: {
    default: "#C2C2C2",
    paper: "#2B2B2B",
  },
};

export const darkPalette: DefaultPaletteOptions = {
  mode: "dark",
  primary: {
    main: "#D50000",
  },
  text: {
    primary: "#FFFFFF",
    secondary: "#FFFFFF", // This is the color of the text which is same on light and dark mode
  },
  background: {
    default: "#161616",
    paper: "#2B2B2B",
  },
};
