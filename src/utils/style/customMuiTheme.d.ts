import { Theme, ThemeOptions } from "@mui/material";

declare module "@mui/material/styles" {
  interface Theme {
    colors: {
      first: string;
      second: string;
      third: string;
      textFirst: string;
      textSecond: string;
      textThird: string;
      firstBackground: string;

      button: string;
      border: string;

      featured: {
        plan: string;
        planLight: string;
        upgrade: string;
        arrow: string;
      };
    };
  }

  interface ThemeOptions {
    colors?: {
      first: string;
      second: string;
      third: string;
      textFirst: string;
      textSecond: string;
      textThird: string;
      firstBackground: string;

      button: string;
      border: string;

      featured: {
        plan: string;
        planLight: string;
        upgrade: string;
        arrow: string;
      };
    };
  }

  // export function createTheme(options?: ThemeOptions): Theme;
}
