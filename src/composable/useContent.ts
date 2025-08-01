import { useI18n } from "vue-i18n";

import type projectsContent from "@/content/projects_content.json";
import { computed } from "vue";
type ContentType = "projects";

export default async function useContent(type: ContentType) {
    const { locale } = useI18n();
    const localeComputed = computed(() => locale.value);

    switch (type) {
        case "projects":
            const value = await import(`@/content/${type}_content.json`);
            return computed(() =>
                value[localeComputed.value as keyof typeof value]
            );
    }

    // return computed(() => {
    //     return {
    //         projects: projectsContent[
    //             localeComputed.value as keyof typeof projectsContent
    //         ],
    //     };
    // });
}
