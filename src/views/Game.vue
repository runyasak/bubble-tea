<template>
  <div
    id="game-page"
    class="h-screen overflow-hidden">
    <div class="h-full flex items-center justify-center bg-primary text-white _fs-25vh">
      <div class="w-10/12 break-all text-center">
        Titanic
      </div>
    </div>
  </div>
</template>

<script>
import logics from '../logics'

export default {
  name: 'GamePage',
  data() {
    return {
      content: {}
    }
  },
  async created() {
    this.content = await logics.fetchGameContent()
  }
}
</script>
