import { FormHelperText, styled } from '@mui/material';

export const FormErrorMessageHelperText = styled(FormHelperText)(({ theme }) => ({
  alignItems: 'center',
  display: 'flex',
  fontSize: 12,
  marginBottom: theme.spacing(1.5),
  marginLeft: theme.spacing(0),
  marginTop: theme.spacing(0.5),
  minHeight: '20px',
}));
