import { translations, type Language } from "./translations";

export function getTranslation(lang: Language) {
  return translations[lang];
}

export function useTranslation(lang: Language) {
  const t = getTranslation(lang);

  return {
    t,
    lang,
    otherLang: lang === "es" ? "en" : "es",
  };
}

export const defaultLang: Language = "es";
export const languages = ["es", "en"] as const;
