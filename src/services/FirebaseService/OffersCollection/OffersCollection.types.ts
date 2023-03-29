import { ZDocumentReference, ZGeoPoint } from '../../../common/utils/zod.utils';
import { ProductCategoryEnum } from '../ShopsCollection/ProductCollection.types';
import { z } from 'zod';

export const BaseProductInfo = z.object({
  categories: z.array(ProductCategoryEnum),
  id: ZDocumentReference,
  photoUrl: z.string(),
  quantityUnit: z.string(),
});
export type BaseProductInfo = z.infer<typeof BaseProductInfo>;

export const BaseShopInfo = z.object({
  geoPoint: ZGeoPoint,
  name: z.string(),
  shopId: ZDocumentReference,
  shopOwnerId: z.string(),
});
export type BaseShopInfo = z.infer<typeof BaseShopInfo>;

export const OfferRecord = z.object({
  baseProductInfo: BaseProductInfo,
  baseShopInfo: BaseShopInfo,
  description: z.string().optional(),
  productsInOffer: z.number(),
  unitPrice: z.number(),
});
export type OfferRecord = z.infer<typeof OfferRecord>;
