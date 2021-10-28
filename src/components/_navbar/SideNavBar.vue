<template>
  <div class="float-left w-48 h-screen top-0 rounded-b-lg bg-gray-600">
    <div>
      <div :class="componentClass">
        <icon v-if="icon" :path="icon" />
        <p>{{ text }}</p>
      </div>
    </div>

    <slot />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import Icon from "../Icon.vue";

export default defineComponent({
  name: "SideNavBar",
  components: {
    Icon,
  },
  props: {
    id: String,
    text: String,
    icon: String,
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
        "border-gray-300",
      ];
      return base;
    });

    return { componentClass };
  },
});
</script>

<style scoped>
</style>