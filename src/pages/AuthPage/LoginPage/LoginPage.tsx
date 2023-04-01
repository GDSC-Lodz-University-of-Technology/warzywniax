import { Link, useNavigate } from 'react-router-dom';
import {
  signInUser,
  singInUserWithProvider,
} from 'services/FirebaseService/AuthService/AuthService';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { AuthProvider } from 'services/FirebaseService/AuthService/AuthService.types';
import { BaseLayout } from 'templates/BaseLayout/BaseLayout';
import { Button } from 'components/Button/Button';
import { LoginForm } from './components/LoginForm/LoginForm';
import { LoginFormData } from './components/LoginForm/LoginForm.types';
import { SubmitHandler } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';

export const LoginPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const { mutate: signInUserMutation, isLoading: isSignInLoading } = useMutation({
    mutationFn: signInUser,
    onSuccess: () => navigate('/'),
  });

  const { mutate: signInWithExternalProvider, isLoading: isExternalProviderSignInLoading } =
    useMutation({
      mutationFn: singInUserWithProvider,
      onSuccess: () => navigate('/'),
    });

  const handleSubmit: SubmitHandler<LoginFormData> = ({ email, password }) => {
    signInUserMutation({ email, password });
  };

  return (
    <BaseLayout
      mainWrapperSx={{
        alignItems: 'flex-start',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        position: 'relative',
        px: { desktop: 23, mobile: 2 },
        py: { desktop: 5, mobile: 2 },
      }}
      isLoading={isSignInLoading || isExternalProviderSignInLoading}
    >
      <Button
        sx={{ mt: { md: 5, xs: 0 } }}
        variant='text'
        component={Link}
        to={'/'}
        startIcon={<ArrowBackIcon sx={{ color: 'primary.500' }} />}
      >
        {t('auth.returnButtonLabel')}
      </Button>
      <LoginForm
        handleExternalProviderLogin={(provider: AuthProvider) =>
          signInWithExternalProvider(provider)
        }
        onFormSubmit={handleSubmit}
      />
    </BaseLayout>
  );
};
