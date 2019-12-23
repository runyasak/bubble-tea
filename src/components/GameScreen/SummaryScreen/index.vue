<template>
  <div>
    Total Score {{ score }}
    <div @click="playAgain">
      Play Again
    </div>
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
  },
  methods: {
    playAgain() {
      this.$emit('changeScreen', 'PlayScreen')
    }
  }
}
</script>

<style>

</style>
