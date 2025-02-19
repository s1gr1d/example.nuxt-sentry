;{try{let e="undefined"!="undefined"?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="8e90c5f6-e671-478e-8320-1815aee85cd0",e._sentryDebugIdIdentifier="sentry-dbid-8e90c5f6-e671-478e-8320-1815aee85cd0")}catch(e){}};import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
import '../nitro/nitro.mjs';

!function() {
  try {
    var e = false ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "c5dd10f0-7e2d-401b-94c8-cf4abfe53366", e._sentryDebugIdIdentifier = "sentry-dbid-c5dd10f0-7e2d-401b-94c8-cf4abfe53366");
  } catch (e2) {
  }
}();
const _sfc_main = {
  __name: "ErrorButton",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<button${ssrRenderAttrs(mergeProps({ id: "errorBtn" }, _attrs))}>Trigger Error</button>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ErrorButton.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
