<template>
  <div v-if="story.content.component">
    <layout-page :blok="story.content" />
  </div>
</template>

<script>
import { ref, useContext, useFetch, onMounted } from "@nuxtjs/composition-api";
export default {
  setup() {
    const { route, app, store, router } = useContext();
    const path = route.value.path === "/" ? "/home" : route.value.path;
    const story = ref({ content: {} });

    useFetch(async () => {
      const res = await app.$storyapi.get(`cdn/stories${path}`, {
        version: store.state.version,
        cv: store.state.cacheVersion,
      });
      story.value = res.data.story;
    });

    onMounted(() => {
      app.$storybridge.on(["input", "published", "change"], (event) => {
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

    return { story };
  },
};
</script>
