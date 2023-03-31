/* eslint-disable @typescript-eslint/no-misused-promises */
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { Grid, Stack, Typography } from '@mui/material';
import { LoginFormData, loginFormSchema } from './LoginForm.types';
import { AuthProvider } from 'services/FirebaseService/AuthService/AuthService.types';
import { Button } from 'components/Button/Button';
import { FormInput } from 'components/Form/FormInput/FormInput';
import { Link } from 'react-router-dom';
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
    <Grid
      sx={{
        mt: 2,
      }}
      gap={'0px 24px'}
      container
    >
      <Grid
        item
        mobile={12}
        tablet={6}
        desktop={5}
        sx={{
          borderRadius: '4px',
          boxShadow: '0px 10px 15px -3px rgba(0, 0, 0, 0.1), 0px 4px 6px -4px rgba(0, 0, 0, 0.1)',
          pb: 6.5,
          pt: { mobile: 4, tablet: 10 },
          px: 8,
        }}
      >
        <Typography
          fontWeight='bold'
          sx={{
            mb: 4,
          }}
          variant='h4'
        >
          {t('auth.login.header')}
        </Typography>
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
            <Button
              sx={{
                mt: 2,
              }}
              startIcon={
                <img
                  src='/google_icon.svg'
                  alt='Google'
                />
              }
              onClick={() => handleExternalProviderLogin(AuthProvider.GOOGLE)}
              variant='outlined'
              type='button'
            >
              {t('auth.form.googleLabel')}
            </Button>
          </Stack>
        </FormProvider>
      </Grid>
      <Grid
        item
        tablet={5}
        mobile={12}
        sx={{
          pt: { mobile: 6, tablet: 10 },
          px: 8,
        }}
      >
        <Typography
          fontWeight={600}
          variant='h4'
        >
          {t('auth.login.question')}
        </Typography>
        <Button
          sx={{
            mt: 4,
            textTransform: 'initial',
          }}
          component={Link}
          to='/register'
          fullWidth
          variant='outlined'
        >
          {t('auth.register.header')}
        </Button>
      </Grid>
    </Grid>
  );
};
