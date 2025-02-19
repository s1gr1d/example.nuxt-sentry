;
!function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "3637b66b-682a-496f-b5b8-c5704b954495", e._sentryDebugIdIdentifier = "sentry-dbid-3637b66b-682a-496f-b5b8-c5704b954495");
  } catch (e2) {
  }
}();
import * as Sentry from "@sentry/nuxt";
var _global = typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
_global.SENTRY_RELEASE = { id: "227b463b4d18c366868f751331f40b6ca30f321c" };
console.log("SENTRY INIT server", process.env.SENTRY_DSN);
try {
  if (context) {
    context.log("Sentry init server", process.env.SENTRY_DSN);
  }
} catch (err) {
}
Sentry.init({
  dsn: "https://e88b32b2db8229c9b7b693337bd60a12@o447951.ingest.us.sentry.io/4507486945738752",
  tracesSampleRate: 1,
  debug: true,
  beforeSendTransaction(transaction) {
    return transaction;
  },
  beforeSend(event) {
    return event;
  },
  enableNitroErrorHandler: false
});
//# sourceMappingURL=sentry.server.config.mjs.map
