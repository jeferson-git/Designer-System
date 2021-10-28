<template>
  <div class="teste">
    <default-box-views>
      <grid-views
        :cols="grid[0].cols"
        :rows="grid[0].rows"
        :gap="grid[0].gap"
        :bgColor="grid[0].backgroundColor"
        :h="grid[0].h"
        :cards="cards"        
      ></grid-views>
    </default-box-views>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import DefaultBoxViews from "../shared/DefaultBoxViews.vue";
import GridViews from "../shared/_grids/GridViews.vue";

import { gridConfig, cardConfig } from "../config/gridView";

export default defineComponent({
  name: "EmployersComponent",
  components: {
    DefaultBoxViews,
    GridViews,
  },

  setup() {
    const grid = gridConfig;
    const cards = cardConfig;
    return {
      grid,
      cards,
    };
  },
});
</script>

<style scoped>
.teste {
  border: 1px solid black;
}
</style>
