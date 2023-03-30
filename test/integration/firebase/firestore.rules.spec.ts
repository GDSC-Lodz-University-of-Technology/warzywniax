import { assertSucceeds } from '@firebase/rules-unit-testing';
import { Collection } from '../../../src/services/FirebaseService/FireBaseService.types';
import { guestUserContext } from '../integration-setup';

describe('Offers collection tests', () => {
  it('should allow to read offers for any user', async () => {
    const testQuery = guestUserContext.collection(Collection.OFFERS);

    expect(await assertSucceeds(testQuery.get()));
  });
});
// describe('Shops collection tests', () => {});
// describe('Shops/products sub-collection tests', () => {});
// describe('Shops/locations sub-collection tests', () => {});
