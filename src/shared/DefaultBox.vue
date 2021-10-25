<template>
  <div class="default-box">
    <slot />
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
  .default-box{
    @apply flex items-center justify-center bg-gray-200 h-52 w-full sm:rounded sm:shadow-md
  }
</style>