<template>
  <div
    id="game-page"
    class="h-screen overflow-hidden"
  >
    <div v-if="loading">
      <loader />
    </div>
    <div v-else>
      <component
        :is="gameScreen"
        :game-data="gameData"
        @changeScreen="onScreenChangingRequested"
        @gameStart="onGameStart"
        @updateScore="onScoreUpdate"
      />
    </div>
  </div>
</template>

<script>
import logics from '../logics'
import Loader from '../components/Common-UI/Loader/index.vue'
import TitleScreen from '../components/GameScreen/TitleScreen/index.vue'
import WordSelectionScreen from '../components/GameScreen/WordSelectionScreen/index.vue'
import PlayScreen from '../components/GameScreen/PlayScreen/index.vue'
import SummaryScreen from '../components/GameScreen/SummaryScreen/index.vue'
import WordEditingScreen from '../components/GameScreen/WordEditingScreen/index.vue'
import ScoreboardScreen from '../components/GameScreen/ScoreboardScreen/index.vue'

const getGameContent = logics.getGameContent()

export default {
  name: 'GamePage',
  components: {
    Loader,
    TitleScreen,
    WordSelectionScreen,
    PlayScreen,
    SummaryScreen,
    WordEditingScreen,
    ScoreboardScreen
  },
  props: {
    quizIndexRoute: {
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
      gameScreen: 'TitleScreen',
      quizIndex: 0
    }
  },
  computed: {
    words () {
      return this.content[this.quizIndex].words
    }
  },
  async created() {
    const content = await getGameContent.next()
    if (content) {
      this.content = content.value
      this.loading = false
    }
    this.quizIndex = this.quizIndexRoute
  },
  async mounted() {
    const content = await getGameContent.next()
    if (content) {
      this.content = content.value
    }
  },
  methods: {
    onScreenChangingRequested(screen) {
      this.gameScreen = screen
    },
    gameData() {
      const { score, quizIndex, content, words } = this
      return {
        score, quizIndex, content, words
      }
    },
    onGameStart(index) {
      this.quizIndex = index
    },
    onScoreUpdate(score) {
      this.score = score
    }
  }
}
</script>
