import { addDoc, collection, doc, DocumentReference, writeBatch } from 'firebase/firestore';
import { Collection, SubCollection } from '../FireBaseService.types';
import { FirestoreError, SetOptions } from '@firebase/firestore';
import { firebaseDB } from '../firebase.config';
import { isNullOrUndefined } from '../../../common/utils/isNullOrUndefined';
import { LocationRecord } from './LocationCollection.types';
import { ShopRecord } from './ShopsCollection.types';

export async function createLocation(
  parentShop: DocumentReference<ShopRecord>,
  locationData: LocationRecord
): Promise<DocumentReference<LocationRecord>> {
  const productsReference = collection<SubCollection.LOCATIONS>(parentShop, SubCollection.PRODUCTS);
  return await addDoc<LocationRecord>(productsReference, locationData);
}

export async function createManyLocations(
  parentShop: DocumentReference<ShopRecord>,
  locations: LocationRecord[],
  options?: SetOptions
): Promise<DocumentReference<LocationRecord>[]> {
  const batch = writeBatch(firebaseDB);
  const createdDocs: DocumentReference<LocationRecord>[] = [];
  for (const locationData of locations) {
    const newLocation = doc<Collection.SHOPS, SubCollection.LOCATIONS>(
      parentShop,
      SubCollection.LOCATIONS,
      crypto.randomUUID()
    );
    if (isNullOrUndefined(options)) {
      batch.set(newLocation, locationData);
    } else {
      batch.set(newLocation, locationData, options);
    }
    createdDocs.push(newLocation);
  }
  await batch.commit().catch((error: FirestoreError) => {
    console.error(error);
  });
  return createdDocs;
}
