// i18n/ui.ts
import es from './es.json';
import en from './en.json';
import ca from './ca.json';

export const languages = {
  es,
  en,
  ca,
};

export const defaultLang = 'en';

export type Lang = keyof typeof languages;
