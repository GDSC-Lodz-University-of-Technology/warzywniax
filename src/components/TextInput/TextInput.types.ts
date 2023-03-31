import { Control, FieldPath, FieldValues } from 'react-hook-form';
import { TextFieldProps } from '@mui/material';

export type TextInputProps<
  Fields extends FieldValues = FieldValues,
  Name extends FieldPath<Fields> = FieldPath<Fields>,
  Context = unknown
> = {
  control: Control<Fields, Context>;
  name: Name;
  labelPrefix: string;
} & TextFieldProps;
