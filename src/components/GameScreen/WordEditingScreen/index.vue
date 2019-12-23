<template>
  <div>
    Word Editing
    <div @click="createNewQuiz">
      Create New Quiz
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    createNewQuiz() {
      this.$emit('changeScreen', 'CreateNewQuizScreen')
    }
  }
}
</script>

<style>

</style>
