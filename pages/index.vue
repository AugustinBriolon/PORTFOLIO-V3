<template>
  <section class="flex flex-col md:flex-row justify-between max-w-screen-2xl mx-auto min-h-screen lg:overflow-hidden">
    <div class="flex flex-col w-full md:w-1/2">
      <div class="flex p-6 m-2 flex-col space-y-4 text-black dark:text-white">
        <div class="w-full flex items-start justify-between ">
          <div
            class="h-28 w-28 p-4 flex items-center justify-center bg-me dark:bg-meComputer bg-no-repeat bg-contain bg-center">
          </div>
          <DarkMode />
        </div>
        <h1>Augustin Briolon</h1>
        <h2>Je suis Augustin Briolon. Développeur sensible au design et toujours partant pour un nouveau projet ⬇️ ⬇️</h2>
      </div>
      <div class="flex flex-col items-start ">
        <Contact />
        <div class="hidden md:block">
          <Social />
        </div>
      </div>
    </div>
    <div class="flex flex-col w-full md:w-1/2 relative">
      <Projets />
      <div class="flex flex-col items justify-center md:hidden">
        <hr class="mx-8">
        <Social />
      </div>
    </div>

  </section>
</template>

<script>
export default {
  name: "Index",
  computed: {
    computedProjects() {
      return useProjects().value;
    },
  },
};
</script>

<style >
.dark .dark-fill {
  filter: invert(1) grayscale(100%) brightness(1.5);
}

.noscroll::-webkit-scrollbar {
  display: none;
}
</style>