<template>
  <div id="quizzes-page">
    <div class="container mx-auto p-4">
      <div class="flex flex-wrap -m-2">
        <div
          v-for="(quiz, index) in quizzes"
          :key="index"
          class="md:flex w-full md:w-1/3 p-2">
          <router-link
            :to="{ name: 'game', params: { quizIndex: quiz.quizIndex }}"
            class="rounded block shadow-lg
              p-12 w-full text-primary text-center text-2xl">
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
      quizzes: []
    }
  },
  async created () {
    const content = await logics.getGameContent().next()
    const { mode, ...filterValue } = content.value
    this.quizzes = Object.entries(filterValue)
      .map((items) => ({ quizIndex: items[0], title: items[1].title }))
  }
}
</script>
