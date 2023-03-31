import { FormControl, TextField } from '@mui/material';
import { FormErrorMessage } from '../FormErrorMessage/FormErrorMessage';
import { FormInputProps } from './FormInput.types';
import { useController } from 'react-hook-form';

export const FormInput = ({ name, type, ...rest }: FormInputProps) => {
  const {
    field: { ref, ...inputProps },
    fieldState: { error },
  } = useController({
    name,
  });

  return (
    <FormControl error={!!error}>
      <TextField
        {...rest}
        {...inputProps}
        type={type}
        ref={ref}
      />
      <FormErrorMessage error={error} />
    </FormControl>
  );
};
