import {
  addDoc,
  collection,
  doc,
  DocumentReference,
  getDocs,
  query,
  writeBatch,
} from 'firebase/firestore';
import { Collection, SubCollection } from '../FireBaseService.types';
import { FirestoreError, QuerySnapshot, SetOptions } from '@firebase/firestore';
import { firebaseDB } from '../firebase.config';
import { isNullOrUndefined } from '../../../common/utils/isNullOrUndefined';
import { ProductRecord } from './ProductCollection.types';
import { ShopRecord } from './ShopsCollection.types';

export async function createProduct(
  parentShop: DocumentReference<ShopRecord>,
  productData: ProductRecord
): Promise<DocumentReference<ProductRecord>> {
  const productsReference = collection<SubCollection.PRODUCTS>(parentShop, SubCollection.PRODUCTS);
  return await addDoc<ProductRecord>(productsReference, productData);
}

export async function createManyProducts(
  parentShop: DocumentReference<ShopRecord>,
  products: ProductRecord[],
  options?: SetOptions
): Promise<DocumentReference<ProductRecord>[]> {
  const batch = writeBatch(firebaseDB);
  const createdDocs: DocumentReference<ProductRecord>[] = [];
  for (const productData of products) {
    const newProduct = doc<Collection.SHOPS, SubCollection.PRODUCTS>(
      parentShop,
      SubCollection.PRODUCTS,
      crypto.randomUUID()
    );
    if (isNullOrUndefined(options)) {
      batch.set(newProduct, productData);
    } else {
      batch.set(newProduct, productData, options);
    }
    createdDocs.push(newProduct);
  }
  await batch.commit().catch((error: FirestoreError) => {
    console.error(error);
  });
  return createdDocs;
}

export async function getAllShopProducts(
  shop: DocumentReference<ShopRecord>
): Promise<QuerySnapshot<ProductRecord>> {
  const productsRef = collection<SubCollection.PRODUCTS>(shop, SubCollection.PRODUCTS);
  return await getDocs(query(productsRef));
}
