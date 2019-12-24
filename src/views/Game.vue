<template>
  <div
    id="game-page"
    class="h-screen overflow-hidden">
    <template v-if="isPrepared">
      <game-word-screen
        color="gray-700"
        :word-text="`${prepareTime}`" />
    </template>
    <template v-else-if="!isFinished">
      <div class="fixed top-0 text-4xl text-white ml-4 mt-4">
        {{ gameTime }}
      </div>
      <game-word-screen
        :color="screenColor"
        :word-text="wordText" />
      <div
        class="fixed w-6/12 h-full top-0"
        @click="onCorrect" />
      <div
        class="fixed w-6/12 h-full top-0 left-1/2"
        @click="onSkip" />
    </template>
    <template v-else>
      <game-word-screen
        color="gray-700"
        word-text="จบเกม" />
    </template>
  </div>
</template>

<script>
import logics from '../logics'

let gameInterval
let prepareInterval

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
      words: [],
      skipWords: [],
      wordIndex: 0,
      score: 0,
      maxScore: 0,
      gameTime: 60,
      prepareTime: 3,
      screenActive: {
        correct: false,
        skip: false,
        finish: false
      }
    }
  },
  computed: {
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

      return this.words.length > 0 ? this.words[this.wordIndex].text : ''
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
    isPrepared () {
      return this.prepareTime > 0
    },
    isFinished () {
      return this.gameTime === 0 || this.score === this.maxScore
    }
  },
  async created() {
    this.gameTime += this.prepareTime
    gameInterval = setInterval(() => {
      this.gameTime -= 1
      if (this.gameTime === 0) {
        clearInterval(gameInterval)
      }
    }, 1000)

    prepareInterval = setInterval(() => {
      this.prepareTime -= 1
      if (this.prepareTime === 0) {
        clearInterval(prepareInterval)
      }
    }, 1000)

    const content = await logics.getGameContent().next()

    if (content) {
      this.words = content.value[this.quizIndex].words
      this.maxScore = this.words.length
    }
  },
  mounted () {
    window.addEventListener('keyup', this.onKeyup)
  },
  beforeDestroy() {
    clearInterval(gameInterval)
    clearInterval(prepareInterval)
    window.removeEventListener('keyup', this.onKeyup)
  },
  methods: {
    setTimeOutScreen (type = 'correct', timeout = 1000) {
      this.screenActive[type] = true
      setTimeout(() => { this.screenActive[type] = false }, timeout)
    },
    findWordByIndex (value) {
      return this.words.find((word, index) => index === value)
    },
    onKeyup ({ keyCode }) {
      const isKeyupLeft = keyCode === 37
      const isKeyupRight = keyCode === 39

      if (!this.isPrepared && !this.isFinished) {
        if (isKeyupLeft) {
          this.onSkip()
        } else if (isKeyupRight) {
          this.onCorrect()
        }
      } else if (this.isFinished && isKeyupRight) {
        localStorage.setItem('score', `${this.score}/${this.maxScore}`)
        this.$router.push({ name: 'result' })
      }
    },
    onNextWord () {
      if (this.wordIndex === this.words.length - 1) {
        this.words = [...this.skipWords]
        this.skipWords = []
        this.wordIndex = 0
      } else {
        this.wordIndex += 1
      }
    },
    onSkip () {
      this.skipWords.push(this.findWordByIndex(this.wordIndex))
      this.setTimeOutScreen('skip')
      this.onNextWord()
    },
    onCorrect () {
      this.score += 1
      this.setTimeOutScreen('correct')
      this.onNextWord()
    }
  }
}
</script>
