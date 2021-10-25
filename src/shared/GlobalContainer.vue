<template>
  <div  class="w-full">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: "GlobalContainer",
  setup () {
    

    return {}
  }
})
</script>

<style scoped>
  .teste {
    border: 1px solid red
  }
</style>