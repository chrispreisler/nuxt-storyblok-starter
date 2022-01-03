<template>
  <main v-if="!loading && data" :class="{ 'disable-links': isEditorMode }">
    <ModuleHeader :blok="data.story.content.header[0]" keep-alive />
    <div class="min-h-screen">
      <Nuxt />
    </div>
    <LazyModuleFooter :blok="data.story.content.footer[0]" keep-alive />
  </main>
</template>

<script setup>
const { isEditorMode } = useEditorMode();
const { data, loading } = useStoryApi("/global");

useMeta({
  link: [{ rel: "preconnect", href: "//img2.storyblok.com" }],
});
</script>

<style>
.disable-links a {
  @apply pointer-events-none;
}
</style>
