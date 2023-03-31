import { ReactNode } from 'react';
import { TextFieldProps } from '@mui/material';

export interface FormInputProps extends Omit<TextFieldProps, 'onChange' | 'value' | 'error'> {
  name: string;
  placeholder: string;
  icon?: ReactNode;
}
