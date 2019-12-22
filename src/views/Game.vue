<template>
  <div
    id="game-page"
    class="h-screen overflow-hidden">
    <div class="h-full flex items-center justify-center bg-primary text-white _fs-25vh">
      <div class="w-10/12 break-all text-center">
        {{ wordText }}
      </div>
    </div>
    <div
      class="fixed w-6/12 h-full top-0"
      @click="onCorrect" />
    <div
      class="fixed w-6/12 h-full top-0 left-1/2"
      @click="onNextWord" />
  </div>
</template>

<script>
import logics from '../logics'

const getGameContent = logics.getGameContent()

export default {
  name: 'GamePage',
  props: {
    quizIndex: {
      type: [String, Number],
      default: 0
    }
  },
  data () {
    return {
      wordIndex: 0,
      score: 0,
      content: {}
    }
  },
  computed: {
    words () {
      return this.content[this.quizIndex].words
    },
    wordText () {
      return this.words[this.wordIndex].text
    }
  },
  async created() {
    const content = await getGameContent.next()
    if (content) {
      this.content = content.value
    }
  },
  async mounted() {
    const content = await getGameContent.next()
    if (content) {
      this.content = content.value
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
