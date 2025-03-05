import * as Sentry from "@sentry/nuxt";
import { usePinia, useRuntimeConfig } from "#imports";

console.log("client dsn: ", useRuntimeConfig().public.sentry.dsn);

Sentry.init({
  dsn: useRuntimeConfig().public.sentry.dsn,

  debug: true,
  tracesSampleRate: 1,
  beforeSendTransaction(transaction) {
    console.log("client transaction", transaction);
    return transaction;
  },
  integrations: [Sentry.piniaIntegration(usePinia())],
  beforeSend(event: any) {
    console.log("Event (server): ", event);
    return event;
  },
});
