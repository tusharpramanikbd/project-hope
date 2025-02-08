import { createTheme } from "@mui/material";
import { lightPalette, darkPalette } from "./colors";

const getTheme = (mode: "light" | "dark") => {
  return createTheme({
    palette: mode === "light" ? lightPalette : darkPalette,
    typography: {
      fontFamily: "Arial, sans-serif",
    },
  });
};

export default getTheme;
