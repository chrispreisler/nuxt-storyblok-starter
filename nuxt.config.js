export default {
  target: "static",
  loading: false,
  components: true,
  plugins: ["plugins/preview.client.js"],
  buildModules: ["@nuxtjs/eslint-module", "@nuxtjs/tailwindcss"],
  modules: [
    [
      "storyblok-nuxt",
      {
        accessToken: "MXZNTlJYSnVfIwr28XMcxQtt",
        cacheProvider: "memory"
      }
    ]
  ],
  generate: {
    routes: [{ route: "/" }]
  },
  head: {
    title: "nuxt-storyblok-starter 2",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  }
};
