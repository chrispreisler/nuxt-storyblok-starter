<template>
  <div v-editable="blok">
    <component
      :is="getComponentName(page.component)"
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
  setup() {
    function getComponentName(name) {
      return "Module" + name.substring(0, 1).toUpperCase() + name.substring(1);
    }

    return {
      getComponentName,
    };
  },
};
</script>
