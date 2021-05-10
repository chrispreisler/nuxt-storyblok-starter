<template>
  <div v-if="!$fetchState.pending">
    <LayoutPage :blok="story.content" />
  </div>
</template>

<script>
import {
  ref,
  useContext,
  useFetch,
  useRouter,
  onMounted,
  defineComponent,
} from "@nuxtjs/composition-api";
import { useLocale } from "@/composables/useLocale";

export default defineComponent({
  setup() {
    const { route, app, store } = useContext();
    const router = useRouter();
    const story = ref({ content: {} });
    const { setLocaleUrlName, getQueryPath } = useLocale();
    const path = getQueryPath(route.value.path);

    useFetch(async () => {
      const res = await app.$storyapi.get(`cdn/stories${path}`, {
        version: store.state.version,
        cv: store.state.cacheVersion,
      });
      setLocaleUrlName({
        current: res.data.story.slug,
        alternate: res.data.story.alternates[0].slug,
      });
      story.value = res.data.story;
    }, route.value.path);

    onMounted(() => {
      app.$storybridge(() => {
        const storyblokInstance = new window.StoryblokBridge();

        storyblokInstance.on(["input", "published", "change"], (event) => {
          if (event.action === "input") {
            if (event.story.id === story.value.id) {
              story.value.content = event.story.content;
            }
          } else {
            router.go({
              path: router.currentRoute,
              force: true,
            });
          }
        });
      });
    });

    return { story };
  },
});
</script>
