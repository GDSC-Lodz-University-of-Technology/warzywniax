import { FieldPath, FieldValues, useController } from 'react-hook-form';
import { TextField } from '@mui/material';
import { TextInputProps } from './TextInput.types';
import { useTranslation } from 'react-i18next';

export function TextInput<
  Fields extends FieldValues = FieldValues,
  Name extends FieldPath<Fields> = FieldPath<Fields>,
  Context = unknown
>({ control, labelPrefix, name, ...rest }: TextInputProps<Fields, Name, Context>) {
  const { t } = useTranslation();
  const { field, formState } = useController({ control, name });

  const error = formState.errors[name];
  const errorMessage = error?.message?.toString() ?? '';

  return (
    <TextField
      label={t(`${labelPrefix}.${name}`)}
      error={!!error}
      helperText={t(errorMessage)}
      {...field}
      {...rest}
    ></TextField>
  );
}
