;{try{let e="undefined"!="undefined"?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="d2970560-7133-4beb-8821-4da737321d7b",e._sentryDebugIdIdentifier="sentry-dbid-d2970560-7133-4beb-8821-4da737321d7b")}catch(e){}};import { u as useNuxtApp } from './server.mjs';
import '../nitro/nitro.mjs';

!function() {
  try {
    var e = false ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "21a3296b-bd13-4cd1-9977-b6cf223bd3c0", e._sentryDebugIdIdentifier = "sentry-dbid-21a3296b-bd13-4cd1-9977-b6cf223bd3c0");
  } catch (e2) {
  }
}();
function useRequestEvent(nuxtApp = useNuxtApp()) {
  var _a;
  return (_a = nuxtApp.ssrContext) == null ? void 0 : _a.event;
}
function useRequestFetch() {
  var _a;
  return ((_a = useRequestEvent()) == null ? void 0 : _a.$fetch) || globalThis.$fetch;
}

export { useRequestEvent as a, useRequestFetch as u };
