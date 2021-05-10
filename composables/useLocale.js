import {
  useStore,
  computed,
  useRouter,
  useContext
} from "@nuxtjs/composition-api";

export const useLocale = () => {
  const store = useStore();
  const router = useRouter();
  const { route } = useContext();
  const locale = computed(() => store.state.locale);
  const localeUrlName = computed(() => store.state.localeUrlName);
  const locales = ["de", "en"];

  if (route.value.path.includes("/en")) {
    store.commit("updateLocale", "en");
  }

  const setLocaleUrlName = (names) => {
    store.commit("setLocaleUrlName", {
      ...names
    });
  };

  const changeLocale = (newLocale) => {
    if (newLocale === locale.value) {
      return;
    }

    const path = route.value.path;
    store.commit("updateLocale", newLocale);

    if (path === "/") {
      router.push({ path: "/en" });
      return;
    }

    if (path === "/en") {
      router.push({ path: "/" });
      return;
    }

    router.push({
      path:
        locale.value === "de"
          ? "/" + localeUrlName.value.alternate
          : "/" + locale.value + "/" + localeUrlName.value.alternate
    });
  };

  const getQueryPath = (path) => {
    if (path === "/") {
      return "/de/home";
    }

    if (path === "/en") {
      return "/en/home";
    }

    const hasLocale = !!locales.find((locale) =>
      path.includes("/" + locale + "/")
    );

    if (!hasLocale) {
      return "/" + locale.value + path;
    }

    return path;
  };

  const getUrl = (path) => {
    if (path === "de/home") {
      return "/";
    }

    if (path === "en/home") {
      return "/en";
    }

    return path.substr(0, 2) === "de" ? "/" + path.substr(3) : "/" + path;
  };

  return {
    locale,
    localeUrlName,
    changeLocale,
    getUrl,
    setLocaleUrlName,
    getQueryPath
  };
};
