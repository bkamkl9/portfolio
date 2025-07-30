import "./assets/main.css";

import App from "./App.vue";
import { createApp } from "vue";
import { createI18n } from "vue-i18n";
import i18nTranslationsPL from "./i18n/pl.json";
import i18nTranslationsEN from "./i18n/en.json";

const i18nPlugin = createI18n({
    legacy: false,
    locale: "en",
    messages: {
        en: i18nTranslationsEN as any,
        pl: i18nTranslationsPL as any,
    },
});

const appInstance = createApp(App);
appInstance.use(i18nPlugin);
appInstance.mount("#app");
