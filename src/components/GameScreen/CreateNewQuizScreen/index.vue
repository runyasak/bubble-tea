<template>
  <div>
    Create New Quiz
    <div>Quiz Name</div>
    <input v-model="quizName">
    <div>Add new word</div>
    <input v-model="newWord">
    <button @click="addNewWord">Add</button>
    <div>
      <template v-for="word in words">
        <li :key="word">
          {{ word }}
        </li>
      </template>
    </div>
    <button @click="createQuiz">
      Create Quiz
    </button>
  </div>
</template>

<script>
import logics from '../../../logics'

export default {
  data() {
    return {
      quizName: '',
      newWord: '',
      words: []
    }
  },
  methods: {
    addNewWord() {
      if (this.newWord.length > 2) {
        this.words.push(this.newWord)
        this.newWord = ''
      }
    },
    createQuiz() {
      if (this.quizName.length > 3 && this.words.length > 5) {
        const quizKey = `user-${this.quizName.replace(/\s+/g, '-').toLowerCase()}`
        const quiz = {
          title: this.quizName,
          words: this.words.map((word, index) => ({
            id: index,
            text: word
          }))
        }
        logics.updateGameContentLocally(quizKey, quiz)
      }
    }
  }
}
</script>

<style>

</style>
