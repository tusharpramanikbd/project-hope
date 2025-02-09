import type { Preview } from "@storybook/react";
import { withThemeFromJSXProvider } from "@storybook/addon-themes";
import getTheme from "../src/theme/theme";
import { CssBaseline, ThemeProvider } from "@mui/material";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    withThemeFromJSXProvider({
      themes: {
        light: getTheme("light"),
        dark: getTheme("dark"),
      },
      defaultTheme: "light",
      Provider: ThemeProvider,
      GlobalStyles: CssBaseline,
    }),
  ],
};

export default preview;
