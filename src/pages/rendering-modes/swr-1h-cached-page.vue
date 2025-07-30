<script setup>
import { ErrorButton } from "#components";
import { useFetch } from "#imports";

const { data } = await useFetch("/api/test-param/cached-swr-cached-page");
</script>

<template>
  {{ data }}
  <NuxtErrorBoundary @error="(err) => console.log('hello', err)">
    <button @click="nonExistentMethod()">
      Click me! (non existent method - ISR cached page)
    </button>
    <ErrorButton />
  </NuxtErrorBoundary>
</template>
