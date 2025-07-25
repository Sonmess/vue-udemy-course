<template>
  <div class="container">
    <h2>Homepage</h2>

    <button @click="goToContact">Contact us</button>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
const goToContact = () => {
  router.push({ name: "contact" });
};
</script>
