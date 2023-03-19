import { CollectionReference, DocumentData, Firestore } from '@firebase/firestore';
import { DocumentReference } from 'firebase/firestore';
import { LocationRecord } from '../src/services/FirebaseService/ShopsCollection/LocationCollection.types';
import { OfferRecord } from '../src/services/FirebaseService/OffersCollection/OffersCollection.types';
import { ProductRecord } from '../src/services/FirebaseService/ShopsCollection/ProductCollection.types';
import { ShopRecord } from '../src/services/FirebaseService/ShopsCollection/ShopsCollection.types';

type AvailableCollections = 'shops' | 'offers';

type AvailableSubCollectionsNames = 'locations' | 'products';

type AvailableSubCollections<T extends AvailableCollections> = T extends 'shops'
  ? 'locations' | 'products'
  : unknown;

type FireStoreCollectionReturnType<
  T extends AvailableCollections,
  V extends AvailableSubCollections<infer T> = unknown
> = V extends string
  ? FireStoreSubCollectionReturnType<V>
  : T extends 'shops'
  ? ShopRecord
  : T extends 'offers'
  ? OfferRecord
  : DocumentData;

type FireStoreSubCollectionReturnType<T extends AvailableSubCollectionsNames = unknown> =
  T extends 'locations' ? LocationRecord : T extends 'products' ? ProductRecord : DocumentData;

declare module 'firebase/firestore' {
  export declare function collection<T extends AvailableCollections>(
    firestore: Firestore,
    path: T,
    ...pathSegments: Partial<[string, AvailableSubCollections<infer T>]>
  ): CollectionReference<FireStoreCollectionReturnType<T, AvailableSubCollections<infer T>>>;
  export declare function collection<T extends AvailableSubCollectionsNames>(
    reference: DocumentReference,
    path: string,
    ...pathSegments: string[]
  ): CollectionReference<FireStoreSubCollectionReturnType<T>>;
  export declare function doc<
    T extends AvailableCollections,
    V extends AvailableSubCollections<infer T> = unknown
  >(
    firestore: Firestore,
    path: T,
    ...pathSegments: string[]
  ): DocumentReference<FireStoreCollectionReturnType<T, V>>;
  export declare function doc<
    T extends AvailableCollections,
    V extends AvailableSubCollections<infer T> = unknown
  >(
    reference: DocumentReference<FireStoreCollectionReturnType<T>>,
    path: V,
    ...pathSegments: string[]
  ): DocumentReference<FireStoreSubCollectionReturnType<V>>;
}
