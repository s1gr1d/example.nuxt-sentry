;{try{let e="undefined"!="undefined"?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="fcf640fe-56f6-4780-a025-dc6c903237d4",e._sentryDebugIdIdentifier="sentry-dbid-fcf640fe-56f6-4780-a025-dc6c903237d4")}catch(e){}};import { d as defineEventHandler } from '../../nitro/nitro.mjs';
import Redis from 'ioredis';
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

const redis = defineEventHandler((event) => {
  const redis = new Redis();
  redis.set("test-key", "test-value");
  return redis.get("test-key");
});

export { redis as default };
