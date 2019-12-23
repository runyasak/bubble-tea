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
  </div>
</template>

<script>
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
    }
  }
}
</script>

<style>

</style>
