import { DocumentReference, getDoc } from 'firebase/firestore';
import { Collection } from '../src/services/FirebaseService/FireBaseService.types';
import { createManyOffers } from '../src/services/FirebaseService/OffersCollection/OffersCollectionService';
import { DocumentDoesntExistsError } from '../src/errors/DocumentDoesntExistsError';
import { generateRandomInteger } from '../src/common/utils/generateRandomInteger';
import { getAllShopProducts } from '../src/services/FirebaseService/ShopsCollection/ProductsService';
import { getRandomDescription } from './generateRandomData.utils';
import { isNullOrUndefined } from '../src/common/utils/isNullOrUndefined';
import { OfferRecord } from '../src/services/FirebaseService/OffersCollection/OffersCollection.types';
import { ShopRecord } from '../src/services/FirebaseService/ShopsCollection/ShopsCollection.types';

async function getRandomOffers(
  shopReference: DocumentReference<ShopRecord>
): Promise<DocumentReference<OfferRecord>[]> {
  const [products, shopDataSnapshot] = await Promise.all([
    getAllShopProducts(shopReference),
    getDoc(shopReference),
  ]);
  const shopData = shopDataSnapshot.data();
  if (isNullOrUndefined(shopData)) {
    throw new DocumentDoesntExistsError(shopReference.id, Collection.SHOPS);
  }
  const offers: OfferRecord[] = [];
  const offerDescriptionsQuery: Array<Promise<string>> = [];
  for (let i = 0; i < products.size; i++) {
    offerDescriptionsQuery.push(getRandomDescription(2));
  }
  const offersDescriptions = await Promise.all(offerDescriptionsQuery);
  let offerIdx = 0;
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
      description: offersDescriptions[offerIdx],
      productsInOffer: generateRandomInteger(1, 100),
      unitPrice: generateRandomInteger(1, 20),
    });
    offerIdx += 1;
  });
  return createManyOffers(offers);
}

export async function generateOffersMock(
  createdShops: DocumentReference<ShopRecord>[]
): Promise<void> {
  const offersToCreate: Array<Promise<DocumentReference<OfferRecord>[]>> = [];
  for (const createdShop of createdShops) {
    offersToCreate.push(getRandomOffers(createdShop));
  }
  await Promise.all(offersToCreate);
}
