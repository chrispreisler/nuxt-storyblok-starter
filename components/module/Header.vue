<template>
  <header>
    <LayoutContainer class="flex justify-between">
      <nav class="flex gap-x-10">
        <BaseLink
          v-for="(nav, index) in blok.navigation"
          :key="index"
          :blok="nav.link"
        >
          {{ nav.title }}
        </BaseLink>
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
import { useStoryUrl } from "@/composables/useStoryUrl";

export default {
  props: {
    blok: {
      type: Object,
      default: () => {},
    },
  },
  setup() {
    const { getUrl } = useStoryUrl();
    const { changeLocale, locale } = useLocale();
    return {
      getUrl,
      changeLocale,
      locale,
    };
  },
};
</script>
