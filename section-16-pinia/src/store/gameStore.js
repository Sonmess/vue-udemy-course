import { defineStore } from "pinia";

export const useGameStore = defineStore("gameStore", {
  state: () => ({
    score: 50,
    maxHealth: 100,
    maxAttack: 30,
    maxDefense: 30,
  }),

  getters: {
    getScore() {
      return this.score;
    },

    getWinningScore() {
      return this.maxHealth;
    },
    getNextAttack() {
      let attack = Math.floor(Math.random() * this.maxAttack) + 1;
      console.log("getNextAttack", attack);
      return attack;
    },
    getNextDefense() {
      let defense = Math.floor(Math.random() * this.maxDefense) + 1;
      console.log("getNextDefense", defense);
      return defense;
    },
    hasGameEnded() {
      return this.score > this.maxHealth || this.score < 0;
    },
    hasWon() {
      return this.score > this.maxHealth;
    },
    hasLost() {
      return this.score < 0;
    },
  },
  actions: {
    setNextAttack() {
      let attack = Math.floor(Math.random() * this.maxAttack) + 1;
      console.log("setNextAttack", attack);
      this.score += attack;
    },
    setNextDefense() {
      let defense = Math.floor(Math.random() * this.maxDefense) + 1;
      console.log("settNextDefense", defense);
      this.score -= defense;
    },
    resetScore() {
      this.score = 0;
    },
  },
});
