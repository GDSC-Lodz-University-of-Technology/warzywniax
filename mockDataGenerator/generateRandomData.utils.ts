import { generateRandomInteger } from '../src/common/utils/generateRandomInteger';
import { generateRandomNumber } from '../src/common/utils/generateRandomNumber';
import { GeoPoint } from 'firebase/firestore';
import { ProductCategory } from '../src/services/FirebaseService/ShopsCollection/ProductCollection.types';

const SHOP_NAMES_PREFIX = [
  'magical',
  'amazing',
  'fresh',
  'juicy',
  'hot',
  'biggest',
  'premium',
  'cheep',
  'funny',
  'hard',
];
const SHOP_NAMES_POSTFIX = [
  'shop',
  'cucumber',
  'orange',
  'vegetables',
  'fruits',
  'carrot',
  'paprica',
  'apple',
  'cherry',
  'groceries',
];
const FIRST_NAMES = [
  'John',
  'Angelina',
  'Paul',
  'Kris',
  'Amy',
  'Roger',
  'Sheldon',
  'Monika',
  'Richard',
  'Pamela',
];
const LAST_NAMES = [
  'Snow',
  'Hendrics',
  'Lennon',
  'Musk',
  'Gates',
  'Kowalski',
  'Dickinson',
  'Balmer',
  'Buffet',
  'Stark',
];
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

export function getRandomFirstName(): string {
  return FIRST_NAMES[generateRandomInteger(0, FIRST_NAMES.length - 1)];
}

export function getRandomLastName(): string {
  return LAST_NAMES[generateRandomInteger(0, LAST_NAMES.length - 1)];
}

export function getRandomShopName(): string {
  return `${SHOP_NAMES_PREFIX[
    generateRandomInteger(0, SHOP_NAMES_PREFIX.length - 1)
  ].toUpperCase()} ${SHOP_NAMES_POSTFIX[
    generateRandomInteger(0, SHOP_NAMES_POSTFIX.length - 1)
  ].toLowerCase()}`;
}

export function getRandomGeoPoint(): GeoPoint {
  const latitude = generateRandomNumber(-90, 90);
  const longitude = generateRandomNumber(-180, 180);

  return new GeoPoint(latitude, longitude);
}

export async function getRandomPhotoUrl(width = 1920, height = 1080): Promise<string> {
  const picsumResponse = await fetch(`https://picsum.photos/${width}/${height}`);

  return picsumResponse.url;
}

export async function getRandomDescription(paragraphs = 1): Promise<string> {
  const dinosResponse = await fetch(
    `https://dinoipsum.com/api/?format=text&paragraphs=${paragraphs}`
  );

  return await dinosResponse.text();
}

export function getRandomProduct(): [string, ProductCategory] {
  return PRODUCTS[generateRandomInteger(0, PRODUCTS.length)];
}
