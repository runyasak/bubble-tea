<template>
  <div id="app">
    <nav
      v-if="$route.name !== 'game'"
      class="sticky top-0 flex items-center justify-between flex-wrap bg-primary p-2">
      <div class="container mx-auto text-center text-4xl">
        <span class="text-white font-bold">Bubble</span>
        <span class="text-secondary font-bold"> Tea</span>
        <span class="text-white font-bold"> .</span>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2C3E50;
}
</style>
