<template>
  <main :class="{ 'disable-links': $store.state.isEditorMode }">
    <ModuleHeader
      v-if="!$fetchState.pending"
      :blok="globals.header[0]"
      keep-alive
    />
    <div class="min-h-screen">
      <Nuxt />
    </div>
    <LazyModuleFooter
      v-if="!$fetchState.pending"
      :blok="globals.footer[0]"
      keep-alive
    />
  </main>
</template>

<script>
import {
  ref,
  useFetch,
  useMeta,
  useContext,
  defineComponent,
} from "@nuxtjs/composition-api";

export default defineComponent({
  setup() {
    const { app, store } = useContext();
    const globals = ref({ header: [], footer: [] });

    useMeta({
      link: [{ rel: "preconnect", href: "//img2.storyblok.com" }],
    });

    useFetch(async () => {
      const res = await app.$storyapi.get("cdn/stories/global", {
        version: store.state.version,
        cv: store.state.cacheVersion,
      });
      globals.value = res.data.story.content;
    });

    return { globals };
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
