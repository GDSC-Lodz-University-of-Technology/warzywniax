import { AuthProvider } from 'services/FirebaseService/AuthService/AuthService.types';

export type SignInProvidersBoxProps = {
  handleProviderButtonClick: (provider: AuthProvider) => void;
};
