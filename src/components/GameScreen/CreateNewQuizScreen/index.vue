<template>
  <div>
    Create New Quiz
    <div>Quiz Name</div>
    <input v-model="quizName">
  </div>
</template>

<script>
export default {
  data() {
    return {
      quizName: ''
    }
  }
}
</script>

<style>

</style>
