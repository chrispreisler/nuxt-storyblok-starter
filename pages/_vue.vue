<template>
  <div v-if="story.content.component">
    <Page :blok="story.content" />
  </div>
</template>

<script>
export default {
  async asyncData({ app, route, store }) {
    const path = route.path === "/" ? "/home" : route.path;
    const res = await app.$storyapi.get(`cdn/stories${path}`, {
      version: store.state.version,
      cv: store.state.cacheVersion,
    });
    const story = res.data.story;

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
