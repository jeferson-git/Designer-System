<template>
  <div :class="componentClass">
    <component class="" :is="is" :to="to" :href="href">
      {{ text }}
      <!-- <router-link :to="routerValue"> {{ text }} </router-link> -->
    </component>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";

export default defineComponent({
  components: {},
  props: {
    id: String,
    text: String,
    color: String,
    hoverColor: String,
    href: String,
    to: String,
  },
  name: "ButtonNavBar",
  setup(props) {
    const componentClass = computed(() => {
      const base = [
        "w-full",
        "py-4",
        "px-4",
        "text-center",
        props.color ? "text-" + props.color + "-300" : "text-gray-300",
        props.hoverColor
          ? "text-" + props.hoverColor + "-400"
          : "hover:text-yellow-400",
        "transform",
        "hover:scale-110",
        "transition",
        "duration-300",
        "ease-in",
        "cursor-pointer",
      ];
      return base;
    });

    const is = computed(() => {
      if (props.href) {
        return "a";
      }
      if (props.to) {
        return "router-link";
      }

      return "div";
    });

    return { componentClass, is };
  },
});
</script>

<style scoped>
.teste {
  border: 1px solid red;
}
</style>