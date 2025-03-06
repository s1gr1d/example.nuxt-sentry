import * as Sentry from "@sentry/nuxt";

console.log("SENTRY INIT server", process.env.SENTRY_DSN);

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  tracesSampleRate: 1,
  debug: true,
  beforeSendTransaction(transaction) {
    console.log("Transaction (server): ", transaction.contexts);
    return transaction;
  },
  beforeSend(event) {
    console.log("Event (server): ", event.transaction);
    return event;
  },
});
