;{try{let e="undefined"!="undefined"?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="723b0ff2-e076-4c10-8c93-7d21e696dc96",e._sentryDebugIdIdentifier="sentry-dbid-723b0ff2-e076-4c10-8c93-7d21e696dc96")}catch(e){}};import { d as defineEventHandler } from '../../nitro/nitro.mjs';
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

const sentryExampleApi = defineEventHandler((event) => {
  throw new Error("Sentry Example API Route Error");
});

export { sentryExampleApi as default };
