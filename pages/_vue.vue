<template>
  <div v-if="story.content.component">
    {{ versionData }}
    <Page :blok="story.content" />
    {{ story }}
  </div>
</template>

<script>
export default {
  async asyncData({ app, route, store, isDev, query, $preview }) {
    const path = route.path === "/" ? "/home" : route.path;
    // const version = query._storyblok || isDev ? "draft" : "published";

    const versionData = {
      query,
      isDev,
      version: $preview,
      // version: $preview.version,
    };

    const res = await app.$storyapi.get(`cdn/stories${path}`, {
      version: "draft",
      cv: store.state.cacheVersion,
    });
    const story = res.data.story;

    return { story, versionData };
  },
  data() {
    return { story: { content: {} } };
  },
  mounted() {
    this.$storybridge.on(["input", "published", "change"], (event) => {
      if (event.action === "input") {
        if (event.story.id === this.story.id) {
          this.story.content = event.story.content;
        }
      } else {
        window.location.reload();
      }
    });
  },
};
</script>
