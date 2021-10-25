<template>
  <div class="button-margin">
    <button
      :type="type"
      :id="id"
      :name="name"
      :class="componentClass"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5 float-left mr-1 disabled:bg-red-100"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
          clip-rule="evenodd"
        />
      </svg>
      {{ text }}
    </button>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";

export default defineComponent({
  name: "ButtonForm",
  props: {
    id: String,
    name: String,
    type: String,
    text: String,
  },

  setup(props) {
    const componentClass = computed(() => {
      const base = [
        "px-6",
        "py-2",
        "w-auto",
        "ring",
        "ring-offset-2",
        "ring-green-200",
        "bg-green-400",
        "sm:rounded",
        "text-white",
        "transition",
        "duration-300",
        "hover:bg:green-700"
      ];
      return base;
    });

    return { componentClass}
  },

  methods: {
    classSubmitForm() {},
  },
});
</script>

<style scoped>
.button-margin {
  @apply mt-3 max-w-max;
}

</style>