<template>
  <section class="p-8 flex flex-row">
    <div class="flex flex-col">
      <div class="flex flex-row">
        <Container class="pres flex-col space-y-4">
          <div class="rounded-full bg-white h-28 w-28 p-4 flex items-center justify-center">
            <img :src="darkMode ? '/images/meComputer.png' : '/images/me.png'" alt="Photo memoji Apple d'Augustin Briolon" class="h-auto	w-full">
          </div>
          <h1>Augustin Briolon <br> Développeur Web</h1>
          <p>Je suis Augustin Briolon. Minimaliste dans le design et toujours partant pour un nouveau projet !</p>
        </Container>
        <div class="flex flex-col">
          <Container class="darkmode flex-col items-start justify-center h-full space-y-4"  @click="darkModeFunction()">
            <img :src="darkMode ? '/icons/moon.svg' : '/icons/sun.svg'" alt="Icone de changement de mode" class="h-12">
            <p>Appuyez pour passer en {{ darkMode ? 'Light' : 'Dark' }} Mode</p>
          </Container>
          <Container class="logo items-center justify-center h-full">
            <img src="/icons/logo.svg" alt="Logo initial A et B" class="dark-fill h-24">
          </Container>
        </div>
      </div>
      <div class="flex flex-row">
        <div class="flex flex-col">
          <Container class="contact">
            <div class="p-2 bg-white dark:bg-black rounded-small">
              <h4>Contact</h4>
            </div>
          </Container>
          <Container class="social items-center justify-center space-x-4">
            <a href="https://www.linkedin.com/in/augustin-briolon/" target="_blank">
              <img src="/icons/linkedin.svg" alt="Logo Linkedin" class="dark-fill">
            </a>
            <a href="https://github.com/AugustinBriolon" target="_blank">
              <img src="/icons/github.svg" alt="Logo Github" class="dark-fill">
            </a>
            <a href="https://twitter.com/AugustinBriolon" target="_blank">
              <img src="/icons/twitter.svg" alt="Logo Twitter" class="dark-fill">
            </a>
          </Container>
        </div>
        <div class="flex flex-col">
          <Container class="projets">
            <h2>Projets</h2>
          </Container>
          <Container class="btn">
            <h2>Btn</h2>
          </Container>
        </div>
      </div>
    </div>
    <div class="flex flex-col">
      <AboutMe />
      <Container class="local">
        <h2>Local</h2>
      </Container>
      <Container class="lang">
        <h2>Lang</h2>
      </Container>
    </div>
  </section>
</template>

<script>
export default {
  name: "Index",
  data() {
    return {
      darkMode : false
    }
  },
  methods: {
    darkModeFunction() {
      document.querySelector('html').classList.toggle('dark');
      this.darkMode = !this.darkMode;
    }
  },
  computed: {
    computedProjects() {
      return useProjects().value
    }
  }
}
</script>

<style lang="scss">
.dark .dark-fill {
  filter: invert(1) grayscale(100%) brightness(1.5);
}
</style>