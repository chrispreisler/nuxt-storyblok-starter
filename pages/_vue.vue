<template>
  <div>
    <Page :blok="story.content" />
  </div>
</template>

<script>
export default {
  async asyncData({ app, route, store, query, isDev }) {
    const path = route.path === "/" ? "home" : route.path;

    const res = await app.$storyapi.get(`cdn/stories/${path}`, {
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
    console.log("Editor Mode: " + this.$store.state.isEditorMode);

    if (this.$store.state.isEditorMode) {
      this.$storybridge.load(this.onChange, this.errorCb);
    } else {
      this.onChange();
    }
  },
  methods: {
    onChange() {
      console.log("Erfolgreich geladen");
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
    errorCb(error) {
      console.log(error);
    },
  },
};
</script>
