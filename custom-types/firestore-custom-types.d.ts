import { Collection, SubCollection } from '../src/services/FirebaseService/FireBaseService.types';
import {
  CollectionReference,
  DocumentData,
  Firestore,
  QueryFieldFilterConstraint,
  WhereFilterOp,
} from '@firebase/firestore';
import { DocumentReference } from 'firebase/firestore';
import { LocationRecord } from '../src/services/FirebaseService/ShopsCollection/LocationCollection.types';
import { ObjectFieldPaths } from '../src/common/types';
import { OfferRecord } from '../src/services/FirebaseService/OffersCollection/OffersCollection.types';
import { ProductRecord } from '../src/services/FirebaseService/ShopsCollection/ProductCollection.types';
import { ShopRecord } from '../src/services/FirebaseService/ShopsCollection/ShopsCollection.types';

type FirestoreRecords = ShopRecord | ProductRecord | LocationRecord | OfferRecord;

type WhereReturnType<T extends FirestoreRecords, V extends string> = V extends keyof T
  ? T[V]
  : unknown;

type AvailableSubCollections<T extends Collection> = T extends Collection.SHOPS
  ? SubCollection.LOCATIONS | SubCollection.PRODUCTS
  : unknown;

type FireStoreCollectionReturnType<
  T extends Collection,
  V extends AvailableSubCollections<infer T> = unknown
> = V extends string
  ? FireStoreSubCollectionReturnType<V>
  : T extends Collection.SHOPS
  ? ShopRecord
  : T extends Collection.OFFERS
  ? OfferRecord
  : DocumentData;

type FireStoreSubCollectionReturnType<T extends SubCollection = unknown> =
  T extends SubCollection.LOCATIONS
    ? LocationRecord
    : T extends SubCollection.PRODUCTS
    ? ProductRecord
    : DocumentData;

declare module 'firebase/firestore' {
  export declare function collection<T extends Collection>(
    firestore: Firestore,
    path: T,
    ...pathSegments: Partial<[string, AvailableSubCollections<infer T>]>
  ): CollectionReference<FireStoreCollectionReturnType<T, AvailableSubCollections<infer T>>>;
  export declare function collection<T extends SubCollection>(
    reference: DocumentReference,
    path: string,
    ...pathSegments: string[]
  ): CollectionReference<FireStoreSubCollectionReturnType<T>>;
  export declare function doc<
    T extends Collection,
    V extends AvailableSubCollections<infer T> = unknown
  >(
    firestore: Firestore,
    path: T,
    ...pathSegments: string[]
  ): DocumentReference<FireStoreCollectionReturnType<T, V>>;
  export declare function doc<
    T extends Collection,
    V extends AvailableSubCollections<infer T> = unknown
  >(
    reference: DocumentReference<FireStoreCollectionReturnType<T>>,
    path: V,
    ...pathSegments: string[]
  ): DocumentReference<FireStoreSubCollectionReturnType<V>>;
  // TODO(GH-27): this should validate `value` based on provided fieldPath
  export declare function where<T extends FirestoreRecords>(
    fieldPath: ObjectFieldPaths<T>,
    opStr: WhereFilterOp,
    value: WhereReturnType<T, typeof fieldPath>
  ): QueryFieldFilterConstraint;
}
