<template>
  <div class="p-10 h-auto default-box">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'DefaultBoxViews',
  setup () {
    

    return {}
  }
})
</script>

<style scoped>
.default-box {
  border: 1px solid black;
  
}
</style>