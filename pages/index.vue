<template>
  <section class="p-4 sm:p-8 flex flex-col md:flex-row justify-between max-w-screen-2xl min-h-[1000px] mx-auto">
    <div class="flex flex-col h-[90vh] w-full md:w-3/4">
      <div class="flex flex-col sm:flex-row w-full">
        <Container class="flex-col space-y-4 sm:w-3/4">
          <div class="rounded-full bg-white h-28 w-28 p-4 flex items-center justify-center bg-me dark:bg-meComputer bg-no-repeat bg-contain bg-center">  
          </div>
          <h1>Augustin Briolon <br> Développeur Web</h1>
          <p>Je suis Augustin Briolon. Minimaliste dans le design et toujours partant pour un nouveau projet !</p>
        </Container>
        <div class="flex flex-row sm:flex-col w-full sm:w-1/4">
          <DarkMode />
          <Logo />
        </div>
      </div>
      <div class="flex flex-row h-full">
        <div class="flex flex-col w-1/4 h-full">
          <Hour />
          <Social />
          <Lang />
        </div>
        <div class="flex flex-col w-3/4 h-full relative">
          <Projets />
        </div>
      </div>
    </div>
    <div class="flex flex-col h-[90vh] w-full md:w-1/4">
      <AboutMe />
      <Contact />
    </div>
  </section>
</template>

<script>
export default {
  name: "Index",
  computed: {
    computedProjects() {
      return useProjects().value;
    }
  },
};
</script>

<style lang="scss">
@import "@/scss/main.scss";

.dark .dark-fill {
  filter: invert(1) grayscale(100%) brightness(1.5);
}
</style>