<template>
  <div :class="computedClass" class="p-[25px] m-[10px] rounded-medium text-black dark:text-white bg-light-blue dark:bg-dark-blue flex">
    <slot />
  </div>
</template>

<script>
export default {
  name: "Container",
  props: {
    class: {
      type: String,
      default: "",
    },
  },
  computed: {
    computedClass() {
      return ` ${this.class}`.trim();
    },
  },
};
</script>
