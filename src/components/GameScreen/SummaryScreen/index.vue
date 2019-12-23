<template>
  <div>
    Total Score {{ score }}
    <div @click="playAgain">
      Play Again
    </div>
    <div @click="selectNewQuiz">
      Select New Quiz
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
    },
    selectNewQuiz() {
      this.$emit('changeScreen', 'WordSelectionScreen')
    }
  }
}
</script>

<style>

</style>
