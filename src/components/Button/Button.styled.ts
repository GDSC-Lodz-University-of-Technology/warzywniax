import { Button as MuiButton, styled } from '@mui/material';

const BaseLayoutButton = styled(MuiButton)<{ isLoading: boolean | undefined }>(
  ({ theme, isLoading }) => ({
    '&:hover, &:target': {
      background: theme.palette.mainGradient,
    },
    alignItems: 'center',
    borderRadius: '12px',
    borderWidth: '2px',
    fontSize: '1rem',
    fontWeight: 700,
    lineHeight: '1.5em',
    padding: `${theme.spacing(2)} ${theme.spacing(4)}`,
    pointerEvents: isLoading ? 'none' : 'auto',
    textAlign: 'center',
    textTransform: 'none',
  })
);

export const ContainedButton = styled(BaseLayoutButton)(({ theme }) => ({
  '&:hover, &:target': {
    filter: 'brightness(1.05)',
  },
  '&:not(:disabled)': {
    background: theme.palette.mainGradient,
  },
  color: theme.palette.common.white,
}));
ContainedButton.defaultProps = { variant: 'contained' };

export const OutlinedButton = styled(BaseLayoutButton)(({ theme }) => ({
  '&:hover, &:target': {
    borderColor: theme.palette.common.white,
    borderWidth: '2px',
    color: theme.palette.common.white,
  },
  backgroundColor: theme.palette.background.default,
  borderColor: theme.palette.primary.main,
  color: theme.palette.primary.main,
}));
OutlinedButton.defaultProps = { variant: 'outlined' };

export const TextButton = styled(BaseLayoutButton)(({ theme }) => ({
  '&:focus': {
    '&, & > .MuiButton-startIcon > *, & > .MuiButton-endIcon > *': {
      color: theme.palette.primary.main,
    },
  },
  '&:hover, &:target': {
    '&, & > .MuiButton-startIcon > *, & > .MuiButton-endIcon > *': {
      color: theme.palette.common.white,
    },
  },
  borderRadius: '8px',
  padding: '4px',
  textDecoration: 'underline',
}));
TextButton.defaultProps = { variant: 'text' };
