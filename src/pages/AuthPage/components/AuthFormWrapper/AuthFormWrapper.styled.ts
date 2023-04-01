import { Grid, styled } from '@mui/material';

export const FormGridItem = styled(Grid)(({ theme }) => ({
  borderRadius: '4px',
  boxShadow: '0px 10px 15px -3px rgba(0, 0, 0, 0.1), 0px 4px 6px -4px rgba(0, 0, 0, 0.1)',
  padding: `${theme.spacing(4)} ${theme.spacing(2)} ${theme.spacing(6.5)}`,

  [theme.breakpoints.up('tablet')]: {
    padding: `${theme.spacing(10)} ${theme.spacing(8)} ${theme.spacing(6.5)}`,
  },
}));
