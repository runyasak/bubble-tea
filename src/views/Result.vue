<template>
  <div id="result-page">
    <div class="flex flex-col justify-center items-center text-primary _full-height">
      <div class="_fs-10vh">
        คะแนนของคุณ
      </div>
      <div class="_fs-25vh">
        {{ score }} / {{ maxScore }}
      </div>
      <router-link
        to="/"
        class="min-w-25 bg-white text-center text-primary hover:bg-primary
        border border-primary
        hover:text-white font-bold py-2 px-4 rounded-full">
        กลับไปหน้าหลัก
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ResultPage',
  data () {
    return {
      localScoreText: localStorage.getItem('score')
    }
  },
  computed: {
    score () {
      return this.localScoreText.split('/')[0]
    },
    maxScore () {
      return this.localScoreText.split('/')[1]
    }
  }
}
</script>

<style lang="scss" scoped>
._full-height {
  height: calc(100vh - 70px)
}
</style>
