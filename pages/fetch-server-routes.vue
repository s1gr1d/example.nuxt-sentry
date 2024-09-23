<template>
  <div>
    {{ data }}
    <button @click="fetchData">Fetch Data</button>
    <button @click="fetchError">Fetch Server Error</button>
  </div>
</template>

<script setup lang="ts">
import { useFetch } from "#imports";

const fetchError = async () => {
  await useFetch("/api/server-error");
};

const fetchData = async () => {
  await useFetch("/api/test-param/123");
};

const { data } = await useFetch("/api/test-param/123");
</script>
