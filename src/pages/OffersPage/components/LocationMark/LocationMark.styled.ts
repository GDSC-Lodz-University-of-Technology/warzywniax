import { styled } from '@mui/material';

export const LocationButton = styled('button')(({ theme }) => ({
  '&:hover': {
    filter: 'brightness(95%)',
  },
  alignItems: 'flex-start',
  background: 'none',
  border: 'none',
  color: theme.palette.text.label,
  cursor: 'pointer',
  display: 'flex',
  marginLeft: '4px',
  padding: 0,
}));
