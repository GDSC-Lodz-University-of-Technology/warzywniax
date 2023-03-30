import './index.css';
import './locales/i18n';
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { customTheme } from './mui/mui.config';
import { router } from './router/router';
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';

const queryClient = new QueryClient();

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
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </ThemeProvider>
    </React.StrictMode>
  );
}

void initializeApp();
