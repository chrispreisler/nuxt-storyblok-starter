<template>
  <main>
    <v-header
      v-if="globals.header.length"
      :blok="globals.header[0]"
      keep-alive
    />
    <Nuxt />
    <lazy-v-footer
      v-if="globals.footer.length"
      :blok="globals.footer[0]"
      keep-alive
    />
  </main>
</template>

<script>
export default {
  data() {
    return {
      globals: { header: [], footer: [] },
    };
  },
  async fetch() {
    const res = await this.$storyapi.get("cdn/stories/global", {
      version: this.$store.state.version,
      cv: this.$store.state.cacheVersion,
    });

    this.globals = res.data.story.content;
  },
};
</script>

<style>
.disable-links a {
  @apply pointer-events-none;
}

.disable {
  @apply pointer-events-none;
}
</style>
