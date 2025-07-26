<template>
  <div class="container text-center mt-4">
    <p>Let's play the game</p>
    <h3 class="text-primary pb-3">Current score: {{ gameStore.getScore }}</h3>
    <span class="text-primary pb-3"
      >Maximum score: {{ gameStore.maxHealth }}</span
    >
    <br />
    <div class="row">
      <div v-if="gameStore.hasWon" class="text-success pb-3 h3">You Won!</div>
      <div v-if="gameStore.hasLost" class="text-danger pb-3 h3">You lost!</div>
    </div>
    <div class="row mt-4" v-if="!gameStore.hasGameEnded">
      <div class="col-5 offset-1">
        <button class="form-control btn btn-success p-4" @click="increment">
          Increment
        </button>
      </div>

      <div class="col-5">
        <button class="form-control btn btn-danger p-4" @click="decrement">
          Decrement
        </button>
      </div>

      <div class="col-6 offset-3 pt-2">
        <button
          class="form-control btn btn-warning p-4"
          @click="randomOperation"
        >
          Random
        </button>
      </div>
    </div>
    <div v-else>
      <button
        class="form-control btn btn-primary p-4"
        @click="gameStore.resetScore()"
      >
        Reset game
      </button>
    </div>
  </div>
</template>

<script setup>
import { useGameStoreNew } from "@/store/gameStoreNew";

function increment() {
  gameStore.setNextAttack();
}

function decrement() {
  gameStore.setNextDefense();
}

function randomOperation() {
  Math.random() > 0.5 ? increment() : decrement();
}

const gameStore = useGameStoreNew();
</script>
