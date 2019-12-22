<template>
  <div>
    Word Selection
    {{ wordCategories }}
  </div>
</template>

<script>
export default {
  props: {
    gameData: {
      type: Function,
      default() {
        return {
          content: {}
        }
      }
    }
  },
  computed: {
    wordCategories() {
      let wordCategories
      const gameData = this.gameData()
      if ('content' in gameData) {
        delete gameData.content.mode
        const categories = Object.keys(this.gameData().content)
        wordCategories = categories.map((category) => gameData.content[category].title)
      }
      return wordCategories
    }
  }
}
</script>

<style>

</style>
