<script setup>
import { ref, useResponseHeader } from "#imports";

import * as Sentry from "@sentry/nuxt";
import { onMounted } from "vue";

const header = useResponseHeader("Document-Policy");
header.value = "js-profiling";

const id = ref(1);
const fibResult = ref(null);
const isCalculating = ref(false);

// Resource-intensive recursive Fibonacci function
const fibonacciRecursive = (n) => {
  if (n <= 1) return n;
  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
};

// Heavy computation function with multiple operations
const heavyComputation = () => {
  Sentry.startSpanManual(
    { name: "Fibonacci", forceTransaction: true },
    (span) => {
      isCalculating.value = true;
      fibResult.value = null;

      const start = performance.now();

      // Calculate Fibonacci for a large number (will be slow)
      const result = fibonacciRecursive(50);

      // Add some additional processing
      /*
    let sum = 0;
    for (let i = 0; i < 1000000; i++) {
      sum += Math.sqrt(i) * Math.sin(i);
    }

     */

      const end = performance.now();

      fibResult.value = {
        fibonacci: result,
        computationTime: (end - start).toFixed(2),
        // additionalSum: sum.toFixed(2),
      };

      isCalculating.value = false;
      span.end();
    },
  );
};

onMounted(() => {
  Sentry.uiProfiler.startProfiler();
  heavyComputation();
  Sentry.uiProfiler.stopProfiler();
});
</script>

<template>
  <div style="margin: 20px 0; padding: 20px; border: 2px solid #007acc">
    <h2>🔥 Profiling Test - CPU Intensive Operations</h2>
    <button
      @click="heavyComputation"
      :disabled="isCalculating"
      style="
        padding: 10px 20px;
        background: #007acc;
        color: white;
        border: none;
        cursor: pointer;
      "
    >
      {{ isCalculating ? "Computing..." : "Run Heavy Computation" }}
    </button>

    <div v-if="isCalculating" style="margin-top: 10px">
      <p>⏳ Computing Fibonacci(40) + additional processing...</p>
    </div>

    <div
      v-if="fibResult"
      style="margin-top: 10px; background: #f0f0f0; padding: 10px"
    >
      <p><strong>Fibonacci(40):</strong> {{ fibResult.fibonacci }}</p>
      <p>
        <strong>Computation Time:</strong> {{ fibResult.computationTime }}ms
      </p>
      <p><strong>Additional Sum:</strong> {{ fibResult?.additionalSum }}</p>
    </div>
  </div>
</template>
