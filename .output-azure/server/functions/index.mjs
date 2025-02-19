import './sentry.server.config.mjs'

import process from 'node:process';globalThis._importMeta_={url:import.meta.url,env:process.env};;{try{let e="undefined"!="undefined"?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="b8afd161-cbe5-4187-be79-263ec1f0f637",e._sentryDebugIdIdentifier="sentry-dbid-b8afd161-cbe5-4187-be79-263ec1f0f637")}catch(e){}};export { X as handle } from './chunks/nitro/nitro.mjs';
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
