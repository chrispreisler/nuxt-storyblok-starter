import { ref } from "@nuxtjs/composition-api";

const alternateSlug = ref("");

export const useAlternateSlug = () => {
  const setAlternateSlug = (newSlug) => {
    alternateSlug.value = newSlug;
  };

  return {
    alternateSlug,
    setAlternateSlug
  };
};
