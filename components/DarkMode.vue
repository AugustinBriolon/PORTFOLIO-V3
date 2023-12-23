<template>
  <Container class="darkmode flex-col items-start justify-center h-full space-y-4 w-full sm:w-auto" @click="darkModeFunction()">
    <img :src="darkMode ? '/icons/moon.svg' : '/icons/sun.svg'" alt="Icone de changement de mode" class="h-12">
    <p>Appuyez pour passer en {{ darkMode ? 'Light' : 'Dark' }} Mode</p>
  </Container>
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