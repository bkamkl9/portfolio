import "./assets/main.css";

import App from "./App.vue";
import { createApp } from "vue";
import { createI18n } from "vue-i18n";
import i18nTranslationsPL from "./i18n/pl.json";
import i18nTranslationsEN from "./i18n/en.json";
import { createRouter, createWebHistory } from "vue-router";

const i18nPlugin = createI18n({
    legacy: false,
    locale: "en",
    messages: {
        en: i18nTranslationsEN as any,
        pl: i18nTranslationsPL as any,
    },
});

const defaultLang = i18nPlugin.global.availableLocales[0];

const router = createRouter({
    history: createWebHistory("/portfolio/"),
    routes: [
        { path: "/", redirect: `/${defaultLang}` },
        { path: "/:lang", component: App },
    ],
});

router.beforeEach((to, _, next) => {
    const lang = to.params.lang;
    type Lang = (typeof i18nPlugin.global.availableLocales)[number];

    if (!i18nPlugin.global.availableLocales.includes(lang as Lang)) {
        next(`/${defaultLang}`);
    }

    if (lang) {
        document.documentElement.lang = lang as string;
        i18nPlugin.global.locale.value = lang as Lang;
    }
    next();
});

const appInstance = createApp(App);
appInstance.use(i18nPlugin);
appInstance.use(router);
appInstance.mount("#app");
