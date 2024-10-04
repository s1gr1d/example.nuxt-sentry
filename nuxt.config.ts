// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  debug: true,

  future: { compatibilityVersion: 4 },
  compatibilityDate: "2024-04-03",

  imports: { autoImport: false },

  runtimeConfig: {
    public: {
      sentry: {
        dsn: process.env.SENTRY_DSN,
      },
    },
  },

  modules: ["@sentry/nuxt/module"],

  sentry: {
    debug: true,
    experimental_basicServerTracing: true,
    sourceMapsUploadOptions: {
      org: "sentry-sdks",
      project: "javascript-nuxt",
      authToken: process.env.SENTRY_AUTH_TOKEN,
      enabled: true,
    },
  },
});
