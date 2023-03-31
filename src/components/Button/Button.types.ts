import { ElementType } from 'react';
import { ButtonProps as MuiButtonProps } from '@mui/material';

export type CustomButtonProps<C extends ElementType> = MuiButtonProps<
  C,
  { component?: C } & {
    variant?: 'contained' | 'outlined' | 'text';
    isLoading?: boolean;
  }
>;
