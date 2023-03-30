import { initializeTestEnvironment, RulesTestEnvironment } from '@firebase/rules-unit-testing';
import firebase from 'firebase/compat/';

export let testEnvironment: RulesTestEnvironment;
export let guestUserContext: firebase.firestore.Firestore;
beforeAll(async () => {
  testEnvironment = await initializeTestEnvironment({
    firestore: {
      host: '127.0.0.1',
      port: 8080,
    },
    projectId: 'warzywniax',
  });
  guestUserContext = testEnvironment.unauthenticatedContext().firestore();
  console.info('TEST_ENV is ready:\n', testEnvironment);
  console.info('GUEST_USER is ready:\n', guestUserContext);
});
