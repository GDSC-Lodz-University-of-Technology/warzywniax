export interface ProductRecord {
  name: string;
  photoUrl: string;
  quantityUnit: string;
  categories: ProductCategory[];
  description?: string;
}

export const enum ProductCategory {
  FRUITS,
  VEGETABLES,
  JUICES,
  JAM,
  NUTS,
  HERBS,
  OTHER,
}
