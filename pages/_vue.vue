<template>
  <div v-if="!loading && data">
    <component
      :is="'layout-' + data.story.content.component"
      :blok="data.story.content"
    />
  </div>
</template>

<script setup>
const route = useRoute();
const path = route.path === "/" ? "/home" : route.path;
const { data, loading } = useStoryApi(path);

onMounted(() => {
  useStoryBridge((newStory) => (data.value.story = newStory));
});
</script>
