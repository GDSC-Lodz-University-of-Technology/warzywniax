import { addDoc, collection, doc, DocumentReference, writeBatch } from 'firebase/firestore';
import { FirestoreError, SetOptions } from '@firebase/firestore';
import { ShopRecord, SHOPS_COLLECTION } from './ShopsCollection.types';
import { firebaseDB } from '../firebase.config';
import { isNullOrUndefined } from '../../../common/utils/isNullOrUndefined';

const createCollectionRef = collection(firebaseDB, SHOPS_COLLECTION.name);

export async function createShop(shopData: ShopRecord): Promise<DocumentReference<ShopRecord>> {
  return await addDoc<ShopRecord>(createCollectionRef, shopData);
}

export async function createManyShop(
  shops: ShopRecord[],
  options?: SetOptions
): Promise<DocumentReference<ShopRecord>[]> {
  const batch = writeBatch(firebaseDB);
  const createdDocs: DocumentReference<ShopRecord>[] = [];
  for (const shopData of shops) {
    const newShop = doc(firebaseDB, 'shops', crypto.randomUUID());
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
