export default {
  target: process.env.NUXT_TARGET || "static",
  ssr: !process.env.NUXT_SSR,
  publicRuntimeConfig: {
    version: process.env.STORYBLOK_VERSION || "published",
  },
  loading: false,
  components: true,
  buildModules: ["@nuxtjs/eslint-module", "@nuxtjs/tailwindcss", "nuxt-vite"],
  modules: [
    [
      "storyblok-nuxt",
      {
        accessToken: process.env.STORYBLOK_TOKEN,
        cacheProvider: "memory",
      },
    ],
  ],
  generate: {
    routes: [{ route: "/" }],
    fallback: true,
  },
  head: {
    title: "nuxt-storyblok-starter",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },
  vue: {
    config: {
      devtools: true,
      silent: false,
      productionTip: false,
    },
  },
};
