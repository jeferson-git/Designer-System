<template>
  <div>
    <input
      ref="inputEl"
      :name="name"
      :autocomplete="autocomplete"
      :required="required"
      :id="id"
      :placeholder="placeholder"
      :type="type"
      :class="classInput"
      v-model="computedValue"
    />
  </div>
</template>

<script lang="ts">
import { computed, ref, onMounted, onBeforeMount, defineComponent } from "vue";

export default defineComponent({
  name: "InputForm",
  props: {
    id: String,
    name: String,
    placeholder: String,
    type: String,
    required: Boolean,
    autocomplete: String,
    colorRing: {
      type: String,
      default: "",
    },
    modelValue: {
      type: [String, Number, Boolean, Array, Object],
      default: "",
    },
  },

  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const computedValue = computed({
      get: () => props.modelValue,
      set: (value) => {
        emit("update:modelValue", value);
      },
    });

    const classInput = computed(() => {
      const base = [
        "px-3",
        "py-1",
        "border",
        "border-opacity-40",
        "max-w-full",
        "focus:ring-2",
        "placeholder-gray-500",
        "placeholder-opacity-50",
        "focus:outline-none",
        props.colorRing !== "" ? props.colorRing : "focus:ring-blue-200",
        "focus:border-opacity-0",
        "rounded-md",
        "w-full",
        "border-gray-400",
        "shadow-md",
        "bg-white",
      ];

      return base;
    });

    const inputEl = ref(null);

    return { classInput, inputEl, computedValue };
  },
});
</script>

<style scoped>
</style>