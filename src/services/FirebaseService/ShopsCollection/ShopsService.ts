import { addDoc, collection, doc, DocumentReference, writeBatch } from 'firebase/firestore';
import { FirestoreError, SetOptions } from '@firebase/firestore';
import { Collection } from '../FireBaseService.types';
import { firebaseDB } from '../firebase.config';
import { isNullOrUndefined } from '../../../common/utils/isNullOrUndefined';
import { ShopRecord } from './ShopsCollection.types';

export const shopsCollectionRef = collection(firebaseDB, Collection.SHOPS);

export async function createShop(shopData: ShopRecord): Promise<DocumentReference<ShopRecord>> {
  return await addDoc<ShopRecord>(shopsCollectionRef, shopData);
}

export async function createManyShop(
  shops: ShopRecord[],
  options?: SetOptions
): Promise<DocumentReference<ShopRecord>[]> {
  const batch = writeBatch(firebaseDB);
  const createdDocs: DocumentReference<ShopRecord>[] = [];
  for (const shopData of shops) {
    const newShop = doc(firebaseDB, Collection.SHOPS, crypto.randomUUID());
    if (isNullOrUndefined(options)) {
      batch.set(newShop, shopData);
    } else {
      batch.set(newShop, shopData, options);
    }
    createdDocs.push(newShop);
  }
  await batch.commit().catch((error: FirestoreError) => {
    console.error(error);
  });
  return createdDocs;
}
