import { ref, useContext, useRouter, readonly } from "@nuxtjs/composition-api";
import { useAlternateSlug } from "@/composables/useAlternateSlug";

const locales = ref(["de", "en"]);
const locale = ref("de");

export const useLocale = () => {
  const { route } = useContext();
  const { alternateSlug } = useAlternateSlug();
  const router = useRouter();

  const setLocale = (newLocale) => {
    locale.value = newLocale;
  };

  const changeLocale = (newLocale) => {
    if (newLocale === locale.value) {
      return;
    }

    const path = route.value.path;
    setLocale(newLocale);

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
        locale.value === locales.value[0]
          ? "/" + alternateSlug.value
          : "/" + locale.value + "/" + alternateSlug.value
    });
  };

  const getGlobalQueryPath = (path) => {
    const folderPath = path.includes("steuerberater") ? "/steuerberater" : "";
    return `cdn/stories/${locale.value}${folderPath}/global`;
  };

  return {
    locale: readonly(locale),
    locales: readonly(locales),
    changeLocale,
    getGlobalQueryPath
  };
};
