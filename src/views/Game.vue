<template>
  <div
    id="game-page"
    class="h-screen overflow-hidden">
    <game-word-screen
      :color="screenColor"
      :word-text="wordText" />
    <div
      class="fixed w-6/12 h-full top-0"
      @click="onCorrect" />
    <div
      class="fixed w-6/12 h-full top-0 left-1/2"
      @click="onNextWord" />
  </div>
</template>

<script>
import db from '../../public/db.json'

export default {
  name: 'GamePage',
  components: {
    GameWordScreen: () => import('@/components/GameWordScreen')
  },
  props: {
    quizIndex: {
      type: [String, Number],
      default: 0
    }
  },
  data () {
    return {
      wordIndex: 0,
      score: 0
    }
  },
  computed: {
    words () {
      return db[this.quizIndex].words
    },
    wordText () {
      return this.words[this.wordIndex].text
    },
    screenColor () {
      return 'primary'
    }
  },
  methods: {
    onNextWord () {
      this.wordIndex += 1
    },
    onCorrect () {
      this.score += 1
      this.onNextWord()
    }
  }
}
</script>
