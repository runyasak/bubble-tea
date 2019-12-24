<template>
  <div id="create-edit-page">
    <div class="container mx-auto p-4">
      <div class="text-center text-2xl text-primary pb-4 font-bold">
        Export
      </div>
      <div class="pb-4">
        Copy ด้านล่างนี้ไป <span class="text-primary">Import</span> ที่เครื่องอื่น
      </div>
      <input
        id="quiz-data"
        :value="quizData"
        readonly
        class="shadow appearance-none
        border rounded w-full py-2 px-3 text-gray-700
        leading-tight focus:outline-none focus:shadow-outline"
        type="text">
    </div>
  </div>
</template>

<script>
export default {
  name: 'ExportPage',
  data () {
    return {
      quizData: localStorage.getItem('content')
    }
  }
}
</script>
