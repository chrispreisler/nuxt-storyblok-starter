import {
  ref,
  useContext,
  useFetch,
  onMounted,
  useRouter,
  readonly
} from "@nuxtjs/composition-api";
import { useAlternateSlug } from "@/composables/useAlternateSlug";

const cv = ref("");

export const useStory = (newPath) => {
  const { route, $config, $storyapi, $storybridge } = useContext();
  const router = useRouter();
  const { setAlternateSlug } = useAlternateSlug();
  const story = ref({});
  const seo = ref();
  const version = $config.version;
  const path = ref(newPath);

  const { fetch } = useFetch(async () => {
    if (!cv.value) {
      const resSpace = await $storyapi.get("cdn/spaces/me");
      cv.value = resSpace.data.space.version;
    }

    const res = await $storyapi.get(path.value, {
      version,
      cv: cv.value,
      resolve_relations: "teaserTeam.team"
    });

    story.value = res.data.story;

    seo.value = story.value.content.seo?.length
      ? story.value.content.seo[0]
      : null;

    if (res.data.story.alternates.length && !path.value.includes("global")) {
      setAlternateSlug(res.data.story.alternates[0].slug);
    }
  }, route.value.path);

  const fetchStory = (newPath) => {
    path.value = newPath;
    fetch();
  };

  onMounted(() => {
    $storybridge(() => {
      const storyblokInstance = new window.StoryblokBridge({
        resolveRelations: ["teaserTeam.team"]
      });

      storyblokInstance.on(["input", "published", "change"], (event) => {
        if (event.action === "input") {
          if (event.story.id === story.value.id) {
            story.value.content = event.story.content;
          }
        } else {
          router.go({
            path: router.currentRoute,
            force: true
          });
        }
      });
    });
  });

  return {
    story: readonly(story),
    seo: readonly(seo),
    fetchStory
  };
};
