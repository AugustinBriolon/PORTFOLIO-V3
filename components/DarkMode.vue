<template>
  <img @click="darkModeFunction()" :src="darkMode ? '/icons/moon.svg' : '/icons/sun.svg'" alt="Icone de changement de mode" class="h-12">
</template>

<script>
export default {
  name: "DarkMode",
  data() {
    return {
      darkMode: false,
    };
  },
  methods: {
    darkModeFunction() {
      document.querySelector("html").classList.toggle("dark");
      this.darkMode = !this.darkMode;
    },
  },
};
</script>