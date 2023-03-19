import { DocumentReference, GeoPoint } from 'firebase/firestore';
import {
  ProductCategory,
  ProductRecord,
} from '../../services/FirebaseService/ShopsCollection/ProductCollection.types';
import {
  ShopOwner,
  ShopRecord,
} from '../../services/FirebaseService/ShopsCollection/ShopsCollection.types';
import { createManyLocations } from '../../services/FirebaseService/ShopsCollection/LocationService';
import { createManyProducts } from '../../services/FirebaseService/ShopsCollection/ProductsService';
import { createManyShop } from '../../services/FirebaseService/ShopsCollection/ShopsService';
import { generateRandomInteger } from './generateRandomInteger';
import { generateRandomNumber } from './generateRandomNumber';
import { LocationRecord } from '../../services/FirebaseService/ShopsCollection/LocationCollection.types';

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

function getRandomFirstName(): string {
  return FIRST_NAMES[generateRandomInteger(0, FIRST_NAMES.length - 1)];
}

function getRandomLastName(): string {
  return LAST_NAMES[generateRandomInteger(0, LAST_NAMES.length - 1)];
}

function getRandomShopName(): string {
  return `${SHOP_NAMES_PREFIX[
    generateRandomInteger(0, SHOP_NAMES_PREFIX.length - 1)
  ].toUpperCase()} ${SHOP_NAMES_POSTFIX[
    generateRandomInteger(0, SHOP_NAMES_POSTFIX.length - 1)
  ].toLowerCase()}`;
}

function getRandomGeoPoint(): GeoPoint {
  const latitude = generateRandomNumber(-90, 90);
  const longitude = generateRandomNumber(-180, 180);

  return new GeoPoint(latitude, longitude);
}

async function getRandomPhotoUrl(width = 1920, height = 1080): Promise<string> {
  const picsumResponse = await fetch(`https://picsum.photos/${width}/${height}`);

  return picsumResponse.url;
}

async function getRandomDescription(paragraphs = 1): Promise<string> {
  const dinosResponse = await fetch(
    `https://dinoipsum.com/api/?format=text&paragraphs=${paragraphs}`
  );

  return await dinosResponse.text();
}

function getRandomProduct(): [string, ProductCategory] {
  return PRODUCTS[generateRandomInteger(0, PRODUCTS.length)];
}

async function generateRandomOwner(): Promise<ShopOwner> {
  return {
    avatarUrl: await getRandomPhotoUrl(640, 640),
    firstName: getRandomFirstName(),
    lastName: getRandomLastName(),
  };
}

async function generateProductsMock(
  shopId: DocumentReference<ShopRecord>,
  count: number
): Promise<DocumentReference<ProductRecord>[]> {
  const products: ProductRecord[] = [];
  for (let i = 0; i < count; i++) {
    const [name, category] = getRandomProduct();
    const [description, photoUrl] = await Promise.all([
      getRandomDescription(2),
      getRandomPhotoUrl(),
    ]);
    products.push({
      categories: [category],
      description: description,
      name: name,
      photoUrl: photoUrl,
      quantityUnit: 'piece',
    });
  }
  return createManyProducts(shopId, products);
}

async function generateLocationMock(
  shopId: DocumentReference<ShopRecord>,
  count: number
): Promise<DocumentReference<LocationRecord>[]> {
  const locations: LocationRecord[] = [];
  for (let i = 0; i < count; i++) {
    const [description, photoUrl] = await Promise.all([
      getRandomDescription(1),
      getRandomPhotoUrl(),
    ]);
    locations.push({
      description: description,
      geoPoint: getRandomGeoPoint(),
      photoUrl: photoUrl,
    });
  }
  return createManyLocations(shopId, locations);
}

export async function generateMockShops(
  count = 50,
  [minProducts, maxProducts] = [1, 10],
  [minLocations, maxLocations] = [0, 10]
): Promise<void> {
  const shops: ShopRecord[] = [];
  for (let i = 0; i < count; i++) {
    const [shopDescription, locationDescription, shopPhoto, shopOwner] = await Promise.all([
      getRandomDescription(3),
      getRandomDescription(),
      getRandomPhotoUrl(),
      generateRandomOwner(),
    ]);
    shops.push({
      description: shopDescription,
      mainLocation: {
        description: locationDescription,
        geoPoint: getRandomGeoPoint(),
        photoUrl: shopPhoto,
      },
      name: getRandomShopName(),
      owner: shopOwner,
    });
  }
  const createdShops = await createManyShop(shops);
  const productsToAdd: Array<Promise<DocumentReference<ProductRecord>[]>> = [];
  const locationsToAdd: Array<Promise<DocumentReference<LocationRecord>[]>> = [];
  for (const createdShop of createdShops) {
    productsToAdd.push(
      generateProductsMock(createdShop, generateRandomInteger(minProducts, maxProducts))
    );
    locationsToAdd.push(
      generateLocationMock(createdShop, generateRandomInteger(minLocations, maxLocations))
    );
  }
  await Promise.all([...productsToAdd, ...locationsToAdd]);
}
