import './locales/i18n';
import './index.css';
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { CUSTOM_THEME } from './configs/mui.config';
import { ROUTER } from './router/router';
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={CUSTOM_THEME}>
      <RouterProvider router={ROUTER} />
    </ThemeProvider>
  </React.StrictMode>
);
