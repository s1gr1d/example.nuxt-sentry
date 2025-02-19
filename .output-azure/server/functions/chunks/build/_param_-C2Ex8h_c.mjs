;{try{let e="undefined"!="undefined"?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="69292acd-3918-44be-9f79-6fe6b0263eb4",e._sentryDebugIdIdentifier="sentry-dbid-69292acd-3918-44be-9f79-6fe6b0263eb4")}catch(e){}};import { _ as _sfc_main$1 } from './ErrorButton-BQIH-LCb.mjs';
import { useSSRContext } from 'vue';
import { ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import '../nitro/nitro.mjs';
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

!function() {
  try {
    var e = false ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "87ec2340-57d7-400e-99e2-989779f993af", e._sentryDebugIdIdentifier = "sentry-dbid-87ec2340-57d7-400e-99e2-989779f993af");
  } catch (e2) {
  }
}();
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_ErrorButton = _sfc_main$1;
  _push(`<!--[--><p>${ssrInterpolate(_ctx.$route.params.param)} - ${ssrInterpolate(_ctx.$route.params.param)}</p>`);
  _push(ssrRenderComponent(_component_ErrorButton, null, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/test-param/[param].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _param_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _param_ as default };
