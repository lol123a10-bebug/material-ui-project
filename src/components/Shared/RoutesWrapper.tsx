import { DarkMode, LightModeSharp, Menu } from "@mui/icons-material";
import { Box, IconButton, styled } from "@mui/material";
import { ReactNode } from "react";
import useUiContext from "../../utils/hooks/useUiContext";
import Navigation from "./Navigation";

interface Props {
  children: ReactNode;
}

const RoutesWrapper = (props: Props) => {
  const { children } = props;

  const { isNavOpen, onNavToggle, onModeToggle } = useUiContext();

  const handleNavToggle = () => {
    onNavToggle();
  };

  const handleModeToggle = () => {
    onModeToggle();
  };

  return (
    <Box>
      <Box
        sx={{
          position: "absolute",
          top: ".5rem",
          right: ".5rem",
        }}
      >
        <IconButton onClick={handleModeToggle}>{true ? <LightModeSharp /> : <DarkMode />}</IconButton>

        <IconButton onClick={handleNavToggle}>
          <Menu />
        </IconButton>
      </Box>

      <Navigation isOpen={isNavOpen} onClose={onNavToggle} />
      <Main open={isNavOpen}>{children}</Main>
    </Box>
  );
};

export default RoutesWrapper;

const Main = styled("main")<{ open?: boolean }>(({ theme, open }) => ({
  padding: "3.5rem 4rem",
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

    [theme.breakpoints.up("md")]: {
      marginLeft: "17.5rem",
    },
  }),
}));
