<template>
  <div>
    <h1 v-editable="blok" class="text-h1">
      {{ blok.title }}
    </h1>
  </div>
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
