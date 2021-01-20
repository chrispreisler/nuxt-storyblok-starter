<template>
  <div v-editable="blok">
    <component
      :is="page.component"
      v-for="page in blok.body"
      :key="page._uid"
      :blok="page"
    />
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
