<template>
  <div>
    <span>Bubble Tea</span>
    <button @click="startGame">Start Game</button>
    <button>Edit Word</button>
    <button>View Scores</button>
  </div>
</template>

<script>
export default {
  methods: {
    startGame() {
      this.$emit('changeScreen', 'PlayScreen')
    }
  }
}
</script>

<style>

</style>
