import { defineEventHandler, getQuery } from "#imports";

export default defineEventHandler((event) => {
  if ("api" in getQuery(event)) {
    throw new Error("Server middleware error");
  }
});
