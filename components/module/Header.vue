<template>
  <header>
    <LayoutContainer class="flex justify-between">
      <nav class="flex gap-x-10">
        <nuxt-link
          v-for="(nav, index) in blok.navigation"
          :key="index"
          :to="getUrl(nav.link.cached_url)"
        >
          {{ nav.title }} – {{ getUrl(nav.link.cached_url) }}
        </nuxt-link>
      </nav>
      <div class="flex gap-x-4">
        <p>Sprache: {{ locale }}</p>
        <button @click="changeLocale('de')">
          <span>Deutsch</span>
        </button>
        <button @click="changeLocale('en')">
          <span>Englisch</span>
        </button>
      </div>
    </LayoutContainer>
  </header>
</template>

<script>
import { useLocale } from "@/composables/useLocale";

export default {
  props: {
    blok: {
      type: Object,
      default: () => {},
    },
  },
  setup() {
    const { getUrl, changeLocale, locale } = useLocale();
    return {
      getUrl,
      changeLocale,
      locale,
    };
  },
};
</script>
