import { createI18n, type Locale } from "vue-i18n";
import { LANGUAGE_CONFIGS, LOCAL_STORAGE_KEYS } from "@/configs/constants/app.const";
import vi from "@/configs/languages/vi.json";
import { getLocalStorage } from "./storage.plugin";

const language = getLocalStorage<Locale>(LOCAL_STORAGE_KEYS.language, LANGUAGE_CONFIGS.defaultLanguage);

export const i18n = createI18n({
  legacy: false,
  locale: language,
  fallbackLocale: LANGUAGE_CONFIGS.defaultLanguage,
  messages: { vi },
});
