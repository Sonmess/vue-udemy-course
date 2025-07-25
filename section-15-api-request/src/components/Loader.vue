<template>
  <div class="container overlay">
    <div class="loader" />
  </div>
</template>

<style scoped>
.overlay {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  cursor: pointer;
}
/* HTML: <div class="loader"></div> */
.loader {
  width: 50px;
  aspect-ratio: 1;
  display: grid;
  animation: l14 4s infinite;
}
.loader::before,
.loader::after {
  content: "";
  grid-area: 1/1;
  border: 8px solid;
  border-radius: 50%;
  border-color: red red #0000 #0000;
  mix-blend-mode: darken;
  animation: l14 1s infinite linear;
}
.loader::after {
  border-color: #0000 #0000 blue blue;
  animation-direction: reverse;
}
@keyframes l14 {
  100% {
    transform: rotate(1turn);
  }
}
</style>
