import { createTheme, Theme } from "@mui/material";

export const theme: Theme = createTheme({
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
    lightGrey: {
      main: "#F6F6F6",
    },
  },
  shape: {
    borderRadius: 0,
  },
});

declare module "@mui/material/styles" {
  interface Palette {
    lightGrey: Palette["primary"];
  }
  interface PaletteOptions {
    lightGrey?: PaletteOptions["primary"];
  }
}
