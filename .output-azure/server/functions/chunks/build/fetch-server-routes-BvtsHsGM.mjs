;{try{let e="undefined"!="undefined"?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="0bd1583a-37f6-4a99-82b5-c8c21c028ffe",e._sentryDebugIdIdentifier="sentry-dbid-0bd1583a-37f6-4a99-82b5-c8c21c028ffe")}catch(e){}};import { defineComponent, withAsyncContext, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate } from 'vue/server-renderer';
import { u as useFetch } from './fetch-D6kRI4bx.mjs';
import '../nitro/nitro.mjs';
import './ssr-eHFX6S7D.mjs';
import './server.mjs';
import 'pinia';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'unified';
import 'remark-parse';
import 'remark-rehype';
import 'remark-mdc';
import 'remark-gfm';
import 'rehype-external-links';
import 'rehype-sort-attribute-values';
import 'rehype-sort-attributes';
import 'rehype-raw';
import 'detab';
import 'micromark-util-sanitize-uri';
import 'hast-util-to-string';
import 'github-slugger';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import '@sentry/core';
import '@sentry/node';
import './asyncData-DjiNo6h5.mjs';

!function() {
  try {
    var e = false ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "0ef8be51-bd13-4e05-b550-ca428e891e9b", e._sentryDebugIdIdentifier = "sentry-dbid-0ef8be51-bd13-4e05-b550-ca428e891e9b");
  } catch (e2) {
  }
}();
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "fetch-server-routes",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { data } = ([__temp, __restore] = withAsyncContext(() => useFetch("/api/test-param/123", "$dNEMvT3MUU")), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>${ssrInterpolate(unref(data))} <button>Fetch Data</button><button>Fetch Redis Data</button><button>Fetch Server Error</button></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/fetch-server-routes.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
