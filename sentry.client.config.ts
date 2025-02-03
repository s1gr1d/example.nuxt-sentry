import * as Sentry from "@sentry/nuxt";
import { useRuntimeConfig } from "#imports";

Sentry.init({
  dsn: useRuntimeConfig().public.sentry.dsn,

  debug: true,
  tracesSampleRate: 1,
  beforeSendTransaction(transaction) {
    console.log("client transaction", transaction);
    return transaction;
  },
  trackComponents: false,
  // integrations: [Sentry.piniaIntegration(usePinia())],
  beforeSend(event: any) {
    console.log("Event (server): ", event);
    return event;
  }
});
