// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // debug: true,

  modules: ["@sentry/nuxt/module"],

  imports: {
    autoImport: false,
  },

  runtimeConfig: {
    public: {
      sentry: {
        dsn: "https://e88b32b2db8229c9b7b693337bd60a12@o447951.ingest.us.sentry.io/4507486945738752",
      },
    },
  },

  sentry: {
    debug: true,
    // experimental_basicServerTracing: true,
    sourceMapsUploadOptions: {
      org: "sentry-sdks",
      project: "javascript-nuxt",
      authToken: process.env.SENTRY_AUTH_TOKEN,
      enabled: true,
    },
  },

  /*
    vite: {
    plugins: [
      {
        name: "foobar",
        transform: (code, chunk) => {
          console.log("id", chunk);
          if (chunk.includes("entry.js")) {
            console.log("code:", code);
          }
          return code;
        },
      },
    ],
  },
   */
});
