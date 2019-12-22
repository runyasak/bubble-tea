<template>
  <div>
    <span>Bubble Tea</span>
    <button
      @click="startGame"
    >
      Start Game
    </button>
    <button
      @click="editWord"
    >
      Edit Word
    </button>
    <button>View Scores</button>
  </div>
</template>

<script>
export default {
  methods: {
    startGame() {
      this.$emit('changeScreen', 'PlayScreen')
    },
    editWord() {
      this.$emit('changeScreen', 'WordEditingScreen')
    }
  }
}
</script>

<style>

</style>
