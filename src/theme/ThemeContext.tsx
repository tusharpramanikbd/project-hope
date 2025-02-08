import { createContext, ReactNode, useContext, useMemo, useState } from "react";
import getTheme from "./theme";
import { Theme, ThemeProvider } from "@mui/material";

interface ThemeContextProps {
  toggleTheme: () => void;
  themeMode: "light" | "dark";
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

const ThemeProviderWrapper = ({ children }: { children: ReactNode }) => {
  const [themeMode, setThemeMode] = useState<"light" | "dark">("dark");

  const toggleTheme = () => {
    setThemeMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  const theme: Theme = useMemo(() => getTheme(themeMode), [themeMode]);

  return (
    <ThemeContext.Provider value={{ toggleTheme, themeMode }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error(
      "useThemeContext must be used within a ThemeProviderWrapper",
    );
  }
  return context;
};

export { ThemeProviderWrapper, useThemeContext };
