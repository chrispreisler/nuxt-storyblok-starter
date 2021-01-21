<template>
  <div>
    <Page :blok="story.content" />
  </div>
</template>

<script>
export default {
  async asyncData({ app, route, store, query, isDev }) {
    const version = query._storyblok || isDev ? "draft" : "published";
    const path = route.path === "/" ? "home" : route.path;

    console.log("------");
    console.log("Query asyncData _.vue");
    console.log(query);
    console.log("------");

    if (query._storyblok) {
      store.commit("setEditorMode", true);
    }

    await store.dispatch("loadVersion", { version });

    const res = await app.$storyapi.get(`cdn/stories/${path}`, {
      version: store.state.version,
      cv: store.state.cacheVersion,
    });

    const story = res.data.story;

    const resGlobal = await app.$storyapi.get("cdn/stories/global", {
      version: store.state.version,
      cv: store.state.cacheVersion,
    });

    const global = resGlobal.data.story.content;
    store.commit("setGlobals", global);

    return { story };
  },
  data() {
    return { story: { content: {} } };
  },
  mounted() {
    if (this.$store.state.isEditorMode) {
      this.$router.push({ query: { preview: true } });
    }

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
