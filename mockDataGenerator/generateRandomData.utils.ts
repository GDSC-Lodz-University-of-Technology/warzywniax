import { generateRandomInteger } from '../src/common/utils/generateRandomInteger';
import { generateRandomNumber } from '../src/common/utils/generateRandomNumber';
import { GeoPoint } from 'firebase/firestore';
import { getLastArrayIdx } from '../src/common/utils/getLastArrayIdx';
import { ProductCategory } from '../src/services/FirebaseService/ShopsCollection/ProductCollection.types';

const PRODUCTS: Array<[string, ProductCategory]> = [
  ['cucumber', ProductCategory.VEGETABLES],
  ['onion', ProductCategory.VEGETABLES],
  ['apple', ProductCategory.FRUITS],
  ['cherry', ProductCategory.FRUITS],
  ['basil', ProductCategory.HERBS],
  ['mint', ProductCategory.HERBS],
  ['apple juice', ProductCategory.JUICES],
  ['hazelnuts', ProductCategory.NUTS],
  ['plump jam', ProductCategory.JAM],
  ['śliwowica', ProductCategory.OTHER],
];

export function getRandomGeoPoint(): GeoPoint {
  const latitude = generateRandomNumber(-90, 90);
  const longitude = generateRandomNumber(-180, 180);

  return new GeoPoint(latitude, longitude);
}

export function getRandomProduct(): [string, ProductCategory] {
  return PRODUCTS[generateRandomInteger(0, getLastArrayIdx(PRODUCTS) ?? 0)];
}
