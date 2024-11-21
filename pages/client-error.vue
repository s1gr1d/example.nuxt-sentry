<script setup>
import ErrorButton from "../components/ErrorButton.vue";
</script>

<template>
  <button @click="nonExistentMethod()">Click me!</button>
  <ErrorButton />
</template>
