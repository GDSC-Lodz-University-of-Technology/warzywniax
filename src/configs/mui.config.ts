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
}

export const customTheme = createTheme({
  breakpoints: {
    values: {
      desktop: 1024,
      mobile: 0,
      tablet: 768,
    },
  },
  spacing: (factor: number) => `${0.5 * factor}rem`,
});
