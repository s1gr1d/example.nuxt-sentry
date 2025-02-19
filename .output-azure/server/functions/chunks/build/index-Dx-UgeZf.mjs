;{try{let e="undefined"!="undefined"?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="d8bdac22-aa44-425d-8e74-280c55c01af0",e._sentryDebugIdIdentifier="sentry-dbid-d8bdac22-aa44-425d-8e74-280c55c01af0")}catch(e){}};import { ref, watchEffect, watch, getCurrentInstance } from 'vue';
import { i as injectHead, r as resolveUnrefHeadInput } from './server.mjs';
import { composableNames } from '@unhead/shared';
import '../nitro/nitro.mjs';

!function() {
  try {
    var e = false ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "abb7c640-176c-4498-9368-a13b1c161920", e._sentryDebugIdIdentifier = "sentry-dbid-abb7c640-176c-4498-9368-a13b1c161920");
  } catch (e2) {
  }
}();
function useHead(input, options = {}) {
  const head = options.head || injectHead();
  if (head) {
    if (!head.ssr)
      return clientUseHead(head, input, options);
    return head.push(input, options);
  }
}
function clientUseHead(head, input, options = {}) {
  const deactivated = ref(false);
  const resolvedInput = ref({});
  watchEffect(() => {
    resolvedInput.value = deactivated.value ? {} : resolveUnrefHeadInput(input);
  });
  const entry = head.push(resolvedInput.value, options);
  watch(resolvedInput, (e) => {
    entry.patch(e);
  });
  getCurrentInstance();
  return entry;
}
const coreComposableNames = [
  "injectHead"
];
({
  "@unhead/vue": [...coreComposableNames, ...composableNames]
});

export { useHead as u };
