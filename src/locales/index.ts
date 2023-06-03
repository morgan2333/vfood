// @ts-ignore
import { createI18n } from 'vue-i18n';
import zh from './lang/zh';
import en from './lang/en';

const messages = {
  en,
  zh,
};

const savedLanguage = window.localStorage.getItem('language');
let language = navigator.language.split('-')[0];
if (!savedLanguage) {
  window.localStorage.setItem('language', language);
}
language = savedLanguage || language;
const i18n = createI18n({
  legacy: false,
  locale: language,
  messages,
});

export default i18n;
