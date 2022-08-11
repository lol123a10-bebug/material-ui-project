import { createTheme, CssBaseline, PaletteMode, ThemeProvider } from "@mui/material";
import { useMemo, useState } from "react";
import RoutesWrapper from "../components/Shared/RoutesWrapper";
import { UiContextProvider } from "../store/context/uiContext";
import Subscription from "./Subscription";

const Root = () => {
  const [mode, setMode] = useState<PaletteMode>("light");

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  const handleModeToggle = () => {
    setMode((mode) => (mode === "dark" ? "light" : "dark"));
  };

  return (
    <UiContextProvider mode={mode} onModeToggle={handleModeToggle}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RoutesWrapper>
          <Subscription />
        </RoutesWrapper>
      </ThemeProvider>
    </UiContextProvider>
  );
};

export default Root;

const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          primary: {
            main: "#0d47a1",
            light: "#5472d3",
            dark: "#002171",
            contrastText: "#fff",
          },
          secondary: {
            main: "#1565c0",
            light: "#5e92f3",
            dark: "#003c8f",
            contrastText: "#000",
          },
        }
      : {
          primary: {
            main: "#212121",
            light: "#6d6d6d",
            dark: "#1b1b1b",
            contrastText: "#ffffff",
          },

          // secondary: {
          //   main: "#212121",
          //   light: "#484848",
          //   dark: "#000000",
          //   contrastText: "#ffffff",
          // },
        }),
  },
});
