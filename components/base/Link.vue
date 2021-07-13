<template>
  <component :is="componentName" v-bind="linkAttribute">
    <slot />
  </component>
</template>

<script>
import { computed, defineComponent } from "@nuxtjs/composition-api";
import { useStoryUrl } from "@/composables/useStoryUrl";

export default defineComponent({
  props: {
    blok: {
      type: Object,
      default: () => {},
    },
    type: {
      type: String,
      default: "",
    },
  },
  setup(props) {
    const { getUrl } = useStoryUrl();

    const componentName = computed(() => {
      if (props.type) {
        return props.type;
      }

      switch (props.blok.linktype) {
        case "story":
          return "nuxt-link";
        default:
          return "a";
      }
    });

    const linkAttribute = computed(() => {
      if (props.type) {
        return;
      }

      switch (props.blok.linktype) {
        case "url":
          return { href: props.blok.url };
        case "email":
          return { href: "mailto:" + props.blok.email };
        case "asset":
          return { href: props.blok.url };
        default:
          return { to: getUrl(props.blok.cached_url) };
      }
    });

    return {
      componentName,
      linkAttribute,
    };
  },
});
</script>
