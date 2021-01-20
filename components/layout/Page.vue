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
import Starter from "@/components/bloks/Starter.vue";
export default {
  components: { Starter },
  props: {
    blok: {
      type: Object,
      default: () => {},
    },
  },
};
</script>
