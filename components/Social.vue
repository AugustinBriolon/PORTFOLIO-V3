<template>
  <div class="flex items-center justify-evenly gap-2">
    <div @click="darkModeFunction()" class="cursor-pointer flex items-center justify-center p-4 hover:bg-black/5  dark:hover:bg-white/10 sm:bg-transparent rounded-full aspect-square">
      <img :src="darkMode ? '/icons/moon.svg' : '/icons/sun.svg'" alt="Icone de changement de mode" class="dark-fill w-5 h-5 select-none">
    </div>
    <a href="https://www.linkedin.com/in/augustin-briolon/" target="_blank" title="Lien vers Linkedin d'Augustin Briolon" class="flex items-center justify-center p-4 hover:bg-black/5 dark:hover:bg-white/10 sm:bg-transparent rounded-full aspect-square">
      <img src="/icons/linkedin.svg" alt="Logo Linkedin" class=" dark-fill w-5 h-5 select-none">
    </a>
    <a href="https://github.com/AugustinBriolon" target="_blank" title="Lien vers Github d'Augustin Briolon" class="flex items-center justify-center p-4 hover:bg-black/5 dark:hover:bg-white/10 sm:bg-transparent rounded-full  aspect-square">
      <img src="/icons/github.svg" alt="Logo Github" class="dark-fill w-5 h-5 select-none">
    </a>
    <a href="https://twitter.com/AugustinBriolon" target="_blank" title="Lien vers Twitter d'Augustin Briolon" class="flex items-center justify-center p-4 hover:bg-black/5 dark:hover:bg-white/10 sm:bg-transparent rounded-full  aspect-square">
      <img src="/icons/twitter.svg" alt="Logo Twitter" class="dark-fill w-5 h-5 select-none">
    </a>
  </div>
</template>

<script>
export default {
  name: "Social",
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