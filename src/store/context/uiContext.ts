import { PaletteMode } from "@mui/material";
import { createContext, createElement, ReactNode, useState } from "react";

type InitialState = {
  isNavOpen: boolean;
  onNavToggle: HandleNavOpen;
  mode: PaletteMode;
  onModeToggle: () => void;
};

type ProviderProps = {
  children: ReactNode;
  mode: PaletteMode;
  onModeToggle: () => void;
};

type HandleNavOpen = () => void;

const uiContext = createContext({} as InitialState);
export default uiContext;

export const UiContextProvider = (props: ProviderProps) => {
  const { children, mode, onModeToggle } = props;

  const [isNavOpen, setNavOpen] = useState(false);

  const handleNavToggle: HandleNavOpen = () => {
    setNavOpen((isOpen) => !isOpen);
  };

  return createElement(uiContext.Provider, {
    children,
    value: {
      isNavOpen,
      onNavToggle: handleNavToggle,

      mode,
      onModeToggle,
    },
  });
};
