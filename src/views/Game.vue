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
      @click="onSkip" />
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
      words: db[this.quizIndex].words,
      skipWords: [],
      wordIndex: 0,
      score: 0,
      maxScore: 0,
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
      return this.score === this.maxScore
    }
  },
  mounted () {
    this.maxScore = this.words.length
    window.addEventListener('keyup', this.onKeyup)
  },
  beforeDestroy() {
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

      if (isKeyupLeft) {
        this.onSkip()
      } else if (isKeyupRight) {
        this.onCorrect()
      }
    },
    onNextWord () {
      this.wordIndex += 1
    },
    onSkip () {
      this.skipWords.push(this.findWordByIndex(this.wordIndex))
      this.setTimeOutScreen('skip')
      this.onNextWord()
    },
    onCorrect () {
      this.score += 1
      if (this.isFinished) {
        this.screenActive.finish = true
      } else if (this.wordIndex === this.words.length - 1) {
        this.words = [...this.skipWords]
        this.skipWords = []
        this.wordIndex = 0
        this.setTimeOutScreen('correct')
      } else {
        this.setTimeOutScreen('correct')
        this.onNextWord()
      }
    }
  }
}
</script>
