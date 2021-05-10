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
  watch,
} from "@nuxtjs/composition-api";
import { useLocale } from "@/composables/useLocale";

export default defineComponent({
  setup() {
    const { app, store } = useContext();
    const globals = ref({ header: [], footer: [] });
    const { locale } = useLocale();

    useMeta({
      link: [{ rel: "preconnect", href: "//img2.storyblok.com" }],
    });

    const { fetch } = useFetch(async () => {
      const res = await app.$storyapi.get(
        `cdn/stories/${locale.value}/global`,
        {
          version: store.state.version,
          cv: store.state.cacheVersion,
        }
      );
      globals.value = res.data.story.content;
    });

    watch(locale, () => {
      fetch();
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
