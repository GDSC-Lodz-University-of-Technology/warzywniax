import { Button, ButtonProps, styled } from '@mui/material';

export const TagButton = styled(Button)<ButtonProps>(() => ({
  '&:hover': {
    backgroundColor: '#C8EED2',
    filter: 'brightness(95%)',
  },
  backgroundColor: '#C8EED2',
  borderRadius: '8px',
  color: 'black',
  fontSize: '0.8rem',
  fontWeight: '400',
  height: '18px',
  px: '11px',
  py: '2px',
  textTransform: 'none',
}));
