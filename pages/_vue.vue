<template>
  <div v-if="story.content.component">
    <Page :blok="story.content" />
  </div>
</template>

<script>
export default {
  async asyncData({ app, route, store, isDev, query }) {
    const path = route.path === "/" ? "/home" : route.path;
    const version = query._storyblok || isDev ? "draft" : "published";

    console.log(version);
    const res = await app.$storyapi.get(`cdn/stories${path}`, {
      version,
      cv: store.state.cacheVersion,
    });
    const story = res.data.story;

    console.log(story.content);
    return { story };
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
