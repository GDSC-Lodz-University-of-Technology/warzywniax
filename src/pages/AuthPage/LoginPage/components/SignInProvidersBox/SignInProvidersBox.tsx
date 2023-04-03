import { AuthProvider } from 'services/FirebaseService/AuthService/AuthService.types';
import { Box } from '@mui/material';
import { Button } from 'components/Button/Button';
import { SignInProvidersBoxProps } from './SignInProvidersBox.types';
import { useTranslation } from 'react-i18next';

const providers = [
  {
    authProvider: AuthProvider.GOOGLE,
    icon: '/google_icon.svg',
    label: 'auth.loginProviders.googleLabel',
    name: 'google',
  },
  {
    authProvider: AuthProvider.TWITTER,
    icon: '/twitter_icon.svg',
    label: 'auth.loginProviders.twitterLabel',
    name: 'twitter',
  },
  {
    authProvider: AuthProvider.FACEBOOK,
    icon: '/facebook_icon.svg',
    label: 'auth.loginProviders.facebookLabel',
    name: 'facebook',
  },
];

export const SignInProvidersBox = ({ handleProviderButtonClick }: SignInProvidersBoxProps) => {
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        '& >button': (theme) => ({
          [theme.breakpoints.down('tablet')]: {
            width: '100%',
          },
        }),

        display: 'flex',
        flexWrap: 'wrap',
        gap: '10px',
        justifyContent: 'space-evenly',
      }}
    >
      {providers.map((provider) => (
        <Button
          key={provider.name}
          startIcon={
            <img
              src={provider.icon}
              alt={provider.name}
            />
          }
          onClick={() => handleProviderButtonClick(provider.authProvider)}
          variant='outlined'
          type='button'
        >
          {t(provider.label)}
        </Button>
      ))}
    </Box>
  );
};
