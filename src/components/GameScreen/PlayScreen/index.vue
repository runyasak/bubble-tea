<template>
  <div>
    <div class="h-full flex items-center justify-center bg-primary text-white _fs-25vh">
      <div class="w-10/12 break-all text-center">
        {{ wordText }}
      </div>
    </div>
    <div
      class="fixed w-6/12 h-full top-0"
      @click="onCorrect"
    >
      Correct
    </div>
    <div
      class="fixed w-6/12 h-full top-0 left-1/2"
      @click="onNextWord"
    >
      Wrong
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
          content: {}
        }
      }
    }
  },
  data() {
    return {
      wordIndex: 0,
      score: 0
    }
  },
  computed: {
    words() {
      const gameData = this.gameData()
      return gameData.words
    },
    wordText () {
      return this.words[this.wordIndex].text
    }
  },
  methods: {
    onNextWord () {
      this.wordIndex += 1
      if (this.wordIndex === this.words.length) {
        this.wordIndex = 0
        this.$emit('updateScore', this.score)
        this.$emit('changeScreen', 'SummaryScreen')
      }
    },
    onCorrect () {
      this.score += 1
      this.onNextWord()
    }
  }
}
</script>

<style>

</style>
