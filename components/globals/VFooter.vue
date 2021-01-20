<template>
  <footer>
    <p>{{ blok.title }}</p>
  </footer>
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
