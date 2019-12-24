<template>
  <div id="quizzes-page">
    <div class="container mx-auto p-4">
      <div class="flex flex-wrap -m-2">
        <div class="md:flex w-full md:w-1/3 p-2">
          <router-link
            :to="{ name: 'create' }"
            class="rounded block shadow-lg
              py-12 px-6 w-full text-primary text-center text-2xl
              border border-primary">
            + สร้างคำถาม
          </router-link>
        </div>
        <div
          v-for="(quiz, index) in quizzes"
          :key="index"
          class="md:flex w-full md:w-1/3 p-2">
          <router-link
            :to="{ name: 'game', params: { quizIndex: quiz.quizIndex }}"
            class="relative rounded block shadow-lg
              p-12 w-full text-primary text-center text-2xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="times-circle"
              class="absolute svg-inline--fa fa-times-circle
              fa-w-16 text-danger text-base right-0 top-0 m-4"
              width="16"
              role="img"
              viewBox="0 0 512 512"
              @click.prevent="onDeleteQuizById(quiz.quizIndex)">
              <path
                fill="currentColor"
                d="M256 8C119
                8 8 119 8 256s111 248 248 248 248-111 248-248S393 8
                256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17
                0L256 312l-65.1 65.6c-4.7 4.7-12.3
                4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3
                0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3
                0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7
                65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7
                4.7 12.3 0 17L312 256l65.6 65.1z" />
            </svg>
            {{ quiz.title }}
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import logics from '../logics'

export default {
  name: 'QuizzesPage',
  data () {
    return {
      localQuizData: {}
    }
  },
  computed: {
    quizzes () {
      return Object
        .entries(this.localQuizData)
        .map((items) => ({ quizIndex: items[0], title: items[1].title }))
    }
  },
  async created () {
    const content = await logics.getGameContent().next()
    const { mode, ...filterValue } = content.value
    this.localQuizData = { ...filterValue }
  },
  methods: {
    onDeleteQuizById (value) {
      const filterOutQuizData = Object.keys(this.localQuizData)
        .filter((id) => id !== value)
        .reduce((acc, id) => ({ ...acc, [id]: this.localQuizData[id] }), {})

      localStorage.setItem('content', JSON.stringify(filterOutQuizData))
      this.localQuizData = filterOutQuizData
    }
  }
}
</script>
