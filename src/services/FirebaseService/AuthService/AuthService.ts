import { AuthProvider, OAuthProvider, UserProfile } from './AuthService.types';
import {
  createUserWithEmailAndPassword,
  FacebookAuthProvider,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  TwitterAuthProvider,
} from 'firebase/auth';
import { AuthError } from 'errors/AuthError';
import { firebaseAuth } from '../firebase.config';
import { ShouldNeverHappenError } from '../../../errors/ShouldNeverHappenError';
import { UserCredential } from '@firebase/auth';

export async function createUser(
  payload: Pick<UserProfile, 'email' | 'password'>
): Promise<UserCredential> {
  return await createUserWithEmailAndPassword(firebaseAuth, payload.email, payload.password).catch(
    (error: Error) => {
      throw new AuthError(`Couldn't create user account.`, error);
    }
  );
}

export async function signInUser(
  payload: Pick<UserProfile, 'email' | 'password'>
): Promise<UserCredential> {
  return await signInWithEmailAndPassword(firebaseAuth, payload.email, payload.password).catch(
    (error: Error) => {
      throw new AuthError(`Couldn't sign in user.`, error);
    }
  );
}

export async function singInUserWithProvider(providerType: AuthProvider): Promise<UserCredential> {
  let authProvider: OAuthProvider;
  switch (providerType) {
    case AuthProvider.GOOGLE:
      authProvider = new GoogleAuthProvider();
      break;
    case AuthProvider.TWITTER:
      authProvider = new TwitterAuthProvider();
      break;
    case AuthProvider.FACEBOOK:
      authProvider = new FacebookAuthProvider();
      break;
    default:
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      throw new ShouldNeverHappenError(`[${providerType}] OAuth provider is not supported`);
  }
  return await signInWithPopup(firebaseAuth, authProvider).catch((error: Error) => {
    throw new AuthError(`Couldn't sign in user with [${providerType}]`, error);
  });
}

export async function signOutUser() {
  return await signOut(firebaseAuth).catch((error: Error) => {
    throw new AuthError(`Couldn't sign out user.`, error);
  });
}
