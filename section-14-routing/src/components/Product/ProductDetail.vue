<template>
  <div class="container">
    <h2>Product detail</h2>
    <div v-if="getProductId">
      <p>Product ID: {{ getProductId }}</p>
    </div>
    <div v-else>
      <p>No product ID found</p>
    </div>

    <div v-if="currentRoute.params.categoryId">
      <p>Category ID: {{ currentRoute.params.categoryId }}</p>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";

const currentRoute = useRoute();
console.log(currentRoute.params);

const getProductId = computed(() => {
  return currentRoute.params.productId;
});
</script>
