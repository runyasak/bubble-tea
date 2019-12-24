<template>
  <div
    class="h-full flex items-center justify-center text-white"
    :class="`bg-${color}`">
    <div class="w-10/12 break-all text-center">
      <div class="_fs-25vh">
        {{ wordText }}
      </div>
      <div v-if="description">
        {{ description }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GameWordScreen',
  props: {
    wordText: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: 'primary'
    },
    description: {
      type: String,
      default: ''
    }
  }
}
</script>
