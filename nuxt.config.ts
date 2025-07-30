// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  debug: true,

  // future: { compatibilityVersion: 4 },
  compatibilityDate: "2024-04-03",

  imports: { autoImport: false },

  runtimeConfig: {
    public: {
      sentry: {
        dsn: process.env.SENTRY_DSN,
      },
    },
  },

  srcDir: "src",

  routeRules: {
    "/rendering-modes/client-side-only-page": { ssr: false },
    "/rendering-modes/pre-rendered-page": { prerender: true },
    // cached until API response changes
    "/rendering-modes/swr-cached-page": { swr: true }, // sometimes different
    // cached for 1 hour (3600 seconds)
    "/rendering-modes/swr-1h-cached-page": { swr: 3600 }, // always different
    "/rendering-modes/isr-cached-page": { isr: true },
    "/rendering-modes/isr-1h-cached-page": { isr: 3600 },
  },

  devtools: { enabled: true },
  sourcemap: { client: "hidden" },

  modules: [
    "@nuxtjs/i18n",
    "@sentry/nuxt/module",
    "@pinia/nuxt",
    "@nuxt/content",
  ],

  sentry: {
    debug: true,
    // autoInjectServerSentry: "top-level-import",
    sourceMapsUploadOptions: {
      org: "sentry-sdks",
      project: "sigrid-nuxt",
      authToken: process.env.SENTRY_AUTH_TOKEN,
      enabled: true,
    },
  },
});
