;{try{let e="undefined"!="undefined"?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="ba01ae84-63aa-4a66-a2cb-7eebfd5793c9",e._sentryDebugIdIdentifier="sentry-dbid-ba01ae84-63aa-4a66-a2cb-7eebfd5793c9")}catch(e){}};import _RemarkEmoji from 'remark-emoji';
import '../nitro/nitro.mjs';
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

const remarkPlugins = {
  'remark-emoji': { instance: _RemarkEmoji },
};

const rehypePlugins = {
};

const highlight = {}

;

export { highlight, rehypePlugins, remarkPlugins };
