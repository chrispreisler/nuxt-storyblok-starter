<template>
  <section v-editable="blok">
    <LayoutContainer>
      <BaseHeadline>
        {{ blok.title }}
      </BaseHeadline>
      <BaseText :blok="blok.copy" />
    </LayoutContainer>
    <div class="w-full h-screen overflow-hidden">
      <BaseImage :blok="blok.image" is-cover is-priority />
    </div>
  </section>
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
