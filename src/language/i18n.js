import {I18n} from 'i18n-js';
import fr from './fr.json';
import en from './en.json';
import ar from './ar.json';

const i18n = new I18n();

i18n.fallbacks = true;

i18n.translations = {
  fr,
  en,
  ar,
};

export default i18n;
