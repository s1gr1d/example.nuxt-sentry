<script setup>
import { Quote, ErrorButton } from "#components";
import { ref } from "#imports";

const id = ref(1);
</script>

<template>
  <ContentDoc path="/document" />
  <NuxtErrorBoundary @error="(err) => console.log('hello', err)">
    <button @click="nonExistentMethod()">
      Click me! (non existent method)
    </button>
    <ErrorButton />
  </NuxtErrorBoundary>

  <div>
    <h2>Fetch Quotes</h2>
    <p>Example of data fetching inside a component:</p>
    <p>
      <button @click="id--">Previous</button> -
      <button @click="id++">Next</button>
    </p>
    <Quote :id="id" />
  </div>
</template>
