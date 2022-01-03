<template>
  <div v-html="richtext" />
</template>

<script setup>
const props = defineProps({
  blok: {
    type: Object,
    default: () => {},
  },
});

const { $storyapi } = useNuxtApp();
const richtext = computed(() =>
  $storyapi.richTextResolver.render(props.blok || { content: [] })
);
</script>
