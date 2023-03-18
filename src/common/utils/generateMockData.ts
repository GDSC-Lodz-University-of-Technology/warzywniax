import { DocumentReference, GeoPoint } from 'firebase/firestore';
import {
  ShopOwner,
  ShopRecord,
} from '../../services/FirebaseService/ShopsCollection/ShopsCollection.types';
import { createManyShop } from '../../services/FirebaseService/ShopsCollection/ShopsService';
import { generateRandomInteger } from './generateRandomInteger';
import { generateRandomNumber } from './generateRandomNumber';

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

async function generateRandomOwner(): Promise<ShopOwner> {
  return {
    avatarUrl: await getRandomPhotoUrl(640, 640),
    firstName: getRandomFirstName(),
    lastName: getRandomLastName(),
  };
}

export async function generateMockShops(count = 50): Promise<DocumentReference<ShopRecord>[]> {
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
  return await createManyShop(shops);
}
