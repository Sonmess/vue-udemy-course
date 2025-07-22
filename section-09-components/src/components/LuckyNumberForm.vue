<template>
  <h1>Learn slot</h1>
  <div class="container bg-info rounded mt-4 p-2">
    <div class="row text-center">
      <div class="col-12">
        <slot />
      </div>
    </div>

    <div class="row">
      <div class="col-6 offset-3">
        <button
          @click="showNewVersion = !showNewVersion"
          class="btn btn-primary text-black m-2"
        >
          Toggle component
        </button>
      </div>

      <div class="col-12">
        <keep-alive include="LuckyNumberV2">
          <component :is="currentComponent" />
        </keep-alive>
      </div>
    </div>

    <div class="row">
      <div class="col-12">
        <slot name="learnSlot"></slot>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import LuckyNumber from "./LuckyNumber.vue";
import LuckyNumberV2 from "./LuckyNumberV2.vue";

const showNewVersion = ref(false);

const currentComponent = computed(() => {
  return showNewVersion.value ? LuckyNumberV2 : LuckyNumber;
});
</script>

<style scoped>
h1 {
  background-color: green;
}
</style>
