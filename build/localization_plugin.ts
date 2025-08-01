import { Plugin } from "vite";
import { existsSync, readFileSync, unlinkSync, writeFileSync } from "node:fs";
import path from "node:path";

const AVAILABLE_LANGUAGES = ["en", "pl"];
const root = path.resolve();

export default function localizationPlugin(): Plugin {
    return {
        name: "localization-plugin",
        apply: "build",
        config() {
            const indexHtmlPath = path.join(root, "index.html");
            const defaultHtmlContent = readFileSync(indexHtmlPath, "utf-8");
            const inputs: Record<string, string> = { index: indexHtmlPath };

            AVAILABLE_LANGUAGES.forEach((lang) => {
                const langHtmlPath = path.join(root, `${lang}.html`);
                const langHtmlContent = defaultHtmlContent.replace(
                    'lang="en"',
                    `lang="${lang}"`,
                );
                writeFileSync(langHtmlPath, langHtmlContent, "utf-8");
                inputs[lang] = langHtmlPath;
            });

            return {
                build: {
                    rollupOptions: {
                        input: inputs,
                    },
                },
            };
        },
        buildEnd() {
            AVAILABLE_LANGUAGES.forEach((lang) => {
                const langHtmlPath = path.join(root, `${lang}.html`);
                if (existsSync(langHtmlPath)) {
                    unlinkSync(langHtmlPath);
                }
            });
        },
    };
}
