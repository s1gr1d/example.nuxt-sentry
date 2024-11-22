<script setup lang="ts">
import ErrorButton from "~/components/ErrorButton.vue";
</script>

<template>
  <div>test-{{ $route.params.id }}</div>
  <ErrorButton />
</template>
