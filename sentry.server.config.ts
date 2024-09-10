import * as Sentry from "@sentry/nuxt";
import dotenv from "dotenv";

dotenv.config();

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  tracesSampleRate: 1,
  debug: true,
  beforeSendTransaction(transaction) {
    console.log("transaction (server): ", transaction.transaction);
    return transaction;
  },
});
