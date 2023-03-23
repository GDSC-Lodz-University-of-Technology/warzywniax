import { getRandomGeoPoint, getRandomProduct } from './generateRandomData.utils';
import {
  ShopOwner,
  ShopRecord,
} from '../src/services/FirebaseService/ShopsCollection/ShopsCollection.types';
import { createManyLocations } from '../src/services/FirebaseService/ShopsCollection/LocationService';
import { createManyProducts } from '../src/services/FirebaseService/ShopsCollection/ProductsService';
import { createManyShop } from '../src/services/FirebaseService/ShopsCollection/ShopsService';
import { DocumentReference } from 'firebase/firestore';
import { faker } from '@faker-js/faker';
import { generateRandomInteger } from '../src/common/utils/generateRandomInteger';
import { LocationRecord } from '../src/services/FirebaseService/ShopsCollection/LocationCollection.types';
import { ProductRecord } from '../src/services/FirebaseService/ShopsCollection/ProductCollection.types';

function generateRandomOwner(): ShopOwner {
  const sex = generateRandomInteger(0, 1) === 1 ? 'male' : 'female';
  return {
    avatarUrl: faker.image.people(640, 640, true),
    firstName: faker.name.firstName(sex),
    lastName: faker.name.firstName(sex),
  };
}

export async function generateShopsMock(count = 50): Promise<DocumentReference<ShopRecord>[]> {
  const shops: ShopRecord[] = [];
  for (let i = 0; i < count; i++) {
    shops.push({
      description: faker.lorem.paragraph(3),
      mainLocation: {
        description: faker.lorem.sentences(3),
        geoPoint: getRandomGeoPoint(),
        photoUrl: faker.image.city(1920, 1080, true),
      },
      name: faker.company.name(),
      owner: generateRandomOwner(),
    });
  }
  return await createManyShop(shops);
}

async function generateProductsMock(
  shopId: DocumentReference<ShopRecord>,
  count: number
): Promise<DocumentReference<ProductRecord>[]> {
  const products: ProductRecord[] = [];
  for (let i = 0; i < count; i++) {
    const [name, category] = getRandomProduct();
    products.push({
      categories: [category],
      description: faker.lorem.paragraphs(2),
      name: name,
      photoUrl: faker.image.food(1920, 1080, true),
      quantityUnit: 'piece',
    });
  }
  return await createManyProducts(shopId, products);
}

async function generateLocationMock(
  shopId: DocumentReference<ShopRecord>,
  count: number
): Promise<DocumentReference<LocationRecord>[]> {
  const locations: LocationRecord[] = [];
  for (let i = 0; i < count; i++) {
    locations.push({
      description: faker.lorem.sentences(2),
      geoPoint: getRandomGeoPoint(),
      photoUrl: faker.image.city(1920, 1080, true),
    });
  }
  return await createManyLocations(shopId, locations);
}

export async function addShopsSubCollections(
  createdShops: DocumentReference<ShopRecord>[],
  [minProducts, maxProducts] = [1, 10],
  [minLocations, maxLocations] = [0, 10]
): Promise<void> {
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
