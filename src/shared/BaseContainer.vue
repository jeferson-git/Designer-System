<template>
  <section class="">
    <slot />
    <div class="arrow-side" :style="transformStyle" :buttonsSidebar="buttonsSideBar"></div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import { computed } from "vue";

export default defineComponent({
  props: {
    buttonsSideBar: Number,
    arrowPosition: Number
  },

  setup(props) {

    const transformStyle = computed(() =>{
      const base = [
        "transform: translate3d(0px," + props.arrowPosition + "px, 0px)"
      ]
      return base
    })

    return { transformStyle };
  },
  methods: {
    // teste() {
    // this.show = !this.show;
    // },
  },
});
</script>
  

<style>
.base-container {
  @apply max-w-min h-screen float-left p-2 bg-yellow-100;
}

.teste {
  border: 1px solid green;
}

.arrow-side {
  border-right: 17px solid #fffbeb;
  border-top: 17px solid transparent;
  border-bottom: 17px solid transparent;
  display: inline-block;
  position: absolute;
  left: 175px;
  top: 94px;
  transition: all 0.5s cubic-bezier(0.29, 1.42, 0.79, 1);
}
</style>