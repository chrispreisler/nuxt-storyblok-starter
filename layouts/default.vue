<template>
  <main :class="{ 'disable-links': $store.state.isEditorMode }">
    <ModuleHeader
      v-if="globals.header.length"
      :blok="globals.header[0]"
      keep-alive
    />
    <div class="min-h-screen">
      <Nuxt />
    </div>
    <LazyModuleFooter
      v-if="globals.footer.length"
      :blok="globals.footer[0]"
      keep-alive
    />
  </main>
</template>

<script>
import { ref, useFetch, useContext } from "@nuxtjs/composition-api";

export default {
  setup() {
    const { app, store } = useContext();
    const globals = ref({ header: [], footer: [] });

    useFetch(async () => {
      const res = await app.$storyapi.get("cdn/stories/global", {
        version: store.state.version,
        cv: store.state.cacheVersion,
      });
      globals.value = res.data.story.content;
    });

    return { globals };
  },
};
</script>

<style>
.disable-links a {
  @apply pointer-events-none;
}
</style>
