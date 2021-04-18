<template>
  <section v-editable="blok">
    <LayoutContainer>
      <BaseHeadline>
        {{ blok.title }}
      </BaseHeadline>
    </LayoutContainer>
    <BaseImage :blok="blok.image" is-priority />
    <div v-if="blok.images.length">
      <BaseImage
        v-for="(image, index) in blok.images"
        :key="index"
        :blok="image"
      />
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
