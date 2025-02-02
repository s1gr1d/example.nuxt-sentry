import * as Sentry from "@sentry/nuxt";
import dotenv from "dotenv";

dotenv.config();

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  tracesSampleRate: 1,
  debug: true,
  beforeSendTransaction(transaction: any) {
    console.log("transaction (server): ", transaction.contexts);
    return transaction;
  },
  beforeSend(event: any) {
    console.log("Event (server): ", event);
    return event;
  },
});
