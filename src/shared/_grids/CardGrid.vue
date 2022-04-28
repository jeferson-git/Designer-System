<template>
  <div :class="elementClassCard" :id="id">
    <slot />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";

export default defineComponent({
  props: {
    id: String,
    animation: Boolean,
    hoverScale: String,
    timeToScale: String,
    colorBorder: String,
  },
  setup(props) {

    const id = props.id

    const elementClassCard = computed(() => {
      if (props.animation) {
        const baseCard = [
          "h-52",
          "shadow-2xl",
          "border-2",
          "rounded-lg",
          "transition",
          props.timeToScale ? "duration-" + props.timeToScale : "duration-700",
          "transform",
          props.hoverScale
            ? "hover:scale-" + props.hoverScale
            : "hover:scale-110",
          props.colorBorder
            ? "border-" + props.colorBorder + "-200"
            : "border-gray-200",
        ];

        return baseCard;
      } else {
        const baseCard = [
          "shadow-2xl",
          "border-2",
          "rounded-lg",
          props.colorBorder
            ? "border-" + props.colorBorder + "-200"
            : "border-gray-200",
        ];
        return baseCard;
      }
    });

    return { elementClassCard, id };
  },
});
</script>

<style scoped>
</style>