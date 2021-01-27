<template>
  <div v-if="story.content.component">
    <Page :blok="story.content" />
  </div>
</template>

<script>
// import { mapState } from "vuex";

export default {
  async asyncData({ app, route, store, query, isDev }) {
    const path = route.path === "/" ? "home" : route.path;

    console.log("AsyncData");

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
  /* async fetch() {
    const path = this.$route.path === "/" ? "home" : this.$route.path;
    const res = await this.$storyapi.get(`cdn/stories/${path}`, {
      version: this.$store.state.version,
      cv: this.$store.state.cacheVersion,
    });

    this.story = res.data.story;
    console.log("Fetch Loaded");
    console.log(this.$store.state.isEditorMode);
    if (this.isEditorMode) {
      this.onChange();
    }
  }, */
  /* computed: {
    ...mapState(["isEditorMode"]),
  },
  watch: {
    story(value) {
      if (value.content.component) {
        this.onChange();
      }
    },
  }, */
  /* mounted() {
    // console.log("Mounted: " + this.isEditorMode);
    if (this.isEditorMode) {
      this.$nextTick(() => {
        console.log("Mounted EditorMode");
        this.onChange();
      });
    }
  }, */
  methods: {
    onChange() {
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
  },
};
</script>
