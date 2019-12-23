<template>
  <div>
    Create New Quiz
    <div>Quiz Name</div>
    <input v-model="quizName">
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
      words: []
    }
  }
}
</script>

<style>

</style>
