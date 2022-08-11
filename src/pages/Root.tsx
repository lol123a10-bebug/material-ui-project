import { createTheme, Drawer, ThemeProvider } from "@mui/material";
import Navigation from "../components/Shared/Navigation";
import Subscription from "./Subscription";

const theme = createTheme({
  palette: {},
});

const Root = () => {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Navigation isOpen />
        <Subscription />
      </div>
    </ThemeProvider>
  );
};

export default Root;
