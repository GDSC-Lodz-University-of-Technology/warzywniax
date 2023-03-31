import { styled, ToggleButtonGroup } from '@mui/material';

export const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
  '& .MuiToggleButtonGroup-grouped': {
    '&.Mui-disabled': {
      border: 1,
    },
    '&:first-of-type': {
      borderRadius: 20,
    },
    '&:not(:first-of-type)': {
      borderRadius: 20,
    },
    border: 0,
    margin: theme.spacing(0.6),
    textTransform: 'none',
  },
}));
