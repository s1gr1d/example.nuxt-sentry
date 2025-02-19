;{try{let e="undefined"!="undefined"?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="a742a319-6302-4f6d-bb34-16f0893c365c",e._sentryDebugIdIdentifier="sentry-dbid-a742a319-6302-4f6d-bb34-16f0893c365c")}catch(e){}};import _sfc_main$3 from './ContentDoc-BIZ9ucOc.mjs';
import { defineComponent, ref, defineAsyncComponent, withCtx, unref, createVNode, useSSRContext, withAsyncContext } from 'vue';
import { u as useNuxtApp } from './server.mjs';
import { ssrRenderComponent, ssrRenderAttrs, ssrInterpolate } from 'vue/server-renderer';
import { u as useFetch } from './fetch-D6kRI4bx.mjs';
import { _ as _sfc_main$2 } from './ErrorButton-BQIH-LCb.mjs';
import '../nitro/nitro.mjs';
import './ContentRenderer-1Vpa4Tu5.mjs';
import './ContentRendererMarkdown-WCaiixZd.mjs';
import 'property-information';
import './node-Cq3PEFgT.mjs';
import './preview-DU5hd18n.mjs';
import './ssr-eHFX6S7D.mjs';
import './ContentQuery-B6DxZXo4.mjs';
import './asyncData-DjiNo6h5.mjs';
import './query-DiGFQoMM.mjs';
import './index-Dx-UgeZf.mjs';
import '@unhead/shared';
import 'pinia';
import 'unhead';
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
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "986b16c9-1766-4ed8-ba9b-e13501375a3e", e._sentryDebugIdIdentifier = "sentry-dbid-986b16c9-1766-4ed8-ba9b-e13501375a3e");
  } catch (e2) {
  }
}();
const __nuxt_component_1 = defineComponent({
  name: "NuxtErrorBoundary",
  inheritAttrs: false,
  emits: {
    error(_error) {
      return true;
    }
  },
  setup(_props, { slots, emit }) {
    const error = ref(null);
    useNuxtApp();
    function clearError() {
      error.value = null;
    }
    return () => {
      var _a, _b;
      return error.value ? (_a = slots.error) == null ? void 0 : _a.call(slots, { error, clearError }) : (_b = slots.default) == null ? void 0 : _b.call(slots);
    };
  }
});
const _sfc_main$1 = {
  __name: "Quote",
  __ssrInlineRender: true,
  props: {
    id: Number
  },
  async setup(__props) {
    let __temp, __restore;
    const props = __props;
    const {
      data: quote,
      status,
      error
    } = ([__temp, __restore] = withAsyncContext(() => useFetch(() => `https://dummyjson.com/quotes/${props.id}`, "$fHS0rOHJBa")), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      if (unref(status) === "pending") {
        _push(`<p>Fetching...</p>`);
      } else if (unref(error)) {
        _push(`<pre>Could not load quote: ${ssrInterpolate(unref(error).data)}</pre>`);
      } else {
        _push(`<figure class="quote"><blockquote>${ssrInterpolate(unref(quote).quote)}</blockquote><figcaption>\u2014 ${ssrInterpolate(unref(quote).author)}</figcaption></figure>`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Quote.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
defineAsyncComponent(() => import('./RandomList-rwTbsCUv.mjs').then((r) => r["default"] || r.default || r));
const _sfc_main = {
  __name: "client-side",
  __ssrInlineRender: true,
  setup(__props) {
    const id = ref(1);
    ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ContentDoc = _sfc_main$3;
      const _component_NuxtErrorBoundary = __nuxt_component_1;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_ContentDoc, { path: "/document" }, null, _parent));
      _push(ssrRenderComponent(_component_NuxtErrorBoundary, {
        onError: (err) => console.log("hello", err)
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<button${_scopeId}>Click me! (non existent method)</button>`);
            _push2(ssrRenderComponent(unref(_sfc_main$2), null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("button", {
                onClick: ($event) => _ctx.nonExistentMethod()
              }, "Click me! (non existent method)", 8, ["onClick"]),
              createVNode(unref(_sfc_main$2))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div><h2>Fetch Quotes</h2><p>Example of data fetching inside a component:</p><p><button>Previous</button> - <button>Next</button></p>`);
      _push(ssrRenderComponent(unref(_sfc_main$1), { id: unref(id) }, null, _parent));
      _push(`</div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/client-side.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
