<template>
  <main>
    <header v-if="this.$store.state.globals.header.length">
      <nav>
        <nuxt-link
          v-for="(nav, index) in this.$store.state.globals.header[0].navigation"
          :key="index"
          :to="nav.link.cached_url === 'home' ? '/' : nav.link.cached_url"
        >
          {{ nav.title }}
        </nuxt-link>
      </nav>
    </header>
    <Nuxt />
    <footer v-if="$store.state.globals.footer.length">
      <p>{{ $store.state.globals.footer[0].title }}</p>
    </footer>
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
