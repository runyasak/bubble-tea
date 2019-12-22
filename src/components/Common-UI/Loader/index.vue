<template>
  <div class="spinner">
    <div class="square" />
  </div>
</template>

<style lang="scss">
.spinner {
  text-align: center;

  & .square {
    width: 50px;
    height: 50px;
    -webkit-animation: squareDelay 4s 0s infinite cubic-bezier(0.09, 0.57, 0.49, 0.9);
    animation: squareDelay 4s 0s infinite cubic-bezier(0.09, 0.57, 0.49, 0.9);
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    perspective: 100px;
    background: #ad8c43;
    display: inline-block;
  }
}

@-webkit-keyframes squareDelay {
  25% {
    -webkit-transform: rotateX(180deg) rotateY(0);
    transform: rotateX(180deg) rotateY(0);
    background: #ffcf97;
  }
  50% {
    -webkit-transform: rotateX(180deg) rotateY(180deg);
    transform: rotateX(180deg) rotateY(180deg);
    background: #ad8c43;
  }
  75% {
    -webkit-transform: rotateX(0) rotateY(180deg);
    transform: rotateX(0) rotateY(180deg);
    background: #ffcf97;
  }
  100% {
    -webkit-transform: rotateX(0) rotateY(0);
    transform: rotateX(0) rotateY(0);
    background: #ad8c43;
  }
}

@keyframes squareDelay {
  25% {
    -webkit-transform: rotateX(180deg) rotateY(0);
    transform: rotateX(180deg) rotateY(0);
    background: #ffcf97;
  }
  50% {
    -webkit-transform: rotateX(180deg) rotateY(180deg);
    transform: rotateX(180deg) rotateY(180deg);
    background: #d4ae5b;
  }
  75% {
    -webkit-transform: rotateX(0) rotateY(180deg);
    transform: rotateX(0) rotateY(180deg);
    background: #ffcf97;
  }
  100% {
    -webkit-transform: rotateX(0) rotateY(0);
    transform: rotateX(0) rotateY(0);
    background: #ad8c43;
  }
}
</style>
