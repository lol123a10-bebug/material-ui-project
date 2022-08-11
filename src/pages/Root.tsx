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
          secondary: {
            light: "#484848",
            main: "#212121",
            dark: "#000000",
            contrastText: "#ffffff",
          },

          primary: {
            light: "#6d6d6d",
            main: "#424242",
            dark: "#1b1b1b",
            contrastText: "#ffffff",
          },
        }
      : {
          secondary: {
            light: "#484848",
            main: "#212121",
            dark: "#000000",
            contrastText: "#ffffff",
          },

          primary: {
            light: "#6d6d6d",
            main: "#424242",
            dark: "#1b1b1b",
            contrastText: "#ffffff",
          },
        }),
  },
});
