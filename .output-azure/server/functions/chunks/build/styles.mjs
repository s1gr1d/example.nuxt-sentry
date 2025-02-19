;{try{let e="undefined"!="undefined"?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="da2f56e1-f0fc-4a40-96b0-e15fe099cb0f",e._sentryDebugIdIdentifier="sentry-dbid-da2f56e1-f0fc-4a40-96b0-e15fe099cb0f")}catch(e){}};import '../nitro/nitro.mjs';
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

const interopDefault = r => r.default || r || [];
const styles = {
  "pages/sentry-example-page.vue": () => import('./sentry-example-page-styles.1H7kWnza.mjs').then(interopDefault),
  "node_modules/nuxt/dist/app/components/error-404.vue": () => import('./error-404-styles.BAOi3e7k.mjs').then(interopDefault),
  "node_modules/nuxt/dist/app/components/error-500.vue": () => import('./error-500-styles.DLgspnDk.mjs').then(interopDefault),
  "pages/sentry-example-page.vue?vue&type=style&index=0&scoped=fd54debd&lang.css": () => import('./sentry-example-page-styles.Omy6Q2Ar.mjs').then(interopDefault),
  "node_modules/@nuxt/content/dist/runtime/components/Prose/ProseCode.vue": () => import('./ProseCode-styles.DUJgl2Zl.mjs').then(interopDefault),
  "node_modules/@nuxt/content/dist/runtime/components/Prose/ProseCode.vue?vue&type=style&index=0&lang.css": () => import('./ProseCode-styles.6_nGtYsK.mjs').then(interopDefault),
  "node_modules/@nuxt/content/dist/runtime/components/Prose/ProsePre.vue": () => import('./ProsePre-styles.B0KhXiEi.mjs').then(interopDefault),
  "node_modules/@nuxt/content/dist/runtime/components/Prose/ProsePre.vue?vue&type=style&index=0&lang.css": () => import('./ProsePre-styles.BFGamQ4B.mjs').then(interopDefault),
  "node_modules/nuxt/dist/app/components/error-404.vue?vue&type=style&index=0&scoped=00b6b518&lang.css": () => import('./error-404-styles.BbZ5YorO.mjs').then(interopDefault),
  "node_modules/nuxt/dist/app/components/error-500.vue?vue&type=style&index=0&scoped=f7ad9679&lang.css": () => import('./error-500-styles.DXN5_yqV.mjs').then(interopDefault)
}

;

export { styles as default };
