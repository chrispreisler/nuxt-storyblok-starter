import { ref } from "@nuxtjs/composition-api";
import { useLocale } from "@/composables/useLocale";

const alternateSlug = ref("");

export const useStoryUrl = () => {
  const { locales } = useLocale();

  const setAlternateSlug = (newSlug) => {
    alternateSlug.value = newSlug;
  };

  const getUrl = (path) => {
    if (path.includes("/home")) {
      return path === locales.value[0] + "/home" ? "/" : "/" + locales.value[1];
    }

    return path.substr(0, 2) === locales.value[0]
      ? "/" + path.substr(3)
      : "/" + path;
  };

  return {
    alternateSlug,
    setAlternateSlug,
    getUrl
  };
};
