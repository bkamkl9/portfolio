import { useI18n } from "vue-i18n";

import { computed } from "vue";
type ContentType = "projects" | "experience";
import projects_content from "@/content/projects_content.ts";
import experience_content from "@/content/experience_content.ts";

export default async function useContent(type: ContentType) {
    const { locale } = useI18n();
    const localeComputed = computed(() => locale.value);
    let value: any;

    switch (type) {
        case "projects":
            value = projects_content;
            return computed(() =>
                value[localeComputed.value as keyof typeof value]
            );
        case "experience":
            value = experience_content;
            return computed(() =>
                value[localeComputed.value as keyof typeof value]
            );
    }
}
