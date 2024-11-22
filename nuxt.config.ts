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

  sourcemap: { client: true },

  modules: ["@sentry/nuxt/module", "@pinia/nuxt", "@nuxt/content"],

  sentry: {
    debug: true,
    sourceMapsUploadOptions: {
      org: "sentry-sdks",
      project: "sigrid-nuxt",
      authToken: process.env.SENTRY_AUTH_TOKEN,
      enabled: true,
    },
  },
});
