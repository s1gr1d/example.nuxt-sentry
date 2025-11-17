import * as Sentry from "@sentry/nuxt";
import { usePinia, useRuntimeConfig } from "#imports";

console.log("Client DSN: ", useRuntimeConfig().public.sentry.dsn);

Sentry.init({
  dsn: useRuntimeConfig().public.sentry.dsn,

  debug: true,
  tracesSampleRate: 1,
  integrations: [Sentry.piniaIntegration(usePinia())],
  integrations: [
    Sentry.browserTracingIntegration(),
    Sentry.browserProfilingIntegration(),
  ],
  profileSessionSampleRate: 1,
  profileLifecycle: "manual",

  beforeSendTransaction(event) {
    console.log("Event Transaction (contexts): ", event.contexts);
    return event;
  },
  beforeSendSpan(span) {
    console.log("Span (client): ", span);

    return span;
  },

  beforeSend(event) {
    //console.log("Event (client): ", event.transaction);
    return event;
  },
});
