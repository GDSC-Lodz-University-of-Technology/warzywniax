/* eslint-disable @typescript-eslint/no-misused-promises */
import { Chip, Divider, Stack } from '@mui/material';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { LoginFormData, loginFormSchema } from './LoginForm.types';
import { AuthFormWrapper } from 'pages/AuthPage/components/AuthFormWrapper/AuthFormWrappper';
import { AuthProvider } from 'services/FirebaseService/AuthService/AuthService.types';
import { Button } from 'components/Button/Button';
import { FormInput } from 'components/Form/FormInput/FormInput';
import { SignInProvidersBox } from '../SignInProvidersBox/SignInProvidersBox';
import { useTranslation } from 'react-i18next';
import { zodResolver } from '@hookform/resolvers/zod';

type LoginFormProps = {
  onFormSubmit: SubmitHandler<LoginFormData>;
  handleExternalProviderLogin: (provider: AuthProvider) => void;
};

export const LoginForm = ({ onFormSubmit, handleExternalProviderLogin }: LoginFormProps) => {
  const { t } = useTranslation();

  const formMethods = useForm<LoginFormData>({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
    reValidateMode: 'onChange',
    resolver: zodResolver(loginFormSchema),
  });

  return (
    <AuthFormWrapper
      formHeader={t('auth.login.header')}
      questionHeader={t('auth.login.question')}
      questionLinkLabel={t('auth.register.header')}
      questionLinkUrl='/register'
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
          <Button
            sx={{
              mt: 2,
            }}
            variant='contained'
            type='submit'
          >
            {t('auth.form.submitLoginButton')}
          </Button>

          <Divider
            sx={{
              my: 4,
            }}
          >
            <Chip label={t('auth.loginProviders.label')} />
          </Divider>

          <SignInProvidersBox handleProviderButtonClick={handleExternalProviderLogin} />
        </Stack>
      </FormProvider>
    </AuthFormWrapper>
  );
};
