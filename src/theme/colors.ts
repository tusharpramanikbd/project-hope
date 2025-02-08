import { PaletteOptions } from "@mui/material";

const lightPalette: PaletteOptions = {
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

const darkPalette: PaletteOptions = {
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

export { lightPalette, darkPalette };
