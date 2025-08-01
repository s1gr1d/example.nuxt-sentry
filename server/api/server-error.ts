import { defineEventHandler } from "#imports";
import * as Sentry from "@sentry/core";

export default defineEventHandler((event) => {
  console.log(
    "Isolation scopes equal to default isolation scope?",
    Sentry.getIsolationScope() === Sentry.getDefaultIsolationScope(),
  );
  console.log(
    "Current scope equal to default current scope?",
    Sentry.getCurrentScope() === Sentry.getDefaultCurrentScope(),
  );
  throw new Error("Example Server error");
});
