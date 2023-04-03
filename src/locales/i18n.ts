import * as authEN from './en/auth.json';
import * as authPL from './pl/auth.json';
import * as dashboardEN from './en/dashboard.json';
import * as dashboardPL from './pl/dashboard.json';
import * as formsEN from './en/forms.json';
import * as formsPL from './pl/forms.json';
import * as navbarEN from './en/navbar.json';
import * as navbarPL from './pl/navbar.json';
import * as offersEN from './en/offers.json';
import * as offersPL from './pl/offers.json';
import * as productsEN from './en/products-categories.json';
import * as productsPL from './pl/products-categories.json';
import * as shopsEN from './en/shops.json';
import * as shopsPL from './pl/shops.json';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    components: {
      auth: authEN,
      dashboard: dashboardEN,
      forms: formsEN,
      navbar: navbarEN,
      offers: offersEN,
      products: productsEN,
      shops: shopsEN,
    },
  },
  pl: {
    components: {
      auth: authPL,
      dashboard: dashboardPL,
      forms: formsPL,
      navbar: navbarPL,
      offers: offersPL,
      products: productsPL,
      shops: shopsPL,
    },
  },
} as const;

void i18n.use(initReactI18next).init({
  defaultNS: 'components',
  fallbackLng: ['en'],
  react: {
    bindI18n: 'languageChanged',
  },
  resources: resources,
});

export { i18n };
