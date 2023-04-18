import { RouterProvider } from "react-router-dom";
import { createTheme } from '@mui/material/styles';
import { router } from "./routes/Router";
import { ThemeProvider } from "@emotion/react";

const theme = createTheme({
  palette: {
    primary: {
      main: "#917081",
    },
    secondary: {
      main: "#b8d9c8",
    }
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
