import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { CssBaseline } from "@mui/material";
import { ThemeProviderWrapper } from "./theme/ThemeContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProviderWrapper>
      <CssBaseline enableColorScheme />
      <App />
    </ThemeProviderWrapper>
  </StrictMode>,
);
