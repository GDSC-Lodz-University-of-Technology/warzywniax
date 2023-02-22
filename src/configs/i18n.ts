import * as appEN from '../locales/en/app.json';
import * as appPL from '../locales/pl/app.json';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    components: {
      app: appEN,
    },
  },
  pl: {
    components: {
      app: appPL,
    },
  },
};

void i18n.use(initReactI18next).init({
  defaultNS: 'components',
  fallbackLng: ['en'],
  react: {
    bindI18n: 'languageChanged',
  },
  resources: resources,
});

export { i18n };
