import { createTheme, CssBaseline, PaletteMode, ThemeProvider } from "@mui/material";
import { useMemo, useState } from "react";
import RoutesWrapper from "../components/Shared/RoutesWrapper";
import { UiContextProvider } from "../store/context/uiContext";
import Subscription from "./Subscription";

const Root = () => {
  const [mode, setMode] = useState<PaletteMode>("dark");

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
  colors: {
    ...(mode === "light"
      ? {
          first: "#fff",
          second: "#ffffff",
          third: "#ffffff",
          textFirst: "#000",
          textSecond: "#878FA8",
          textThird: "#515B78",

          button: "transparent",
          border: "#c9c9c9",

          firstBackground: "#282C34",

          featured: {
            plan: "#50B9DA",
            planLight: "transparent",
            upgrade: "#BE6019",
            arrow: "#323849",
          },
        }
      : {
          first: "#212530",
          second: "#2a2f3c",
          third: "#191c24",
          textFirst: "#fff",
          textSecond: "#878FA8",
          textThird: "#515B78",

          button: "#2A2F3C",
          border: "#2B303F",

          firstBackground: "#282C34",

          featured: {
            plan: "#50B9DA",
            planLight: "#1F2D38",
            upgrade: "#BE6019",
            arrow: "#323849",
          },
        }),
  },
  palette: {
    mode,
    ...(mode === "light"
      ? {
          primary: {
            main: "#50B9DA",
          },
        }
      : {
          background: {
            default: "#101218",
            paper: "#101218",
          },
        }),
  },
});
