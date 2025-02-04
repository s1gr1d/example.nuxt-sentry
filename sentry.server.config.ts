import * as Sentry from "@sentry/nuxt";
import dotenv from "dotenv";

console.log("SENTRY INIT server", process.env.SENTRY_DSN);

declare const context: any;

try{
  if (context) {
    context.log("Sentry init server", process.env.SENTRY_DSN);
  }
} catch(err) {}

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
