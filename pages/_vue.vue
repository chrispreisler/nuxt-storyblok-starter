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
  data() {
    return { story: { content: {} } };
  },
  mounted() {
    this.$storybridge.on(["input", "published", "change"], (event) => {
      if (event.action == "input") {
        if (event.story.id === this.story.id) {
          this.story.content = event.story.content;
        }
      } else {
        window.location.reload();
      }
    });
  },
  async asyncData({ app, route, query, isDev, cacheVersion }) {
    //const version = query._storyblok || isDev ? "draft" : "published";
    const version = "draft";
    const path = route.path == "/" ? "home" : route.path;

    const res = await app.$storyapi.get(`cdn/stories/${path}`, {
      version,
      cv: cacheVersion,
    });

    const story = res.data.story;
    return { story };
  },
};
</script>