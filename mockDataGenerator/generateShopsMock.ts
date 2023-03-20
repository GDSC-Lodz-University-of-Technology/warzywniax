import {
  getRandomDescription,
  getRandomFirstName,
  getRandomGeoPoint,
  getRandomLastName,
  getRandomPhotoUrl,
  getRandomProduct,
  getRandomShopName,
} from './generateRandomData.utils';
import {
  ShopOwner,
  ShopRecord,
} from '../src/services/FirebaseService/ShopsCollection/ShopsCollection.types';
import { createManyLocations } from '../src/services/FirebaseService/ShopsCollection/LocationService';
import { createManyProducts } from '../src/services/FirebaseService/ShopsCollection/ProductsService';
import { createManyShop } from '../src/services/FirebaseService/ShopsCollection/ShopsService';
import { DocumentReference } from 'firebase/firestore';
import { generateRandomInteger } from '../src/common/utils/generateRandomInteger';
import { LocationRecord } from '../src/services/FirebaseService/ShopsCollection/LocationCollection.types';
import { ProductRecord } from '../src/services/FirebaseService/ShopsCollection/ProductCollection.types';

async function generateRandomOwner(): Promise<ShopOwner> {
  return {
    avatarUrl: await getRandomPhotoUrl(640, 640),
    firstName: getRandomFirstName(),
    lastName: getRandomLastName(),
  };
}

export async function generateShopsMock(count = 50): Promise<DocumentReference<ShopRecord>[]> {
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
