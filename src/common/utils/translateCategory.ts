import { i18n } from 'locales/i18n';
import { ProductCategory } from '../../services/FirebaseService/ShopsCollection/ProductCollection.types';
import { ShouldNeverHappenError } from '../../errors/ShouldNeverHappenError';

export function translateCategory(category: ProductCategory): string {
  let translation: string;
  switch (category) {
    case ProductCategory.FRUITS:
      translation = i18n.t('products.fruits');
      break;
    case ProductCategory.HERBS:
      translation = i18n.t('products.herbs');
      break;
    case ProductCategory.JAM:
      translation = i18n.t('products.jam');
      break;
    case ProductCategory.JUICES:
      translation = i18n.t('products.juices');
      break;
    case ProductCategory.NUTS:
      translation = i18n.t('products.nuts');
      break;
    case ProductCategory.VEGETABLES:
      translation = i18n.t('products.vegetables');
      break;
    case ProductCategory.OTHER:
      translation = i18n.t('products.other');
      break;
    default:
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      throw new ShouldNeverHappenError(`There is no such [${category}] for products`);
  }
  return translation;
}
