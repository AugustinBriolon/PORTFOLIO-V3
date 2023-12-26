<template>
  <section class="flex flex-col md:flex-row justify-between max-w-screen-2xl mx-auto h-screen overflow-hidden h-full">
    <div class="flex flex-col w-full lg:w-1/2">
      <Container class="flex-col space-y-4">
        <div class="w-full flex items-start justify-between">
          <div
            class="rounded-full bg-white h-28 w-28 p-4 flex items-center justify-center bg-me dark:bg-meComputer bg-no-repeat bg-contain bg-center">
          </div>
          <DarkMode />
        </div>
        <h1>Augustin Briolon <br> Développeur Web</h1>
        <p>Je suis Augustin Briolon. Minimaliste dans le design et toujours partant pour un nouveau projet !</p>
      </Container>
      <div class="flex flex-row items-center ">
        <Contact />
        <!-- <Lang /> -->
      </div>
      <Social />
    </div>

    <div class="flex flex-col w-full lg:w-1/2">
      <Projets />
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

.noscroll::-webkit-scrollbar {
  display: none;
}
</style>