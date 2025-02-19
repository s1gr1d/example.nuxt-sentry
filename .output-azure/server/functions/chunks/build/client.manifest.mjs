;{try{let e="undefined"!="undefined"?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="a8739380-8d82-4499-bc5b-3f3a437d822d",e._sentryDebugIdIdentifier="sentry-dbid-a8739380-8d82-4499-bc5b-3f3a437d822d")}catch(e){}};import '../nitro/nitro.mjs';
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

const client_manifest = {
  "_!~{00W}~.js": {
    "resourceType": "style",
    "prefetch": true,
    "preload": true,
    "file": "ProsePre.B_fgAJq0.css",
    "src": "node_modules/@nuxt/content/dist/runtime/components/Prose/ProsePre.vue"
  },
  "_BeJQJp4q.js": {
    "resourceType": "script",
    "module": true,
    "prefetch": true,
    "preload": true,
    "file": "BeJQJp4q.js",
    "name": "vue.8fc199ce",
    "imports": [
      "node_modules/nuxt/dist/app/entry.js"
    ]
  },
  "_BhckzmUG.js": {
    "resourceType": "script",
    "module": true,
    "prefetch": true,
    "preload": true,
    "file": "BhckzmUG.js",
    "name": "index"
  },
  "_Bq4ei4sB.js": {
    "resourceType": "script",
    "module": true,
    "prefetch": true,
    "preload": true,
    "file": "Bq4ei4sB.js",
    "name": "index"
  },
  "_Bwq9OjY_.js": {
    "resourceType": "script",
    "module": true,
    "prefetch": true,
    "preload": true,
    "file": "Bwq9OjY_.js",
    "name": "node"
  },
  "_CA_NoY9p.js": {
    "resourceType": "script",
    "module": true,
    "prefetch": true,
    "preload": true,
    "file": "CA_NoY9p.js",
    "name": "asyncData",
    "imports": [
      "node_modules/nuxt/dist/app/entry.js"
    ]
  },
  "_DX8PRPNw.js": {
    "resourceType": "script",
    "module": true,
    "prefetch": true,
    "preload": true,
    "file": "DX8PRPNw.js",
    "name": "query",
    "imports": [
      "node_modules/nuxt/dist/app/entry.js",
      "_Bq4ei4sB.js",
      "_D_DaALT7.js"
    ],
    "dynamicImports": [
      "node_modules/@nuxt/content/dist/runtime/legacy/composables/client-db.js"
    ]
  },
  "_D_DaALT7.js": {
    "resourceType": "script",
    "module": true,
    "prefetch": true,
    "preload": true,
    "file": "D_DaALT7.js",
    "name": "preview",
    "imports": [
      "node_modules/nuxt/dist/app/entry.js",
      "_Bq4ei4sB.js"
    ]
  },
  "_DsIjrjO9.js": {
    "resourceType": "script",
    "module": true,
    "prefetch": true,
    "preload": true,
    "file": "DsIjrjO9.js",
    "name": "ErrorButton",
    "imports": [
      "node_modules/nuxt/dist/app/entry.js"
    ]
  },
  "_DymipIk9.js": {
    "resourceType": "script",
    "module": true,
    "prefetch": true,
    "preload": true,
    "file": "DymipIk9.js",
    "name": "ProseCode.vue",
    "imports": [
      "node_modules/nuxt/dist/app/entry.js"
    ],
    "css": [
      "ProsePre.B_fgAJq0.css"
    ]
  },
  "ProsePre.B_fgAJq0.css": {
    "file": "ProsePre.B_fgAJq0.css",
    "resourceType": "style",
    "prefetch": true,
    "preload": true
  },
  "_Wn8ER2Dp.js": {
    "resourceType": "script",
    "module": true,
    "prefetch": true,
    "preload": true,
    "file": "Wn8ER2Dp.js",
    "name": "ContentRendererMarkdown.vue",
    "imports": [
      "node_modules/nuxt/dist/app/entry.js",
      "_BhckzmUG.js",
      "_Bwq9OjY_.js",
      "_D_DaALT7.js"
    ]
  },
  "_xKARv67a.js": {
    "resourceType": "script",
    "module": true,
    "prefetch": true,
    "preload": true,
    "file": "xKARv67a.js",
    "name": "fetch",
    "imports": [
      "_Bq4ei4sB.js",
      "node_modules/nuxt/dist/app/entry.js",
      "_CA_NoY9p.js"
    ]
  },
  "node_modules/@nuxt/content/dist/runtime/components/ContentDoc.vue": {
    "resourceType": "script",
    "module": true,
    "prefetch": true,
    "preload": true,
    "file": "BPWUE0gF.js",
    "name": "ContentDoc",
    "src": "node_modules/@nuxt/content/dist/runtime/components/ContentDoc.vue",
    "isDynamicEntry": true,
    "imports": [
      "node_modules/nuxt/dist/app/entry.js",
      "node_modules/@nuxt/content/dist/runtime/components/ContentRenderer.vue",
      "node_modules/@nuxt/content/dist/runtime/components/ContentQuery.vue",
      "_BeJQJp4q.js",
      "_Wn8ER2Dp.js",
      "_BhckzmUG.js",
      "_Bwq9OjY_.js",
      "_D_DaALT7.js",
      "_Bq4ei4sB.js",
      "_CA_NoY9p.js",
      "_DX8PRPNw.js"
    ]
  },
  "node_modules/@nuxt/content/dist/runtime/components/ContentList.vue": {
    "resourceType": "script",
    "module": true,
    "prefetch": true,
    "preload": true,
    "file": "BlxzFJgD.js",
    "name": "ContentList",
    "src": "node_modules/@nuxt/content/dist/runtime/components/ContentList.vue",
    "isDynamicEntry": true,
    "imports": [
      "node_modules/@nuxt/content/dist/runtime/components/ContentQuery.vue",
      "node_modules/nuxt/dist/app/entry.js",
      "_Bq4ei4sB.js",
      "_CA_NoY9p.js",
      "_DX8PRPNw.js",
      "_D_DaALT7.js"
    ]
  },
  "node_modules/@nuxt/content/dist/runtime/components/ContentNavigation.vue": {
    "resourceType": "script",
    "module": true,
    "prefetch": true,
    "preload": true,
    "file": "BwDIsu_S.js",
    "name": "ContentNavigation",
    "src": "node_modules/@nuxt/content/dist/runtime/components/ContentNavigation.vue",
    "isDynamicEntry": true,
    "imports": [
      "_Bq4ei4sB.js",
      "_CA_NoY9p.js",
      "node_modules/nuxt/dist/app/entry.js",
      "_DX8PRPNw.js",
      "_D_DaALT7.js"
    ],
    "dynamicImports": [
      "node_modules/@nuxt/content/dist/runtime/legacy/composables/client-db.js"
    ]
  },
  "node_modules/@nuxt/content/dist/runtime/components/ContentQuery.vue": {
    "resourceType": "script",
    "module": true,
    "prefetch": true,
    "preload": true,
    "file": "DOmxuOm8.js",
    "name": "ContentQuery",
    "src": "node_modules/@nuxt/content/dist/runtime/components/ContentQuery.vue",
    "isDynamicEntry": true,
    "imports": [
      "_Bq4ei4sB.js",
      "_CA_NoY9p.js",
      "_DX8PRPNw.js",
      "node_modules/nuxt/dist/app/entry.js",
      "_D_DaALT7.js"
    ]
  },
  "node_modules/@nuxt/content/dist/runtime/components/ContentRenderer.vue": {
    "resourceType": "script",
    "module": true,
    "prefetch": true,
    "preload": true,
    "file": "_oCsyHyy.js",
    "name": "ContentRenderer",
    "src": "node_modules/@nuxt/content/dist/runtime/components/ContentRenderer.vue",
    "isDynamicEntry": true,
    "imports": [
      "_Wn8ER2Dp.js",
      "node_modules/nuxt/dist/app/entry.js",
      "_BhckzmUG.js",
      "_Bwq9OjY_.js",
      "_D_DaALT7.js",
      "_Bq4ei4sB.js"
    ]
  },
  "node_modules/@nuxt/content/dist/runtime/components/ContentRendererMarkdown.vue": {
    "resourceType": "script",
    "module": true,
    "prefetch": true,
    "preload": true,
    "file": "BCOMPYFt.js",
    "name": "ContentRendererMarkdown",
    "src": "node_modules/@nuxt/content/dist/runtime/components/ContentRendererMarkdown.vue",
    "isDynamicEntry": true,
    "imports": [
      "_Wn8ER2Dp.js",
      "node_modules/nuxt/dist/app/entry.js",
      "_BhckzmUG.js",
      "_Bwq9OjY_.js",
      "_D_DaALT7.js",
      "_Bq4ei4sB.js"
    ]
  },
  "node_modules/@nuxt/content/dist/runtime/components/ContentSlot.vue": {
    "resourceType": "script",
    "module": true,
    "prefetch": true,
    "preload": true,
    "file": "C51fn9Dw.js",
    "name": "ContentSlot",
    "src": "node_modules/@nuxt/content/dist/runtime/components/ContentSlot.vue",
    "isDynamicEntry": true,
    "imports": [
      "_Bwq9OjY_.js",
      "node_modules/nuxt/dist/app/entry.js"
    ]
  },
  "node_modules/@nuxt/content/dist/runtime/components/DocumentDrivenEmpty.vue": {
    "resourceType": "script",
    "module": true,
    "prefetch": true,
    "preload": true,
    "file": "D3knbAlQ.js",
    "name": "DocumentDrivenEmpty",
    "src": "node_modules/@nuxt/content/dist/runtime/components/DocumentDrivenEmpty.vue",
    "isDynamicEntry": true,
    "imports": [
      "node_modules/nuxt/dist/app/entry.js"
    ]
  },
  "node_modules/@nuxt/content/dist/runtime/components/DocumentDrivenNotFound.vue": {
    "resourceType": "script",
    "module": true,
    "prefetch": true,
    "preload": true,
    "file": "y_UiLe9d.js",
    "name": "DocumentDrivenNotFound",
    "src": "node_modules/@nuxt/content/dist/runtime/components/DocumentDrivenNotFound.vue",
    "isDynamicEntry": true,
    "imports": [
      "node_modules/nuxt/dist/app/entry.js"
    ]
  },
  "node_modules/@nuxt/content/dist/runtime/components/Markdown.vue": {
    "resourceType": "script",
    "module": true,
    "prefetch": true,
    "preload": true,
    "file": "CfxQnz2F.js",
    "name": "Markdown",
    "src": "node_modules/@nuxt/content/dist/runtime/components/Markdown.vue",
    "isDynamicEntry": true,
    "imports": [
      "node_modules/@nuxt/content/dist/runtime/components/ContentSlot.vue",
      "node_modules/nuxt/dist/app/entry.js",
      "_Bwq9OjY_.js"
    ]
  },
  "node_modules/@nuxt/content/dist/runtime/components/Prose/ProseCode.vue": {
    "resourceType": "script",
    "module": true,
    "prefetch": true,
    "preload": true,
    "file": "BivLcwel.js",
    "name": "ProseCode",
    "src": "node_modules/@nuxt/content/dist/runtime/components/Prose/ProseCode.vue",
    "isDynamicEntry": true,
    "imports": [
      "_DymipIk9.js",
      "node_modules/nuxt/dist/app/entry.js"
    ]
  },
  "node_modules/@nuxt/content/dist/runtime/components/Prose/ProseCodeInline.vue": {
    "resourceType": "script",
    "module": true,
    "prefetch": true,
    "preload": true,
    "file": "baWlbzQ2.js",
    "name": "ProseCodeInline",
    "src": "node_modules/@nuxt/content/dist/runtime/components/Prose/ProseCodeInline.vue",
    "isDynamicEntry": true,
    "imports": [
      "node_modules/nuxt/dist/app/entry.js"
    ]
  },
  "node_modules/@nuxt/content/dist/runtime/components/Prose/ProsePre.vue": {
    "resourceType": "script",
    "module": true,
    "prefetch": true,
    "preload": true,
    "file": "CBlUt2U-.js",
    "name": "ProsePre",
    "src": "node_modules/@nuxt/content/dist/runtime/components/Prose/ProsePre.vue",
    "isDynamicEntry": true,
    "imports": [
      "_DymipIk9.js",
      "node_modules/nuxt/dist/app/entry.js"
    ],
    "css": []
  },
  "node_modules/@nuxt/content/dist/runtime/legacy/composables/client-db.js": {
    "resourceType": "script",
    "module": true,
    "prefetch": true,
    "preload": true,
    "file": "BVatJ78n.js",
    "name": "client-db",
    "src": "node_modules/@nuxt/content/dist/runtime/legacy/composables/client-db.js",
    "isDynamicEntry": true,
    "imports": [
      "node_modules/nuxt/dist/app/entry.js",
      "_DX8PRPNw.js",
      "_BhckzmUG.js",
      "_D_DaALT7.js",
      "_Bq4ei4sB.js"
    ]
  },
  "node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseA.vue": {
    "resourceType": "script",
    "module": true,
    "prefetch": true,
    "preload": true,
    "file": "CNrPPoqL.js",
    "name": "ProseA",
    "src": "node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseA.vue",
    "isDynamicEntry": true,
    "imports": [
      "node_modules/nuxt/dist/app/entry.js"
    ]
  },
  "node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseBlockquote.vue": {
    "resourceType": "script",
    "module": true,
    "prefetch": true,
    "preload": true,
    "file": "ir5NlYHN.js",
    "name": "ProseBlockquote",
    "src": "node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseBlockquote.vue",
    "isDynamicEntry": true,
    "imports": [
      "node_modules/nuxt/dist/app/entry.js"
    ]
  },
  "node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseEm.vue": {
    "resourceType": "script",
    "module": true,
    "prefetch": true,
    "preload": true,
    "file": "CpMT7GZR.js",
    "name": "ProseEm",
    "src": "node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseEm.vue",
    "isDynamicEntry": true,
    "imports": [
      "node_modules/nuxt/dist/app/entry.js"
    ]
  },
  "node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH1.vue": {
    "resourceType": "script",
    "module": true,
    "prefetch": true,
    "preload": true,
    "file": "BhNJqnH8.js",
    "name": "ProseH1",
    "src": "node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH1.vue",
    "isDynamicEntry": true,
    "imports": [
      "node_modules/nuxt/dist/app/entry.js"
    ]
  },
  "node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH2.vue": {
    "resourceType": "script",
    "module": true,
    "prefetch": true,
    "preload": true,
    "file": "YlLTRSBX.js",
    "name": "ProseH2",
    "src": "node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH2.vue",
    "isDynamicEntry": true,
    "imports": [
      "node_modules/nuxt/dist/app/entry.js"
    ]
  },
  "node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH3.vue": {
    "resourceType": "script",
    "module": true,
    "prefetch": true,
    "preload": true,
    "file": "BXZQXwmP.js",
    "name": "ProseH3",
    "src": "node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH3.vue",
    "isDynamicEntry": true,
    "imports": [
      "node_modules/nuxt/dist/app/entry.js"
    ]
  },
  "node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH4.vue": {
    "resourceType": "script",
    "module": true,
    "prefetch": true,
    "preload": true,
    "file": "DDU5l38c.js",
    "name": "ProseH4",
    "src": "node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH4.vue",
    "isDynamicEntry": true,
    "imports": [
      "node_modules/nuxt/dist/app/entry.js"
    ]
  },
  "node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH5.vue": {
    "resourceType": "script",
    "module": true,
    "prefetch": true,
    "preload": true,
    "file": "C9nG8eOf.js",
    "name": "ProseH5",
    "src": "node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH5.vue",
    "isDynamicEntry": true,
    "imports": [
      "node_modules/nuxt/dist/app/entry.js"
    ]
  },
  "node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH6.vue": {
    "resourceType": "script",
    "module": true,
    "prefetch": true,
    "preload": true,
    "file": "Bh8ff10X.js",
    "name": "ProseH6",
    "src": "node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH6.vue",
    "isDynamicEntry": true,
    "imports": [
      "node_modules/nuxt/dist/app/entry.js"
    ]
  },
  "node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseHr.vue": {
    "resourceType": "script",
    "module": true,
    "prefetch": true,
    "preload": true,
    "file": "BHmQ6891.js",
    "name": "ProseHr",
    "src": "node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseHr.vue",
    "isDynamicEntry": true,
    "imports": [
      "node_modules/nuxt/dist/app/entry.js"
    ]
  },
  "node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseImg.vue": {
    "resourceType": "script",
    "module": true,
    "prefetch": true,
    "preload": true,
    "file": "CvChRRaD.js",
    "name": "ProseImg",
    "src": "node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseImg.vue",
    "isDynamicEntry": true,
    "imports": [
      "node_modules/nuxt/dist/app/entry.js"
    ]
  },
  "node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseLi.vue": {
    "resourceType": "script",
    "module": true,
    "prefetch": true,
    "preload": true,
    "file": "BjVCt2i2.js",
    "name": "ProseLi",
    "src": "node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseLi.vue",
    "isDynamicEntry": true,
    "imports": [
      "node_modules/nuxt/dist/app/entry.js"
    ]
  },
  "node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseOl.vue": {
    "resourceType": "script",
    "module": true,
    "prefetch": true,
    "preload": true,
    "file": "CZZsA8SK.js",
    "name": "ProseOl",
    "src": "node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseOl.vue",
    "isDynamicEntry": true,
    "imports": [
      "node_modules/nuxt/dist/app/entry.js"
    ]
  },
  "node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseP.vue": {
    "resourceType": "script",
    "module": true,
    "prefetch": true,
    "preload": true,
    "file": "BXhTmzUG.js",
    "name": "ProseP",
    "src": "node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseP.vue",
    "isDynamicEntry": true,
    "imports": [
      "node_modules/nuxt/dist/app/entry.js"
    ]
  },
  "node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseScript.vue": {
    "resourceType": "script",
    "module": true,
    "prefetch": true,
    "preload": true,
    "file": "DFz1xJSc.js",
    "name": "ProseScript",
    "src": "node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseScript.vue",
    "isDynamicEntry": true,
    "imports": [
      "node_modules/nuxt/dist/app/entry.js"
    ]
  },
  "node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseStrong.vue": {
    "resourceType": "script",
    "module": true,
    "prefetch": true,
    "preload": true,
    "file": "Dn5bLxvm.js",
    "name": "ProseStrong",
    "src": "node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseStrong.vue",
    "isDynamicEntry": true,
    "imports": [
      "node_modules/nuxt/dist/app/entry.js"
    ]
  },
  "node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseTable.vue": {
    "resourceType": "script",
    "module": true,
    "prefetch": true,
    "preload": true,
    "file": "D1xmNbQg.js",
    "name": "ProseTable",
    "src": "node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseTable.vue",
    "isDynamicEntry": true,
    "imports": [
      "node_modules/nuxt/dist/app/entry.js"
    ]
  },
  "node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseTbody.vue": {
    "resourceType": "script",
    "module": true,
    "prefetch": true,
    "preload": true,
    "file": "DGEtrYaF.js",
    "name": "ProseTbody",
    "src": "node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseTbody.vue",
    "isDynamicEntry": true,
    "imports": [
      "node_modules/nuxt/dist/app/entry.js"
    ]
  },
  "node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseTd.vue": {
    "resourceType": "script",
    "module": true,
    "prefetch": true,
    "preload": true,
    "file": "BUD5Q8TB.js",
    "name": "ProseTd",
    "src": "node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseTd.vue",
    "isDynamicEntry": true,
    "imports": [
      "node_modules/nuxt/dist/app/entry.js"
    ]
  },
  "node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseTh.vue": {
    "resourceType": "script",
    "module": true,
    "prefetch": true,
    "preload": true,
    "file": "CJNMpQVo.js",
    "name": "ProseTh",
    "src": "node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseTh.vue",
    "isDynamicEntry": true,
    "imports": [
      "node_modules/nuxt/dist/app/entry.js"
    ]
  },
  "node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseThead.vue": {
    "resourceType": "script",
    "module": true,
    "prefetch": true,
    "preload": true,
    "file": "Cpyj_pO3.js",
    "name": "ProseThead",
    "src": "node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseThead.vue",
    "isDynamicEntry": true,
    "imports": [
      "node_modules/nuxt/dist/app/entry.js"
    ]
  },
  "node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseTr.vue": {
    "resourceType": "script",
    "module": true,
    "prefetch": true,
    "preload": true,
    "file": "Cid-rwhz.js",
    "name": "ProseTr",
    "src": "node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseTr.vue",
    "isDynamicEntry": true,
    "imports": [
      "node_modules/nuxt/dist/app/entry.js"
    ]
  },
  "node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseUl.vue": {
    "resourceType": "script",
    "module": true,
    "prefetch": true,
    "preload": true,
    "file": "C1vrN7LL.js",
    "name": "ProseUl",
    "src": "node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseUl.vue",
    "isDynamicEntry": true,
    "imports": [
      "node_modules/nuxt/dist/app/entry.js"
    ]
  },
  "node_modules/nuxt/dist/app/components/error-404.vue": {
    "resourceType": "script",
    "module": true,
    "prefetch": true,
    "preload": true,
    "file": "DYaA_iwp.js",
    "name": "error-404",
    "src": "node_modules/nuxt/dist/app/components/error-404.vue",
    "isDynamicEntry": true,
    "imports": [
      "node_modules/nuxt/dist/app/entry.js",
      "_BeJQJp4q.js"
    ],
    "css": []
  },
  "error-404.CoZKRZXM.css": {
    "file": "error-404.CoZKRZXM.css",
    "resourceType": "style",
    "prefetch": true,
    "preload": true
  },
  "node_modules/nuxt/dist/app/components/error-500.vue": {
    "resourceType": "script",
    "module": true,
    "prefetch": true,
    "preload": true,
    "file": "D7yBtR_i.js",
    "name": "error-500",
    "src": "node_modules/nuxt/dist/app/components/error-500.vue",
    "isDynamicEntry": true,
    "imports": [
      "node_modules/nuxt/dist/app/entry.js",
      "_BeJQJp4q.js"
    ],
    "css": []
  },
  "error-500.D6506J9O.css": {
    "file": "error-500.D6506J9O.css",
    "resourceType": "style",
    "prefetch": true,
    "preload": true
  },
  "node_modules/nuxt/dist/app/entry.js": {
    "resourceType": "script",
    "module": true,
    "prefetch": true,
    "preload": true,
    "file": "ttXgE4so.js",
    "name": "entry",
    "src": "node_modules/nuxt/dist/app/entry.js",
    "isEntry": true,
    "dynamicImports": [
      "sentry.client.config.ts",
      "node_modules/nuxt/dist/app/components/error-404.vue",
      "node_modules/nuxt/dist/app/components/error-500.vue"
    ]
  },
  "pages/catchAll/[...id].vue": {
    "resourceType": "script",
    "module": true,
    "prefetch": true,
    "preload": true,
    "file": "DtI9R080.js",
    "name": "_...id_",
    "src": "pages/catchAll/[...id].vue",
    "isDynamicEntry": true,
    "imports": [
      "node_modules/nuxt/dist/app/entry.js",
      "_DsIjrjO9.js"
    ]
  },
  "pages/client-side.vue": {
    "resourceType": "script",
    "module": true,
    "prefetch": true,
    "preload": true,
    "file": "BHwyCvuM.js",
    "name": "client-side",
    "src": "pages/client-side.vue",
    "isDynamicEntry": true,
    "imports": [
      "node_modules/@nuxt/content/dist/runtime/components/ContentDoc.vue",
      "node_modules/nuxt/dist/app/entry.js",
      "_xKARv67a.js",
      "_DsIjrjO9.js",
      "node_modules/@nuxt/content/dist/runtime/components/ContentRenderer.vue",
      "_Wn8ER2Dp.js",
      "_BhckzmUG.js",
      "_Bwq9OjY_.js",
      "_D_DaALT7.js",
      "_Bq4ei4sB.js",
      "node_modules/@nuxt/content/dist/runtime/components/ContentQuery.vue",
      "_CA_NoY9p.js",
      "_DX8PRPNw.js",
      "_BeJQJp4q.js"
    ]
  },
  "pages/fetch-server-routes.vue": {
    "resourceType": "script",
    "module": true,
    "prefetch": true,
    "preload": true,
    "file": "Y4vdnNJP.js",
    "name": "fetch-server-routes",
    "src": "pages/fetch-server-routes.vue",
    "isDynamicEntry": true,
    "imports": [
      "_xKARv67a.js",
      "node_modules/nuxt/dist/app/entry.js",
      "_Bq4ei4sB.js",
      "_CA_NoY9p.js"
    ]
  },
  "pages/index.vue": {
    "resourceType": "script",
    "module": true,
    "prefetch": true,
    "preload": true,
    "file": "IbfJtHt8.js",
    "name": "index",
    "src": "pages/index.vue",
    "isDynamicEntry": true,
    "imports": [
      "node_modules/nuxt/dist/app/entry.js"
    ]
  },
  "pages/sentry-example-page.vue": {
    "resourceType": "script",
    "module": true,
    "prefetch": true,
    "preload": true,
    "file": "C3NhW8O1.js",
    "name": "sentry-example-page",
    "src": "pages/sentry-example-page.vue",
    "isDynamicEntry": true,
    "imports": [
      "node_modules/nuxt/dist/app/entry.js",
      "_xKARv67a.js",
      "_Bq4ei4sB.js",
      "_CA_NoY9p.js"
    ],
    "css": []
  },
  "sentry-example-page.C3T4FcvY.css": {
    "file": "sentry-example-page.C3T4FcvY.css",
    "resourceType": "style",
    "prefetch": true,
    "preload": true
  },
  "pages/test-param/[param].vue": {
    "resourceType": "script",
    "module": true,
    "prefetch": true,
    "preload": true,
    "file": "DuFviC18.js",
    "name": "_param_",
    "src": "pages/test-param/[param].vue",
    "isDynamicEntry": true,
    "imports": [
      "_DsIjrjO9.js",
      "node_modules/nuxt/dist/app/entry.js"
    ]
  },
  "sentry.client.config.ts": {
    "resourceType": "script",
    "module": true,
    "prefetch": true,
    "preload": true,
    "file": "sFy9GaAR.js",
    "name": "sentry.client.config",
    "src": "sentry.client.config.ts",
    "isDynamicEntry": true,
    "imports": [
      "node_modules/nuxt/dist/app/entry.js"
    ]
  }
}

;

export { client_manifest as default };
