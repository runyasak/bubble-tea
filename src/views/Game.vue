<template>
  <div
    id="game-page"
    class="h-screen overflow-hidden"
  >
    <div v-if="loading">
      <loader />
    </div>
    <div v-else>
      <component :is="gameScreen" @changeScreen="onScreenChangingRequested" />
    </div>
  </div>
</template>

<script>
import logics from '../logics'
import Loader from '../components/Common-UI/Loader/index.vue'
import TitleScreen from '../components/GameScreen/TitleScreen/index.vue'
import PlayScreen from '../components/GameScreen/PlayScreen/index.vue'
import WordEditingScreen from '../components/GameScreen/WordEditingScreen/index.vue'

const getGameContent = logics.getGameContent()

export default {
  name: 'GamePage',
  components: {
    Loader,
    TitleScreen,
    PlayScreen,
    WordEditingScreen
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
      score: 0,
      content: {},
      loading: true,
      started: false,
      finished: false,
      gameScreen: 'TitleScreen'
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
    },
    onScreenChangingRequested(screen) {
      this.gameScreen = screen
    }
  }
}
</script>
