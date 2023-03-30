import * as emulatorConfig from '../../../firebase/firebase.json';
import {
  firebaseAuth,
  firebaseDB,
  firebaseStorage,
} from '../../services/FirebaseService/firebase.config';
import { connectAuthEmulator } from 'firebase/auth';
import { connectFirestoreEmulator } from 'firebase/firestore';
import { connectStorageEmulator } from 'firebase/storage';

export function connectToFirebaseEmulators(): void {
  connectFirestoreEmulator(firebaseDB, location.hostname, emulatorConfig.emulators.firestore.port);
  connectStorageEmulator(firebaseStorage, location.hostname, emulatorConfig.emulators.storage.port);
  connectAuthEmulator(firebaseAuth, `http://localhost:${emulatorConfig.emulators.auth.port}`, {
    disableWarnings: true,
  });
  console.info('🔥 FIREBASE EMULATORS CONNECTED');
}
