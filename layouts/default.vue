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
import { useMeta, defineComponent } from "@nuxtjs/composition-api";
import { useEditorMode } from "@/composables/useEditorMode";
import { useStory } from "@/composables/useStory";
export default defineComponent({
  setup() {
    const { isEditorMode } = useEditorMode();
    const { story } = useStory("cdn/stories/global");

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
