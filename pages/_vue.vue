<template>
  <div v-if="!$fetchState.pending">
    <component
      :is="getModuleName('Layout', story.content.component)"
      :blok="story.content"
    />
  </div>
</template>

<script>
import { defineComponent, useMeta, useContext } from "@nuxtjs/composition-api";
import { useModuleName } from "@/composables/useModuleName";
import { useStory } from "@/composables/useStory";
export default defineComponent({
  setup() {
    const { route } = useContext();
    const { getModuleName } = useModuleName();
    const path =
      route.value.path === "/"
        ? "cdn/stories/home"
        : "cdn/stories/" + route.value.path;
    const { story, seo } = useStory(path);

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
