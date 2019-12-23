<template>
  <div>
    Total Score {{ score }}
  </div>
</template>

<script>
export default {
  props: {
    gameData: {
      type: Function,
      default() {
        return {
          score: 0
        }
      }
    }
  },
  computed: {
    score() {
      const gameData = this.gameData()
      return gameData.score
    }
  }
}
</script>

<style>

</style>
