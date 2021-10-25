<template>
<div class="float-left h-screen ">
  <div
    :class="componentClass"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-5 w-5 mr-2"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        d="M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z"
      />
    </svg>
    <p>{{ text }}</p>
  </div>
  <div class="relative w-48 h-full top-0 rounded-b-lg bg-gray-600 ">
    <slot />
  </div>
  
</div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";

export default defineComponent({
  name: "SideNavBar",
  props: {
    id: String,
    text: String,
  },

  setup(props) {
    const componentClass = computed(() => {
      const base = [
      "h-20",
      "w-48",
      "rounded-tl-lg",
      "bg-gray-800",
      "text-white",
      "font-extrabold",
      "flex",
      "items-center",
      "justify-center",
      "border-b-2",
      "border-gray-300"
      ];
      return base;
    });

    return { componentClass}
  },
});
</script>

<style scoped>

</style>