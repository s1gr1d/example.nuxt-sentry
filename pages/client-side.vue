<script setup>
import Quote from "~/components/Quote.vue";
import ErrorButton from "~/components/ErrorButton.vue";
import { ref } from "#imports";

const id = ref(1);
</script>

<template>
  <ContentDoc path="/document" />
  <button @click="nonExistentMethod()">Click me! (non existent method)</button>
  <ErrorButton />

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
