import { ref, readonly, useContext } from "@nuxtjs/composition-api";

const isEditorMode = ref(false);

export const useEditorMode = () => {
  const { query } = useContext();

  isEditorMode.value = !!query?.value._storyblok;

  return {
    isEditorMode: readonly(isEditorMode)
  };
};
