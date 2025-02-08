/** @format */

import { useState } from "react";
import "./App.css";
import { Button, styled, useTheme } from "@mui/material";
import { useThemeContext } from "./theme/ThemeContext";

function App() {
  const [count, setCount] = useState(0);
  const { palette } = useTheme();
  const { toggleTheme } = useThemeContext();

  return (
    <>
      <StyledButton variant="contained" onClick={toggleTheme}>
        Hello World
      </StyledButton>
      <h1>Project-Hope</h1>

      <div className="card" style={{ backgroundColor: palette.text.primary }}>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.primary.main,
}));
