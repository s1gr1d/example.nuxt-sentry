<script setup>
const randomList = Array.from({ length: 10 }, () =>
  Math.floor(Math.random() * 100),
);
</script>

<template>
  <div>
    <h1>Random List</h1>
    <ul>
      <li v-for="(item, index) in randomList" :key="index">{{ item }}</li>
    </ul>
  </div>
</template>
