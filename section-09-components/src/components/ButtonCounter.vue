<template>
  <div>
    <button @click="counter++">Press me</button>
    <p>Counter is : {{ counter }}</p>
  </div>
</template>

<script setup>
import { ref, onMounted, onUpdated } from "vue";
const counter = ref(0);

onMounted(() => {
  console.log("onMounted - ButtonCounter.vue");
});

onUpdated(() => {
  console.log("onUpdated - ButtonCounter.vue");
});
</script>

<style scoped>
p {
  color: white;
}
</style>
