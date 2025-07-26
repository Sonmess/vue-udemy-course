<template>
  <div class="d-flex flex-column min-vh-100">
    <BaseHeader />
    <div class="flex-grow-1">
      <RouterView />
    </div>
    <BaseFooter />
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
import BaseHeader from './components/layout/BaseHeader.vue'
import BaseFooter from './components/layout/BaseFooter.vue'
</script>
