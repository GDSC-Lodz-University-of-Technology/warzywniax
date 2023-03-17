import './locales/i18n';
import './index.css';
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { customTheme } from './mui/mui.config';
import { router } from './router/router';
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={customTheme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
