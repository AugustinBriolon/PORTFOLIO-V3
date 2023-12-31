<template>
  <img @click="darkModeFunction()" :src="darkMode ? '/icons/moon.svg' : '/icons/sun.svg'" alt="Icone de changement de mode" class="h-6">
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
      localStorage.setItem("darkMode", document.querySelector("html").classList.contains("dark"));
      this.darkMode = !this.darkMode;
    },
  },
  mounted() {
    if (localStorage.getItem("darkMode") === "true") {
      document.querySelector("html").classList.add("dark");
      this.darkMode = true;
    }
  },
};
</script>