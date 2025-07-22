<template>
  <div class="container bg-info rounded mb-4 p-2">
    <div class="row m-2 p-2 text-center">
      <div class="col-12">
        <h4 class="text-success">Random number generator</h4>
        <hr />
        Max Range :
        <input class="rounded pl-2" type="number" v-model.number="maxNumber" />
        <button class="btn btn-success mt-2" @click="generateLuckyNumber">
          Generate lucky number
        </button>
        <div>Current number : {{ luckyNumber }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

let luckyNumber = ref(0);
const maxNumber = ref(100);

const generateLuckyNumber = () => {
  luckyNumber.value = Math.floor(Math.random() * maxNumber.value);
  console.log(luckyNumber.value);
};
</script>
