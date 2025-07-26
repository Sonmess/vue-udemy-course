import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useGameStoreNew = defineStore("gameStoreNew", () => {
  const score = ref(50);
  const maxHealth = ref(100);
  const maxAttack = ref(30);
  const maxDefense = ref(10);

  const getScore = computed(() => {
    return score.value;
  });

  const getWinningScore = computed(() => maxHealth.value);

  const getNextAttack = computed(() => {
    let attack = Math.floor(Math.random() * maxAttack.value) + 1;
    console.log("getNextAttack", attack);
    return attack;
  });

  const getNextDefense = computed(() => {
    let defense = Math.floor(Math.random() * maxDefense.value) + 1;
    console.log("getNextDefense", defense);
    return defense;
  });

  const hasGameEnded = computed(() => {
    return score.value > maxHealth.value || score.value < 0;
  });

  const hasWon = computed(() => score.value > maxHealth.value);

  const hasLost = computed(() => score.value < 0);

  const setNextAttack = () => {
    let attack = Math.floor(Math.random() * maxAttack.value) + 1;
    console.log("setNextAttack", attack);
    score.value += attack;
  };

  const setNextDefense = () => {
    let defense = Math.floor(Math.random() * maxDefense.value) + 1;
    console.log("settNextDefense", defense);
    score.value -= defense;
  };

  const resetScore = () => {
    score.value = 50;
  };

  return {
    maxHealth,
    getScore,
    getWinningScore,
    hasGameEnded,
    hasWon,
    hasLost,
    setNextAttack,
    setNextDefense,
    resetScore,
  };
});
