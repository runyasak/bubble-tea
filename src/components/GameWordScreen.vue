<template>
  <div
    class="h-full flex items-center justify-center text-white _fs-25vh"
    :class="`bg-${color}`">
    <div class="w-10/12 break-all text-center">
      {{ wordText }}
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
    }
  }
}
</script>
