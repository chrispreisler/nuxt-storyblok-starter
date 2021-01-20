<template>
  <div>
    <component
      :is="story.content.component"
      :key="story.content._uid"
      :blok="story.content"
    />
  </div>
</template>
<script>
import Page from "@/components/layout/Page.vue";
export default {
  components: { Page },
  async asyncData({ app, route, query, isDev, store }) {
    // const version = query._storyblok || isDev ? "draft" : "published";
    const version = "draft";
    const path = route.path === "/" ? "home" : route.path;

    const res = await app.$storyapi.get(`cdn/stories/${path}`, {
      version,
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
