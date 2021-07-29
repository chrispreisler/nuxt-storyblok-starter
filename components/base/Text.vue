<template>
  <!-- eslint-disable vue/no-v-html -->
  <div v-html="richtext" />
  <!--eslint-enable-->
</template>

<script>
import { defineComponent, useContext, computed } from "@nuxtjs/composition-api";

export default defineComponent({
  props: {
    blok: {
      type: Object,
      default: () => {},
    },
  },
  setup(props) {
    const { app } = useContext();
    const richtext = computed(() =>
      app.$storyapi.richTextResolver.render(props.blok || { content: [] })
    );

    return {
      richtext,
    };
  },
});
</script>

