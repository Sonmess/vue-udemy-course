<template>
  <div class="container">
    <h2 class="text-center">Info page</h2>

    <p class="text-center">This is some info text</p>
    <p class="text-center">
      This is a game where you can increment, decrement or randomize the score.
      The score starts at 50 and you can win by reaching
      {{ gameStore.getWinningScore }}.
    </p>

    <br />
    <input placeholder="score" type="text" v-model="gameStore.maxHealth" />
  </div>
</template>

<script setup>
import { useGameStoreNew } from "@/store/gameStoreNew";

const gameStore = useGameStoreNew();
</script>
