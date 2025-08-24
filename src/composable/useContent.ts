import { useI18n } from "vue-i18n";

import type projectsContent from "@/content/projects_content.json";
import { computed } from "vue";
type ContentType = "projects" | "experience";

export default async function useContent(type: ContentType) {
    const { locale } = useI18n();
    const localeComputed = computed(() => locale.value);
    let value: any;

    switch (type) {
        case "projects":
            value = await import(`@/content/${type}_content.json`);
            return computed(() =>
                value[localeComputed.value as keyof typeof value]
            );
        case "experience":
            value = await import(`@/content/experience_content.json`);
            return computed(() =>
                value[localeComputed.value as keyof typeof value]
            );
    }
}
