import { createUser } from '../src/services/FirebaseService/AuthService/AuthService';
import { faker } from '@faker-js/faker';
import { User } from 'firebase/auth';
import { UserCredential } from '@firebase/auth';
import { UserProfile } from '../src/services/FirebaseService/AuthService/AuthService.types';

export const VENDOR_USER: Pick<UserProfile, 'email' | 'password'> = {
  email: 'vendor@test.com',
  password: 'admin1234',
};

export const REGULAR_USER: Pick<UserProfile, 'email' | 'password'> = {
  email: 'regular@test.com',
  password: 'admin1234',
};

export async function generateUsersMock(usersCount: number): Promise<User[]> {
  const pendingUsers: Array<Promise<UserCredential>> = [
    createUser(VENDOR_USER),
    createUser(REGULAR_USER),
  ];
  for (let i = 0; i < usersCount - 2; i++) {
    pendingUsers.push(
      createUser({ email: faker.internet.email(), password: faker.internet.password(6) })
    );
  }
  return (await Promise.all(pendingUsers)).map((userCredential) => userCredential.user);
}
