<template>
  <div class="container">
    <h2>Product list</h2>
    <p>Here is the list of products:</p>
    <ul>
      <li v-for="product in products">
        <router-link
          :to="{
            name: 'product-detail',
            params: { productId: product.id, categoryId: 77 },
          }"
          >{{ product.name }}</router-link
        >
      </li>
    </ul>
  </div>
</template>

<script setup>
const products = [
  {
    id: 1,
    name: "Mobil",
  },
  {
    id: 2,
    name: "Myska",
  },
  {
    id: 3,
    name: "Klavesnica",
  },
];
</script>
