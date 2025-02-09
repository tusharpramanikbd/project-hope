import { createTheme } from "@mui/material";
import { lightPalette, darkPalette } from "./colors";
import { getFilledButtonStyle } from "./customStyles/CustomButtonStyles";

const getTheme = (mode: "light" | "dark") => {
  const palette = mode === "light" ? lightPalette : darkPalette;

  return createTheme({
    palette,
    typography: {
      fontFamily: "Arial, sans-serif",
    },
    components: {
      MuiButton: {
        defaultProps: {
          disableRipple: true,
          disableFocusRipple: true,
          disableTouchRipple: true,
        },
        styleOverrides: {
          root: {
            fontSize: 14,
            fontWeight: 400,
            lineHeight: "20px",
            textTransform: "none",
            minWidth: "74px",
          },
        },
        variants: [...getFilledButtonStyle(palette)],
      },
    },
  });
};

export default getTheme;
