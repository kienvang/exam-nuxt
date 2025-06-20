// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    apiBaseUrl: process.env.NUXT_API_BASE_URL,
  },
  sourcemap: {
    server: false,
    client: false,
  },
  compatibilityDate: "2025-05-15",
  devtools: {
    enabled: false,
  },
  modules: ["@nuxt/eslint", "@nuxt/fonts", "@nuxt/icon"],
});
