export const useStoryApi = (newPath) => {
  const { $config } = useNuxtApp();
  const { storyblokVersion, storyblokToken } = $config;
  const path = ref(newPath);

  const { data, pending: loading } = useLazyFetch(
    "https://api.storyblok.com/v2/cdn/stories" + path.value,
    {
      params: {
        version: storyblokVersion,
        token: storyblokToken,
      },
    }
  );

  return {
    data,
    loading: readonly(loading),
  };
};
