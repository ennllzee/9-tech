import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const theme = createMuiTheme({
  typography: {
    fontFamily: ["Prompt"].join(","),
}});

theme.typography.h1 = {
  fontSize: '3rem',
  '@media (min-width:600px)': {
    fontSize: '3rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '4rem',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '5rem',
  },
  [theme.breakpoints.up('xl')]: {
    fontSize: '6rem',
  },
};

theme.typography.body1 = {
  fontSize: '.75rem',
  '@media (min-width:300px)': {
    fontSize: '1rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '1.25rem',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '1.5rem',
  },
  [theme.breakpoints.up('xl')]: {
    fontSize: '1.75rem',
  },
};

theme.typography.h5 = {
  fontSize: '1.5rem',
  '@media (min-width:300px)': {
    fontSize: '1.5rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '2rem',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '3rem',
  },
};

document.addEventListener('contextmenu', event => event.preventDefault());

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
