import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

import en from './locales/en.json';
import de from './locales/de.json';
import fr from './locales/fr.json';
import it from './locales/it.json';
import rm from './locales/rm.json';

await i18n.use(initReactI18next).init({
  lng: 'en',
  fallbackLng: 'en',
  resources: {
    en: {
      translations: en
    },
    de: {
      translations: de
    },
    fr: {
      translations: fr
    },
    it: {
      translations: it
    },
    rm: {
      translations: rm
    }
  },
  ns: ["translations"],
  defaultNS: 'translations',
});

export default i18n;