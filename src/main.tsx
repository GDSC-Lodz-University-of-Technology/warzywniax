import './index.css';
import './configs/i18n';
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { App } from './App';
import { customTheme } from './configs/mui';
import { ThemeProvider } from '@mui/material';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={customTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
