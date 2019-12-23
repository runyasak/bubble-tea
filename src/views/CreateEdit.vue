<template>
  <div id="create-edit-page">
    <div class="container mx-auto p-4">
      <div class="text-center text-2xl text-primary pb-4 font-bold">
        สร้างคำถาม
      </div>
      <div class="flex justify-center">
        <div class="w-full md:w-1/2">
          <div class="pb-4">
            <label
              class="block text-gray-700 font-bold mb-2"
              for="Title">
              ชื่อหมวดคำถาม
            </label>
            <input
              id="title"
              v-model="title"
              class="shadow appearance-none
              border rounded w-full py-2 px-3 text-gray-700
              leading-tight focus:outline-none focus:shadow-outline"
              type="text">
          </div>
          <div class="pb-4">
            <label
              class="block text-gray-700 font-bold mb-2"
              for="Quiz">
              คำถาม <span class="text-gray-500">(คั่นด้วย , เช่น "Audi,Toyota,Honda")</span>
            </label>
            <input
              id="quiz"
              v-model="wordText"
              class="shadow appearance-none
              border rounded w-full py-2 px-3 text-gray-700
              leading-tight focus:outline-none focus:shadow-outline"
              type="text">
          </div>
          <div class="pt-4 flex justify-center">
            <router-link
              to="/"
              class="min-w-25 bg-white text-center text-primary hover:bg-primary
              border border-primary
              hover:text-white font-bold py-2 px-4 rounded-full">
              ยกเลิก
            </router-link>
            <button
              class="min-w-25 ml-6 bg-primary
              hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
              @click="onSubmit">
              ตกลง
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import logics from '../logics'

export default {
  name: 'CreateEditPage',
  data () {
    return {
      title: '',
      wordText: ''
    }
  },
  computed: {
    words () {
      return this.wordText.split(',').map((word) => word.trim())
    }
  },
  methods: {
    onSubmit () {
      if (this.title && this.words.length > 0) {
        const generateQuizIndex = Math.random().toString(36).substr(2, 5)
        logics.updateGameContentLocally(
          generateQuizIndex,
          { title: this.title, words: this.words.map((word, index) => ({ id: index, text: word })) }
        )
        this.$router.push('/')
      }
    }
  }
}
</script>
