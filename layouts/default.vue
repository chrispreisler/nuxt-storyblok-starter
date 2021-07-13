<template>
  <main v-if="!$fetchState.pending" :class="{ 'disable-links': isEditorMode }">
    <ModuleHeader :blok="story.content.header[0]" keep-alive />
    <div class="min-h-screen">
      <Nuxt />
    </div>
    <LazyModuleFooter :blok="story.content.footer[0]" keep-alive />
  </main>
</template>

<script>
import { useMeta, defineComponent, watch } from "@nuxtjs/composition-api";
import { useStoryPath } from "@/composables/useStoryPath";
import { useEditorMode } from "@/composables/useEditorMode";
import { useStory } from "@/composables/useStory";
import { useLocale } from "@/composables/useLocale";

export default defineComponent({
  setup() {
    const { isEditorMode } = useEditorMode();
    const { queryPathGlobal } = useStoryPath();
    const { story, fetchStory } = useStory(queryPathGlobal.value);
    const { locale } = useLocale();

    watch(locale, () => {
      fetchStory(queryPathGlobal.value);
    });

    useMeta({
      link: [{ rel: "preconnect", href: "//img2.storyblok.com" }],
    });

    return { story, isEditorMode };
  },
  head: {},
  fetchKey: "global",
});
</script>

<style>
.disable-links a {
  @apply pointer-events-none;
}
</style>
