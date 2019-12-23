<template>
  <div id="result-page">
    <div class="flex flex-col justify-center items-center text-primary _full-height">
      <span class="_fs-25vh">
        0/10
      </span>
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
  name: 'ResultPage'
}
</script>

<style lang="scss" scoped>
._full-height {
  height: calc(100vh - 70px)
}
</style>
