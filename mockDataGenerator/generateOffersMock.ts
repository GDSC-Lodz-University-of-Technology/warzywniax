import { DocumentReference, getDoc } from 'firebase/firestore';
import { Collection } from '../src/services/FirebaseService/FireBaseService.types';
import { createManyOffers } from '../src/services/FirebaseService/OffersCollection/OffersCollectionService';
import { DocumentDoesntExistsError } from '../src/errors/DocumentDoesntExistsError';
import { faker } from '@faker-js/faker';
import { generateRandomInteger } from '../src/common/utils/generateRandomInteger';
import { getProducts } from '../src/services/FirebaseService/ShopsCollection/ProductsService';
import { isNullOrUndefined } from '../src/common/utils/isNullOrUndefined';
import { OfferRecord } from '../src/services/FirebaseService/OffersCollection/OffersCollection.types';
import { ShopRecord } from '../src/services/FirebaseService/ShopsCollection/ShopsCollection.types';

async function getRandomOffers(
  shopReference: DocumentReference<ShopRecord>
): Promise<DocumentReference<OfferRecord>[]> {
  const [products, shopDataSnapshot] = await Promise.all([
    getProducts(shopReference),
    getDoc(shopReference),
  ]);
  const shopData = shopDataSnapshot.data();
  if (isNullOrUndefined(shopData)) {
    throw new DocumentDoesntExistsError(shopReference.id, Collection.SHOPS);
  }
  const offers: OfferRecord[] = [];
  products.forEach((product) => {
    const productData = product.data();
    offers.push({
      baseProductInfo: {
        categories: productData.categories,
        id: product.ref,
        photoUrl: productData.photoUrl,
        quantityUnit: productData.quantityUnit,
      },
      baseShopInfo: {
        geoPoint: shopData.mainLocation.geoPoint,
        id: shopReference,
        name: shopData.name,
      },
      description: faker.lorem.paragraphs(2),
      productsInOffer: generateRandomInteger(1, 100),
      unitPrice: generateRandomInteger(1, 20),
    });
  });
  return createManyOffers(offers);
}

export async function generateOffersMock(
  createdShops: DocumentReference<ShopRecord>[]
): Promise<void> {
  await Promise.all(createdShops.map(getRandomOffers));
}
