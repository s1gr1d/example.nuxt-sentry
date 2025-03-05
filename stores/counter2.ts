import { defineStore } from "#imports";

export const useCounterStore2 = defineStore("counter2", {
  state: () => ({ name: "Counter Store 2", count: 0 }),
  actions: {
    increment() {
      this.count++;
    },
  },
});
