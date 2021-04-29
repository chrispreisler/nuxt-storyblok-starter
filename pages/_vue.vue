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
export default defineComponent({
  setup() {
    const { route, app, store } = useContext();
    const router = useRouter();
    const path = route.value.path === "/" ? "/home" : route.value.path;
    const story = ref({ content: {} });

    useFetch(async () => {
      const res = await app.$storyapi.get(`cdn/stories${path}`, {
        version: store.state.version,
        cv: store.state.cacheVersion,
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
