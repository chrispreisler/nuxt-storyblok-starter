<template>
  <div v-if="!$fetchState.pending">
    <component
      :is="getModuleName('Layout', story.content.component)"
      :blok="story.content"
    />
  </div>
</template>

<script>
import { defineComponent, useMeta } from "@nuxtjs/composition-api";
import { useModuleName } from "@/composables/useModuleName";
import { useStory } from "@/composables/useStory";
import { useStoryPath } from "@/composables/useStoryPath";

export default defineComponent({
  setup() {
    const { getModuleName } = useModuleName();
    const { queryPath } = useStoryPath();
    const { story, seo } = useStory(queryPath);

    useMeta(() => ({
      title: seo.value ? seo.value.title : "",
      meta: [
        {
          hid: "description",
          name: "description",
          content: seo.value?.copy,
        },
        {
          hid: "og:title",
          name: "og:title",
          content: seo.value?.title,
        },
        {
          hid: "og:type",
          name: "og:type",
          content: "website",
        },
        {
          hid: "og:description",
          name: "og:description",
          content: seo.value?.copy,
        },
        {
          hid: "og:image",
          name: "og:image",
          content: seo.value?.image?.filename,
        },
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: seo.value?.title,
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content: seo.value?.copy,
        },
        {
          hid: "twitter:image",
          name: "twitter:image",
          content: seo.value?.image?.filename,
        },
      ],
    }));

    return { story, getModuleName };
  },
  head: {},
});
</script>
