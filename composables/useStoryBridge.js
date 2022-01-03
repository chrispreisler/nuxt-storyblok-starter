export const useStoryBridge = (cb, options = {}) => {
  if (typeof window === "undefined") {
    return;
  }

  const { $storybridge } = useNuxtApp();
  const router = useRouter();

  $storybridge(() => {
    const storyblokInstance = new window.StoryblokBridge(options);

    storyblokInstance.on(["input", "published", "change"], (event) => {
      if (event.action === "input") {
        cb(event.story);
      } else {
        router.go({
          path: router.currentRoute,
          force: true,
        });
      }
    });
  });
};
