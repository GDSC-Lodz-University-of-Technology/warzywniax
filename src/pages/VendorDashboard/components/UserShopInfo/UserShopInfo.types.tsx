import { QueryDocumentSnapshot } from '@firebase/firestore';
import { ShopRecord } from 'services/FirebaseService/ShopsCollection/ShopsCollection.types';

export type UserShopInfoProps = {
  shop: QueryDocumentSnapshot<ShopRecord>;
};
