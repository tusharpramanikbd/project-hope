import { createTheme } from "@mui/material";
import { lightPalette, darkPalette } from "./colors";
import { GetFilledButtonStyle } from "./customStyles/CustomButtonStyles";

const getTheme = (mode: "light" | "dark") => {
  return createTheme({
    palette: mode === "light" ? lightPalette : darkPalette,
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
        variants: [
          ...GetFilledButtonStyle(
            mode === "light" ? lightPalette : darkPalette,
          ),
        ],
      },
    },
  });
};

export default getTheme;
