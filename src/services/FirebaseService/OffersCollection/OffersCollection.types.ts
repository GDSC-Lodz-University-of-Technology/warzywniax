import { GeoPoint } from 'firebase/firestore';
import { ProductCategory } from '../ShopsCollection/ProductCollection.types';

export interface OfferRecord {
  id: string;
  unitPrice: number;
  baseProductInfo: BaseProductInfo;
  baseShopInfo: BaseShopInfo;
  productsInOffer: number;
  description?: string;
}

interface BaseProductInfo {
  id: string;
  photoUrl: string;
  quantityUnit: string;
  categories: ProductCategory[];
}

interface BaseShopInfo {
  shopId: string;
  name: string;
  locationId: string;
  geoPoint: GeoPoint;
}
