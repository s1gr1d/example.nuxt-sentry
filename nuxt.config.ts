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
        dsn: process.env.SENTRY_DSN,
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
