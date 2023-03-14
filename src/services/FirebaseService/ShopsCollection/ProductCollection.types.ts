import { z } from 'zod';

export enum ProductCategory {
  FRUITS,
  VEGETABLES,
  JUICES,
  JAM,
  NUTS,
  HERBS,
  OTHER,
}
export const ProductCategoryEnum = z.nativeEnum(ProductCategory);
export type ProductCategoryEnum = z.infer<typeof ProductCategoryEnum>;

export const ProductRecord = z.object({
  categories: z.array(ProductCategoryEnum),
  description: z.string().optional(),
  name: z.string(),
  photoUrl: z.string(),
  quantityUnit: z.string(),
});
export type ProductRecord = z.infer<typeof ProductRecord>;
