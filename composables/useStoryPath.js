import { computed, useContext } from "@nuxtjs/composition-api";
import { useLocale } from "@/composables/useLocale";

export const useStoryPath = () => {
  const { route } = useContext();
  const { locales, locale } = useLocale();

  const queryPath = computed(() => {
    const path = route.value.path;

    if (path === "/") {
      return "cdn/stories/" + locales.value[0] + "/home";
    }

    if (path === "/en") {
      return "cdn/stories/" + locales.value[1] + "/home";
    }

    const hasLocale = !!locales.value.find((locale) =>
      path.includes("/" + locale + "/")
    );

    if (!hasLocale) {
      return "cdn/stories/" + locale.value + path;
    }

    return "cdn/stories" + path;
  });

  const queryPathGlobal = computed(() => {
    return "cdn/stories/" + locale.value + "/global";
  });

  return {
    queryPath,
    queryPathGlobal
  };
};
