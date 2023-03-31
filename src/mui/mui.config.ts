import { createTheme } from '@mui/material';

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: false;
    sm: false;
    md: false;
    lg: false;
    xl: false;
    mobile: true;
    tablet: true;
    desktop: true;
  }
  interface PaletteOptions {
    mainGradient: string;
  }
  interface Palette {
    mainGradient: string;
  }
  interface TypeText {
    label: string;
  }
}

export const customTheme = createTheme({
  breakpoints: {
    values: {
      desktop: 1024,
      mobile: 0,
      tablet: 768,
    },
  },
  palette: {
    background: {
      default: '#F7F8F9',
    },
    common: {
      black: '#000',
      white: '#FFF',
    },
    divider: '#BBBEC5',
    grey: {
      500: '#323232',
    },
    mainGradient: 'linear-gradient(90.89deg, #3E8914 0%, #81B214 100%)',
    primary: {
      main: '#3E8914',
    },
    text: {
      label: '#C8C8C9',
      primary: '#000',
      secondary: '#2D3A3A',
    },
  },

  spacing: (factor: number) => `${0.5 * factor}rem`,
  typography: {
    fontFamily: 'Montserrat, sans-serif',
  },
});
