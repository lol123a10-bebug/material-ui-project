declare module "@mui/material/styles" {
  interface Theme {
    background: {
      drawer: string;
    };
  }

  interface ThemeOptions {
    status?: {
      drawer?: string;
    };
  }
}
