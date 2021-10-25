<template>
  <section class="base-container teste bg-yellow-100">
    <slot />
  </section>
</template>

<script setup lang="ts">
</script>

<style>
.base-container {
  @apply w-max h-screen float-left p-2
}

.teste {
  border: 1px solid green
}

</style>