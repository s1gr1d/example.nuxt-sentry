<script setup>
const triggerError = () => {
  throw new Error("Nuxt Button Error");
};
</script>

<template>
  <button id="errorBtn" @click="triggerError">Trigger Error</button>
</template>
