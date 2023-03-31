import { Link, useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { BaseLayout } from 'templates/BaseLayout/BaseLayout';
import { Button } from 'components/Button/Button';
import { createUser } from 'services/FirebaseService/AuthService/AuthService';
import { RegisterForm } from './components/RegisterForm';
import { RegisterFormData } from './components/RegisterForm.types';
import { SubmitHandler } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';

export const RegisterPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const { mutate: createUserMutation, isLoading } = useMutation({
    mutationFn: createUser,
    onSuccess: () => navigate('/login'),
  });

  const handleSubmit: SubmitHandler<RegisterFormData> = ({ email, password }) => {
    createUserMutation({ email, password });
  };

  return (
    <BaseLayout
      mainWrapperSx={{
        alignItems: 'flex-start',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        position: 'relative',
        pt: { desktop: 5, mobile: 2 },
        px: { desktop: 23, mobile: 5 },
      }}
      isLoading={isLoading}
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
      <RegisterForm onFormSubmit={handleSubmit} />
    </BaseLayout>
  );
};
