import {
  createTheme,
  responsiveFontSizes,
  Shadows,
  Theme,
} from '@mui/material';

export let theme: Theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1400,
      xl: 1536,
    },
  },
  typography: {
    fontFamily: [
      'DM Sans',
      'avenir',
      '-apple-system',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(','),
    h1: {
      fontWeight: 400,
      fontSize: '2.25rem',
    },
    h2: {
      fontWeight: 400,
      fontSize: '2rem',
    },
    h3: {
      fontSize: '1.75rem',
    },
    h4: {
      fontSize: '1.5rem',
    },
    h5: {
      fontSize: '1.25rem',
    },
    h6: {
      fontSize: '1rem',
    },
    body1: {
      fontSize: '20px',
      color: '#4f4f4f',
      '@media (max-width: 600px)': {
        fontSize: '16px',
      },
    },
    body2: {
      fontSize: '20px',
      color: '#4f4f4f',
      '@media (max-width: 600px)': {
        fontSize: '16px',
      },
    },
  },
  palette: {
    primary: {
      main: '#3C3C3C',
    },
    secondary: {
      main: '#C7D8B7',
    },
    lightGrey: {
      main: '#F6F6F6',
    },
  },
  shape: {
    borderRadius: 0,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '@global': {
          'h1, h2, h3, h4, h5, h6': {
            color: '#222',
          },
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          textDecorationLine: 'none',
        },
      },
    },
  },
  shadows: Array(25).fill('none') as Shadows,
});
theme = responsiveFontSizes(theme, {
  breakpoints: ['sm', 'md', 'lg'],
  factor: 1.75,
  variants: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
});

declare module '@mui/material/styles' {
  interface Palette {
    lightGrey: Palette['primary'];
  }
  interface PaletteOptions {
    lightGrey?: PaletteOptions['primary'];
  }
}
