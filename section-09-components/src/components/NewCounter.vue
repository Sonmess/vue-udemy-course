<template>
  <div class="container m-2 p-2">
    <div class="row">
      <button class="col-6" @click="increment">Increment</button>
      <button class="col-6" @click="decrement">Decrement</button>
      <p class="col-3 offset-5">{{ count }}</p>
    </div>
  </div>
</template>

<script setup>
import { useCounter } from "@/composibles/useCounter";

const { count, increment, decrement } = useCounter(100, 10);
</script>
