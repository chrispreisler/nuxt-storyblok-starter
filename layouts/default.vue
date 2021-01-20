<template>
  <main>
    <v-header
      v-if="$store.state.globals.header.length"
      :blok="$store.state.globals.header[0]"
    />
    <Nuxt />
    <lazy-v-footer
      v-if="$store.state.globals.footer.length"
      :blok="$store.state.globals.footer[0]"
    />
  </main>
</template>

<style>
.disable-links a {
  @apply pointer-events-none;
}

.disable {
  @apply pointer-events-none;
}
</style>
