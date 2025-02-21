import * as Sentry from "@sentry/nuxt";

console.log("SENTRY INIT server", process.env.SENTRY_DSN);

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  tracesSampleRate: 1,
  debug: true,
  beforeSendTransaction(transaction: Sentry.Event) {
    console.log("transaction (server): ", transaction.contexts);
    return transaction;
  },
  beforeSend(event: Sentry.Event) {
    console.log("Event (server): ", event.transaction);
    return event;
  },
});
