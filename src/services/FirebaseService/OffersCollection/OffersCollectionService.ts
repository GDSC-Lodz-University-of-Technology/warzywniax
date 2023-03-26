import {
  addDoc,
  collection,
  doc,
  DocumentReference,
  getDocs,
  query,
  writeBatch,
} from 'firebase/firestore';
import {
  FirestoreError,
  QueryFieldFilterConstraint,
  QuerySnapshot,
  SetOptions,
} from '@firebase/firestore';
import { Collection } from '../FireBaseService.types';
import { firebaseDB } from '../firebase.config';
import { isNullOrUndefined } from '../../../common/utils/isNullOrUndefined';
import { OfferRecord } from './OffersCollection.types';

export const offersCollectionRef = collection(firebaseDB, Collection.OFFERS);

export async function createOffer(offerData: OfferRecord): Promise<DocumentReference<OfferRecord>> {
  return await addDoc<OfferRecord>(offersCollectionRef, offerData);
}

export async function createManyOffers(
  offers: OfferRecord[],
  options?: SetOptions
): Promise<DocumentReference<OfferRecord>[]> {
  const batch = writeBatch(firebaseDB);
  const createdDocs: DocumentReference<OfferRecord>[] = [];
  for (const offerData of offers) {
    const newShop = doc(firebaseDB, Collection.OFFERS, crypto.randomUUID());
    if (isNullOrUndefined(options)) {
      batch.set(newShop, offerData);
    } else {
      batch.set(newShop, offerData, options);
    }
    createdDocs.push(newShop);
  }
  await batch.commit().catch((error: FirestoreError) => {
    console.error(error);
  });
  return createdDocs;
}

export async function getOffers(
  ...queries: QueryFieldFilterConstraint[]
): Promise<QuerySnapshot<OfferRecord>> {
  const shopsQuery = query<OfferRecord>(offersCollectionRef, ...queries);
  return await getDocs(shopsQuery);
}
