import * as Sentry from "@sentry/nuxt";
import { useRuntimeConfig } from "#imports";

console.log("SENTRY INIT");

Sentry.init({
  dsn: useRuntimeConfig().public.sentry.dsn,
  debug: true,
  tracesSampleRate: 1,
  beforeSendTransaction(transaction) {
    console.log("client transaction", transaction);
    return transaction;
  },
  trackComponents: false,
});
