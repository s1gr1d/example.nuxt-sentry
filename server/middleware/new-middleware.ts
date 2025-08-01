import { defineEventHandler, getRequestURL } from "#imports";

export default defineEventHandler((event) => {
  console.log("New request: " + getRequestURL(event));
});
