<template>
  <header>
    <nav>
      <nuxt-link
        v-for="(nav, index) in blok.navigation"
        :key="index"
        :to="nav.link.cached_url === 'home' ? '/' : nav.link.cached_url"
      >
        {{ nav.title }}
      </nuxt-link>
    </nav>
  </header>
</template>

<script>
export default {
  props: {
    blok: {
      type: Object,
      default: () => {},
    },
  },
};
</script>
