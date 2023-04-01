/* eslint-disable @typescript-eslint/no-misused-promises */
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { RegisterFormData, registerFormSchema } from './RegisterForm.types';
import { AuthFormWrapper } from 'pages/AuthPage/components/AuthFormWrapper/AuthFormWrappper';
import { Button } from 'components/Button/Button';
import { FormInput } from 'components/Form/FormInput/FormInput';
import { Stack } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { zodResolver } from '@hookform/resolvers/zod';

type RegisterFormProps = {
  onFormSubmit: SubmitHandler<RegisterFormData>;
};

export const RegisterForm = ({ onFormSubmit }: RegisterFormProps) => {
  const { t } = useTranslation();

  const formMethods = useForm<RegisterFormData>({
    defaultValues: {
      email: '',
      password: '',
      repeatPassword: '',
    },
    mode: 'onChange',
    reValidateMode: 'onChange',
    resolver: zodResolver(registerFormSchema),
  });

  return (
    <AuthFormWrapper
      formHeader={t('auth.register.header')}
      questionHeader={t('auth.register.question')}
      questionLinkLabel={t('auth.login.header')}
      questionLinkUrl='/login'
    >
      <FormProvider {...formMethods}>
        <Stack
          component='form'
          onSubmit={formMethods.handleSubmit(onFormSubmit)}
        >
          <FormInput
            label={t('auth.form.email.label')}
            placeholder={t('auth.form.email.placeholder')}
            name='email'
            type='email'
          />
          <FormInput
            label={t('auth.form.password.label')}
            placeholder={t('auth.form.password.placeholder')}
            name='password'
            type='password'
          />
          <FormInput
            label={t('auth.form.repeatPassword.label')}
            placeholder={t('auth.form.repeatPassword.placeholder')}
            name='repeatPassword'
            type='password'
          />
          <Button
            sx={{
              mt: 2,
            }}
            variant='contained'
            type='submit'
          >
            {t('auth.form.submitRegisterButton')}
          </Button>
        </Stack>
      </FormProvider>
    </AuthFormWrapper>
  );
};
