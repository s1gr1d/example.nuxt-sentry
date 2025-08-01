<template>
  <div>
    {{ data }}
    <button @click="fetchData">Fetch Data</button>
    <button @click="fetchRedis">Fetch Redis Data</button>
    <button @click="fetchError">Fetch Server Error</button>
  </div>
</template>

<script setup lang="ts">
import { useFetch } from "#imports";

const fetchError = async () => {
  await useFetch("/api/server-error", {
    method: "POST",
    body: { test: 123 },
  });
};

const fetchData = async () => {
  await useFetch("/api/test-param/123", { body: { test: 123 } });
};

const fetchRedis = async () => {
  const { data: redisData } = await useFetch("/api/redis");
  data.value = redisData;
};

const { data } = await useFetch("/api/test-param/123", { body: { test: 123 } });
</script>
