import { defineEventHandler } from "#imports";
import * as Sentry from "@sentry/nuxt";
import { getDefaultCurrentScope, getDefaultIsolationScope } from "@sentry/core";

export default defineEventHandler((event) => {
  console.log(
    "Isolation scopes equal to default isolation scope?",
    Sentry.getIsolationScope() === getDefaultIsolationScope(),
  );
  console.log(
    "Current scope equal to default current scope?",
    Sentry.getCurrentScope() === getDefaultCurrentScope(),
  );
  throw new Error("Example Server error");
});
