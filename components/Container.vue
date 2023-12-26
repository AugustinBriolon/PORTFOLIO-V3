<template>
  <component :is="linkType" :href="href" :class="computedClasses">
    <slot></slot>
  </component>
</template>

<script>
export default {
  name: "Container",
  props: {
    customClass: {
      type: String,
      default: "",
    },
    href: {
      type: String,
      default: "",
    },
  },
  computed: {
    linkType() {
      return this.href ? "a" : "div";
    },
    computedClasses() {
      return [
        "p-[25px]",
        "m-[10px]",
        "rounded-medium",
        "text-black dark:text-white",
        "bg-light-blue dark:bg-dark-blue",
        "flex",
        this.customClass,
      ];
    },
  },
};
</script>
