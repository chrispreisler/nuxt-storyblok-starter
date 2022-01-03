const isEditorMode = ref(false);

export const useEditorMode = () => {
  const route = useRoute();

  isEditorMode.value = !!route.query?._storyblok;

  return {
    isEditorMode: readonly(isEditorMode),
  };
};
