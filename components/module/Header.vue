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
    </LayoutContainer>
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
