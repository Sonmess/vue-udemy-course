<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <h1 class="text-center p-3 text-success h1">Count o Pedia</h1>
    <hr />
    <div class="row">
      <div class="col-4 offset-1">
        <router-link
          to="/"
          class="form-control badge rounded-pill text-bg-warning p-4"
          >Home</router-link
        >
      </div>

      <div class="col-4 offset-1">
        <router-link
          to="/info"
          class="form-control badge rounded-pill text-bg-warning p-4"
          >Info</router-link
        >
      </div>
    </div>
  </header>

  <RouterView />
</template>
