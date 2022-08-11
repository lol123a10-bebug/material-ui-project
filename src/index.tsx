import { GlobalStyles } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./pages/Root";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyles
      styles={{
        "*": {
          boxSizing: "border-box",
        },

        "html, body": {
          fontSize: "14px",
        },
      }}
    />

    <Root />
  </React.StrictMode>
);
