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
    <!-- game-word-screen
      :color="screenColor"
      :word-text="wordText" /-->
    <!-- div
      class="fixed w-6/12 h-full top-0"
      @click="onCorrect" /-->
    <!--div
      class="fixed w-6/12 h-full top-0 left-1/2"
      @click="onSkip" /-->
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
import CreateNewQuizScreen from '../components/GameScreen/CreateNewQuizScreen/index.vue'
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
    CreateNewQuizScreen,
    ScoreboardScreen
    GameWordScreen: () => import('@/components/GameWordScreen')
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
      quizIndex: 0,
      screenActive: {
        correct: false,
        skip: false,
        finish: false
      }
    }
  },
  computed: {
    words () {
      return this.content[this.quizIndex].words
      // return db[this.quizIndex].words
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
    },
    wordText () {
      if (this.screenActive.correct) {
        return 'ถูกต้อง'
      }

      if (this.screenActive.skip) {
        return 'ข้าม'
      }

      if (this.screenActive.finish) {
        return 'จบเกม'
      }

      return this.words[this.wordIndex].text
    },
    screenColor () {
      if (this.screenActive.correct) {
        return 'success'
      }

      if (this.screenActive.skip) {
        return 'secondary'
      }

      if (this.screenActive.finish) {
        return 'gray-700'
      }

      return 'primary'
    },
    isFinished () {
      return this.score === this.words.length
    },
    setTimeOutScreen (type = 'correct', timeout = 1000) {
      this.screenActive[type] = true
      setTimeout(() => { this.screenActive[type] = false }, timeout)
    },
    onNextWord () {
      this.wordIndex += 1
    },
    onSkip () {
      this.setTimeOutScreen('skip')
      this.onNextWord()
    },
    onCorrect () {
      this.score += 1
      if (this.isFinished) {
        this.screenActive.finish = true
      } else {
        this.setTimeOutScreen('correct')
        this.onNextWord()
      }
    }
  }
}
</script>
