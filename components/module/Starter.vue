<template>
  <section v-editable="blok">
    <LayoutContainer>
      <BaseHeadline>
        {{ blok.title }}
      </BaseHeadline>
    </LayoutContainer>
    <BaseImage :blok="blok.image" />
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
