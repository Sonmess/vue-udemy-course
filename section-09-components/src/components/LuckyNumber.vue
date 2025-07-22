<template>
  <div class="row m-2 p-2 text-center">
    <div class="col-12">
      <button class="btn btn-outline-danger" @click="generateLuckyNumber">
        Generate lucky number
      </button>
      <div>Current number : {{ luckyNumber }}</div>
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps, inject } from "vue";

let luckyNumber = ref(0);

const maxNumber = inject("maxLuckyNumber");

const generateLuckyNumber = () => {
  luckyNumber.value = Math.floor(Math.random() * maxNumber.value);
  console.log(luckyNumber.value);
};
</script>
