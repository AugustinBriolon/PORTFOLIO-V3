<template>
  <component :is="linkType" :href="href" :class="`flex p-6 border border-gray-200 dark:border-gray-700 dark:bg-black shadow rounded-medium text-black dark:text-white bg-white ${customClass}`">

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
  },
};
</script>
