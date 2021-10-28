<template>
  <div
    class="top-0 flex h-20 border-b border-gray-300 bg-yellow-50 items-center"
  >
    <div class="p-4">
      <a href="#" class="font-semibold">Dashobard</a>
    </div>
    <div class="w-full list-none">
      <li class="float-right p-4 ">
        <button class="font-thin"> Stats</button>
      </li>
      <li class="float-right  p-4 ">
        <button class="font-thin">Notifications</button>
      </li>
      <li class="float-right  p-4 ">
        <button class="font-thin">Exit</button>
      </li>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";

export default defineComponent({
  name: "TopSideBar",
  props: {
    id: String,
    text: String,
  },

  setup(props) {
    const componentClass = computed(() => {
      const base = [
        "h-14",
        "w-48",
        "rounded-tl-lg",
        "bg-gray-800",
        "text-white",
        "font-extrabold",
        "flex",
        "items-center",
        "justify-center",
        "border-3",
        "border-blue-600",
        "border",
      ];
      return base;
    });

    return { componentClass };
  },
});
</script>

<style scoped>
.teste {
  border: 1px solid red;
}
</style>