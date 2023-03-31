import { FieldError } from 'react-hook-form';
import { FormErrorMessageHelperText } from './FormError.styled';
import { useTranslation } from 'react-i18next';

type FormErrorMessageProps = {
  error: FieldError | undefined;
};

const BASE_ERROR_PATH = 'forms.formErrors';

export const FormErrorMessage = ({ error }: FormErrorMessageProps) => {
  const { t } = useTranslation();

  const errorMessage = error?.message
    ? t([`${BASE_ERROR_PATH}.${error.message}`, `${BASE_ERROR_PATH}.general`])
    : '';

  return <FormErrorMessageHelperText>{errorMessage}</FormErrorMessageHelperText>;
};
