import {TFunction} from "i18next";

export const translateIf_i18n = (text: string, t: TFunction<"translation", undefined>) => {
  return text.startsWith("i18n:") ? t(text.substring(5)) : text;
}

export const getLanguageFromStorage = () => {
  const storedLanguage = localStorage.getItem('i18nextLng');
  if (storedLanguage) {
    return storedLanguage;
  }
  return 'en';
}

export const setLanguageToStorage = (language: string) => {
  localStorage.setItem('i18nextLng', language);
}

export const getLanguageNameFromCode = (code: string) => {
  switch (code) {
    case 'en':
      return 'English';
    case 'de':
      return 'Deutsch';
    case 'fr':
      return 'Français';
    case 'it':
      return 'Italiano';
    case 'rm':
      return 'Rumantsch';
    default:
      return code;
  }
}

export const capitalize = (s: string) => {
  return s.charAt(0).toUpperCase() + s.slice(1);
}