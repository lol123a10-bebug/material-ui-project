import { Box, createTheme, CssBaseline, PaletteMode, styled, ThemeProvider } from "@mui/material";
import { useMemo, useState } from "react";
import Navigation from "../components/Shared/Navigation";
import Subscription from "./Subscription";

const Root = () => {
  const [mode, setMode] = useState<PaletteMode>("light");

  const [open, setOpen] = useState(false);

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  const handleNavToggle = () => {
    setOpen((open) => !open);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: "flex" }}>
        <Navigation isOpen={open} onClose={handleNavToggle} />
        <Main open={open}>
          <Subscription />
          <button onClick={handleNavToggle}>Toggle</button>
        </Main>
      </Box>
    </ThemeProvider>
  );
};

export default Root;

const Main = styled("main")<{ open?: boolean }>(({ theme, open }) => ({
  marginLeft: 0,

  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),

  ...(open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),

    marginLeft: "30%",
  }),
}));

const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {}
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
