import {createTheme, ThemeOptions} from "@mui/material";

export const theme: ThemeOptions = createTheme({
  typography: {
    fontFamily: [
      "DM Sans",
      "avenir",
      "-apple-system",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
    ].join(","),
    h1: {
      fontWeight: 400,
      fontSize: "2.25rem",
      color: "#222222",
    },
    body1: {
      fontSize: "1rem",
      color: "#3C3C3C",
    },
  },
  palette: {
    primary: {
      main: "#3C3C3C",
    },
    secondary: {
      main: "#C7D8B7",
    },
  },
  shape: {
    borderRadius: 0,
  },
});
