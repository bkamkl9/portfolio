import { Plugin } from "vite";
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";

const AVAILABLE_LANGUAGES = ["en", "pl"];

export default function localizationPlugin(): Plugin {
    return {
        name: "localization-plugin",
        apply: "build",
        generateBundle(options) {
            const outDir = options.dir || "dist";

            // Ensure output directory exists
            if (!existsSync(outDir)) {
                mkdirSync(outDir, { recursive: true });
            }

            const defaultHtmlFilePath = path.join(path.resolve(), "index.html");
            const defaultHtmlContent = readFileSync(
                defaultHtmlFilePath,
                "utf-8",
            );

            AVAILABLE_LANGUAGES.forEach((lang) => {
                const langHtmlFilePath = path.join(
                    path.resolve(),
                    `${lang}.html`,
                );
                const newHtmlContent = defaultHtmlContent.replace(
                    'lang="en"',
                    `lang="${lang}"`,
                );
                writeFileSync(
                    path.join(outDir, `${lang}.html`),
                    newHtmlContent,
                    "utf-8",
                );
            });
        },
    };
}
