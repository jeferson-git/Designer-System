<template>
  <div :class="elementClassGrid" >
    <card-grid
      v-for="item in configCard"
      :key="item.id"
      :id="item.id"
      :animation="item.animation"
      :hoverScale="item.hoverScale"
      :timeToScale="item.timeToScale"
      :colorBorder="item.colorBorder"
    >
    </card-grid>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";

import CardGrid from "./CardGrid.vue";

export default defineComponent({
  name: "GridViews",
  components: {
    CardGrid,
  },
  props: {
    cols: String,
    rows: String,
    gap: String,
    bgColor: String,
    h: String,
    cards: Array,
  },

  setup(props) {
    const configCard = props.cards;
    const elementClassGrid = computed(() => {
      const baseGrid = [
        "grid",
        props.rows ? "grid-rows-" + props.rows : "grid-rows-2",
        props.cols ? "grid-cols-" + props.cols : "grid-cols-3",
        props.gap ? "gap-" + props.gap : "gap-6",
        props.h ? "h-" + props.h : "h-full",
      ];
      return baseGrid;
    });

    return { elementClassGrid, configCard };
  },
});
</script>

<style scoped>
.teste {
  border: 1px solid red;
}
</style>