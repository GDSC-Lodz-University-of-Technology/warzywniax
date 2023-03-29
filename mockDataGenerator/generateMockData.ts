import { addShopsSubCollections, generateShopsMock } from './generateShopsMock';
import { generateUsersMock, REGULAR_USER } from './generateUsersMock';
import { generateOffersMock } from './generateOffersMock';

export async function generateMockData(
  count = 10,
  [minShops, maxShops] = [1, 10],
  [minProducts, maxProducts] = [0, 10],
  [minLocations, maxLocations] = [0, 10]
): Promise<void> {
  console.info('Start generating mock data ...');
  console.info('[🔵USERS🔵] Start generating SHOPS mocks ...');
  const users = await generateUsersMock(count);
  console.info('[🟢USERS🟢] USERS mocks have been generated ...');
  console.info('[🔵SHOPS🔵] Start generating SHOPS mocks ...');
  const createdShops = await generateShopsMock(
    users.filter((user) => user.email !== REGULAR_USER.email),
    [minShops, maxShops]
  );
  console.info('[🟢SHOPS🟢] SHOPS mocks have been generated');
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
  console.info('[🟢OFFERS🟢] OFFERS mocks have been generated');
}
