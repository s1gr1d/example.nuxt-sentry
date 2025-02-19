;{try{let e="undefined"!="undefined"?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="96e190d4-a9e5-4287-929c-0813467bd53f",e._sentryDebugIdIdentifier="sentry-dbid-96e190d4-a9e5-4287-929c-0813467bd53f")}catch(e){}};import { d as defineEventHandler, g as getRouterParam } from '../../../nitro/nitro.mjs';
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

const _param_ = defineEventHandler((event) => {
  const param = getRouterParam(event, "param");
  return `Param: ${param}!`;
});

export { _param_ as default };
