<template>
  <div v-editable="blok">
    <component
      :is="getModuleName('Module', page.component)"
      v-for="page in blok.body"
      :key="page._uid"
      :blok="page"
    />
  </div>
</template>

<script>
import { useModuleName } from "@/composables/useModuleName";

export default {
  props: {
    blok: {
      type: Object,
      default: () => {},
    },
  },
  setup() {
    const { getModuleName } = useModuleName();

    return {
      getModuleName,
    };
  },
};
</script>
