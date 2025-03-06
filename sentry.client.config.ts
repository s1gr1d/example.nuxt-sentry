import * as Sentry from "@sentry/nuxt";
import { usePinia, useRuntimeConfig } from "#imports";

console.log("Client DSN: ", useRuntimeConfig().public.sentry.dsn);

Sentry.init({
  dsn: useRuntimeConfig().public.sentry.dsn,

  debug: true,
  tracesSampleRate: 1,
  integrations: [Sentry.piniaIntegration(usePinia())],

  beforeSendTransaction(transaction) {
    console.log("Transaction (client)", transaction.transaction);
    return transaction;
  },
  beforeSend(event) {
    console.log("Event (client): ", event.transaction);
    return event;
  },
});
