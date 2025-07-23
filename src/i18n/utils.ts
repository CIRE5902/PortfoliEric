// i18n/utils.ts
import { languages, defaultLang } from './ui';

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in languages) return lang as keyof typeof languages;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof languages) {
  return function t(key: keyof typeof languages[typeof defaultLang]) {
    return languages[lang][key] || languages[defaultLang][key];
  };
}

export function getI18nStaticPaths() {
  return Object.keys(languages).map((lang) => ({
    params: { lang },
  }));
}