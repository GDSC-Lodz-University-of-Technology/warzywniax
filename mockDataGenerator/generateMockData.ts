import { addShopsSubCollections, generateShopsMock } from './generateShopsMock';
import { generateOffersMock } from './generateOffersMock';

export async function generateMockData(
  count = 50,
  [minProducts, maxProducts] = [1, 10],
  [minLocations, maxLocations] = [0, 10]
): Promise<void> {
  console.info('Start generating mock data ...');
  console.info('[🔵SHOPS🔵] Start generating SHOPS mocks ...');
  const createdShops = await generateShopsMock(count);
  console.info('[🟢SHOPS🟢] SHOPS mocks has been generated');
  console.info(
    '[🔵SHOPS:SUB-COLLECTIONS🔵] Start generating PRODUCTS and LOCATIONS sub-collections ...'
  );
  await addShopsSubCollections(
    createdShops,
    [minProducts, maxProducts],
    [minLocations, maxLocations]
  );
  console.info('[🟢SHOPS:SUB-COLLECTIONS🟢]  PRODUCTS and LOCATIONS have been generated');
  console.info('[🔵OFFERS🔵] Start generating OFFERS mocks ...');
  await generateOffersMock(createdShops);
  console.info('[🟢OFFERS🟢] OFFERS mocks has been generated');
}
