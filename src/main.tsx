import './index.css';
import './locales/i18n';
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { customTheme } from './mui/mui.config';
import { router } from './router/router';
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';

async function initializeApp(): Promise<void> {
  if (import.meta.env.DEV) {
    const { connectToFirebaseEmulators } = await import(
      './common/utils/connectToFirebaseEmulators'
    );
    connectToFirebaseEmulators();
  }
  ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
      <ThemeProvider theme={customTheme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </React.StrictMode>
  );
}

void initializeApp();
