import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    lng: 'en',
    fallbackLng: 'en',
    // have a common namespace used around the full app
    ns: ['translationsNS'],
    defaultNS: 'translationsNS',
    debug: false,
    resources: {
      en: {
        translationsNS: {
          work: "Working on it!",
          welcome: "Welcome to <br/> my space"
        }
      }
    },
  });

export default i18n;