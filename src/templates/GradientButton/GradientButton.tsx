import { Button, ButtonProps } from '@mui/material';
import styled from '@emotion/styled';

export const GradientButton = styled(Button)<ButtonProps>(() => ({
  '&:hover': {
    background: 'linear-gradient(91.81deg, #3E8914 0%, #81B214 100%)',
    filter: 'brightness(105%)',
  },
  background: 'linear-gradient(91.81deg, #3E8914 0%, #81B214 100%)',
  borderRadius: '0.6rem',
  color: 'white',
  fontWeight: '700',
}));
