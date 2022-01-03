import { defineNuxtConfig } from "@nuxt/bridge";
import path from "path";
import fs from "fs";

export default defineNuxtConfig({
  target: "static",
  publicRuntimeConfig: {
    storyblokVersion: "draft",
    storyblokToken: process.env.STORYBLOK_TOKEN,
  },
  loading: false,
  components: true,
  bridge: {
    meta: true,
  },
  build: {
    extend(config) {
      config.module.rules.push({
        test: /\.mjs$/,
        include: /node_modules/,
        type: "javascript/auto",
      });
    },
  },
  buildModules: ["@vueuse/nuxt", "@nuxtjs/tailwindcss"],
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
    htmlAttrs: {
      lang: "en",
    },
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
  tailwindcss: {
    viewer: false,
  },
  server:
    process.env.NODE_ENV !== "production"
      ? {
          host: "localhost",
          https: {
            key: fs.readFileSync(path.resolve(__dirname, "localhost-key.pem")),
            cert: fs.readFileSync(path.resolve(__dirname, "localhost.pem")),
          },
        }
      : {},
});
