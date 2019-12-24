<template>
  <div id="create-edit-page">
    <div class="container mx-auto p-4">
      <div class="text-center text-2xl text-primary pb-4 font-bold">
        Import
      </div>
      <div class="pb-4">
        นำข้อมูลที่ Copy จากการ
        <span class="text-primary">Export</span>
        มาได้ใส่ในกล่องข้อความนี้ แล้วกดปุ่ม "ตกลง"
      </div>
      <div
        v-if="!validateQuizData"
        class="pb-4 text-danger">
        ข้อมูลไม่ถูกต้อง ตรวจสอบเครื่องหมายปีกกาให้ถูกต้อง
      </div>
      <input
        id="quiz-data"
        v-model="quizData"
        class="shadow appearance-none
        border rounded w-full py-2 px-3 text-gray-700
        leading-tight focus:outline-none focus:shadow-outline mb-4"
        type="text">
      <button
        :disabled="!validateQuizData"
        class="min-w-25 bg-primary
        hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        @click="onSubmit">
        ตกลง
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ImportPage',
  data () {
    return {
      quizData: ''
    }
  },
  computed: {
    validateQuizData () {
      if (this.quizData === '') return true

      try {
        JSON.parse(this.quizData)
        return true
      } catch {
        return false
      }
    }
  },
  methods: {
    onSubmit () {
      localStorage.setItem('content', this.quizData)
      this.$router.push('/')
    }
  }
}
</script>
