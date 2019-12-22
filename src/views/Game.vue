<template>
  <div
    id="game-page"
    class="h-screen overflow-hidden">
    <div v-if="loading">
      Loading
    </div>
    <div v-else>
      <div v-if="finished">
        Summary Score {{ score }}
        <div @click="playAgain">
          Play Again
        </div>
      </div>
      <div v-else>
        <div v-if="wordIndex < words.length && started">
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
        <div v-else>
          <div
            class="fixed w-6/12 h-full top-0 left-1/2"
            @click="started = true"
          >
            Start Game
          </div>
        </div>
      </div>
    </div>
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
      content: {},
      loading: true,
      started: false,
      finished: false
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
      this.loading = false
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
      if (this.wordIndex === this.words.length) {
        this.finished = true
      }
    },
    onCorrect () {
      this.score += 1
      this.onNextWord()
    },
    playAgain () {
      this.wordIndex = 0
      this.score = 0
      this.started = false
      this.finished = false
    }
  }
}
</script>
