<template>
  <h1 v-editable="blok" class="text-h1">
    {{ blok.title }}
  </h1>
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
