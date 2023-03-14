import { LocationRecord } from './LocationCollection.types';
import { z } from 'zod';

export const ShopOwner = z.object({
  avatarUrl: z.string(),
  firstName: z.string(),
  lastName: z.string(),
});
export type ShopOwner = z.infer<typeof ShopOwner>;

export const ShopRecord = z.object({
  description: z.string(),
  mainLocation: LocationRecord.required(),
  name: z.string(),
  owner: ShopOwner,
});
export type ShopRecord = z.infer<typeof ShopRecord>;
