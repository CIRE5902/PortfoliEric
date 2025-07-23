import { languages, defaultLang, type Lang } from './ui';

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang in languages) return lang as Lang;
  return defaultLang;
}

function getNested(obj: any, path: string) {
  return path.split('.').reduce((o, i) => (o ? o[i] : undefined), obj);
}

export function useTranslations(lang: Lang) {
  return function t(key: string): string {
    const text = getNested(languages[lang], key);
    if (text !== undefined) return text;
    return getNested(languages[defaultLang], key) || key;
  };
}

export function getI18nStaticPaths() {
  return Object.keys(languages).map((lang) => ({
    params: { lang },
  }));
}
