<template>
  <component :is="'h' + level" :class="className">
    <slot />
  </component>
</template>

<script>
export default {
  props: {
    level: {
      type: String,
      default: "1",
    },
    size: {
      type: String,
      default: "normal",
    },
  },
  computed: {
    className() {
      switch (this.size) {
        default:
          return "text-h1";
      }
    },
  },
};
</script>
