;{try{let e="undefined"!="undefined"?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="1086345d-c109-4645-aeef-26fd7f5666fe",e._sentryDebugIdIdentifier="sentry-dbid-1086345d-c109-4645-aeef-26fd7f5666fe")}catch(e){}};import { d as defineEventHandler } from '../../nitro/nitro.mjs';
import * as Sentry from '@sentry/nuxt';
import { getDefaultIsolationScope, getDefaultCurrentScope } from '@sentry/core';
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
import '@sentry/node';

const serverError = defineEventHandler((event) => {
  console.log("Isolation scopes equal to default isolation scope?", Sentry.getIsolationScope() === getDefaultIsolationScope());
  console.log("Current scope equal to default current scope?", Sentry.getCurrentScope() === getDefaultCurrentScope());
  throw new Error("Example Server error");
});

export { serverError as default };
