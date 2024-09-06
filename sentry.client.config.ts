import * as Sentry from "@sentry/nuxt";

console.log("SENTRY INIT");

Sentry.init({
  dsn: "https://e88b32b2db8229c9b7b693337bd60a12@o447951.ingest.us.sentry.io/4507486945738752",
  debug: true,
  tracesSampleRate: 1,
  beforeSendTransaction(transaction) {
    console.log("client transaction", transaction);
    return transaction;
  },
  release: "my-project-name@2.3.12",
});

