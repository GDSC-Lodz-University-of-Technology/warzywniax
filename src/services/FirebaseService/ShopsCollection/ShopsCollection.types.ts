import { LocationRecord } from './LocationCollection.types';

export interface ShopRecord {
  name: string;
  description: string;
  owner: ShopOwner;
  mainLocation: Required<LocationRecord>;
}

interface ShopOwner {
  id: string;
  firstName: string;
  lastName: string;
  avatarUrl: string;
}
