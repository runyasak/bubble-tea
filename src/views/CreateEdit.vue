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
              v-model="formData.title"
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
              hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
              ตกลง
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CreateEditPage',
  data () {
    return {
      formData: {
        title: ''
      }
    }
  }
}
</script>
