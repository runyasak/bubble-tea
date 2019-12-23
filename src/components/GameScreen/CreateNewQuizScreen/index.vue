<template>
  <div>
    Create New Quiz
    <div>Quiz Name</div>
    <input v-model="quizName">
    <div>Add new word</div>
    <input v-model="newWord">
    <div>
      <button
        v-if="editing"
        @click="editWord"
      >
        Save
      </button>
      <button
        v-else
        @click="addNewWord"
      >
        Add
      </button>
    </div>
    <div>
      <template v-for="(word, index) in words">
        <li :key="word">
          {{ word }}
          <button
            v-if="editing"
            @click="cancelEdit()"
          >
            Cancel
          </button>
          <button
            v-else
            @click="getEditWord(index)">
            Edit
          </button>
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
      prevWord: '',
      words: [],
      editing: false,
      editIndex: 0
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
    },
    getEditWord(index) {
      this.prevWord = this.newWord
      this.newWord = this.words[index]
      this.editIndex = index
      this.editing = true
    },
    editWord() {
      if (this.newWord.length > 2) {
        this.words[this.editIndex] = this.newWord
        this.cancelEdit()
      }
    },
    cancelEdit() {
      this.newWord = this.prevWord
      this.editing = false
    }
  }
}
</script>

<style>

</style>
