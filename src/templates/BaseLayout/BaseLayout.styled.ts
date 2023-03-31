import { styled } from '@mui/material';

export const LayoutWrapper = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
  width: '100%',
});

export const Header = styled('header')(({ theme }) => ({
  borderBottom: `1px solid ${theme.palette.divider}`,
  height: '80px',
}));
