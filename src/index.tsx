import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { CookiesProvider } from "react-cookie";

const theme = createMuiTheme({
  typography: {
    fontFamily: ["Prompt", "cursive"].join(","),
  },
});

const {
  breakpoints,
} = theme;

const responsive = {
  ...theme,
  overrides: {
    MuiTypography: {
      h1: {
        fontSize: "3.5rem",
        [breakpoints.down("sm")]: {
          fontSize: "3.5rem",
        },
        [breakpoints.up("md")]: {
          fontSize: "4.5rem",
        },
        [breakpoints.up("lg")]: {
          fontSize: "5.5rem",
        },
        [breakpoints.up("xl")]: {
          fontSize: "6.5rem",
        },
      },
      h2: {
        fontSize: "3rem",
        [breakpoints.down("sm")]: {
          fontSize: "3rem",
        },
        [breakpoints.up("md")]: {
          fontSize: "4rem",
        },
        [breakpoints.up("lg")]: {
          fontSize: "5rem",
        },
        [breakpoints.up("xl")]: {
          fontSize: "6rem",
        },
      },
      h3: {
        fontSize: "2.5rem",
        [breakpoints.down("sm")]: {
          fontSize: "2.5rem",
        },
        [breakpoints.up("md")]: {
          fontSize: "3.5rem",
        },
        [breakpoints.up("lg")]: {
          fontSize: "4.5rem",
        },
        [breakpoints.up("xl")]: {
          fontSize: "5.5rem",
        },
      },
      h4: {
        fontSize: "2rem",
        [breakpoints.down("sm")]: {
          fontSize: "2rem",
        },
        [breakpoints.up("md")]: {
          fontSize: "3rem",
        },
        [breakpoints.up("lg")]: {
          fontSize: "4rem",
        },
        [breakpoints.up("xl")]: {
          fontSize: "5rem",
        },
      },
      h5: {
        fontSize: "1.5rem",
        [breakpoints.down("sm")]: {
          fontSize: "1.5rem",
        },
        [breakpoints.up("md")]: {
          fontSize: "2.5rem",
        },
        [breakpoints.up("lg")]: {
          fontSize: "3.5rem",
        },
        [breakpoints.up("xl")]: {
          fontSize: "4.5rem",
        },
      },
      body1: {
        fontSize: "0.75rem",
        [breakpoints.down("sm")]: {
          fontSize: "0.75rem",
        },
        [breakpoints.up("md")]: {
          fontSize: "1rem",
        },
        [breakpoints.up("lg")]: {
          fontSize: "1.25rem",
        },
        [breakpoints.up("xl")]: {
          fontSize: "1.5rem",
        },
      },
    },
  },
};

document.addEventListener("contextmenu", (event) => event.preventDefault());

ReactDOM.render(
  <React.StrictMode>
    <CookiesProvider>
      <ThemeProvider theme={responsive}>
        <App />
      </ThemeProvider>
    </CookiesProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
