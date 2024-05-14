<template>
  <section class="flex flex-col md:flex-row justify-between max-w-screen-2xl mx-auto min-h-screen lg:overflow-hidden">
    <div class="flex flex-col w-full md:w-1/2 p-6 gap-8">
      <div class="flex flex-col gap-4 text-black dark:text-white">
        <div class="w-full flex items-start justify-between ">
          <div
            class="h-28 w-28 p-4 flex items-center justify-center bg-me dark:bg-meComputer bg-no-repeat bg-contain bg-center">
          </div>
          <DarkMode />
        </div>
        <h1 class="text-blue-dark uppercase">Augustin Briolon</h1>
        <div class="h-8 box-content flex gap-2">
          <p class="leading-8">Actif depuis</p>
          <p ref="dateValue" class="overflow-hidden text-blue-dark text-xl font-bold"></p>
        </div>
        <h2>Portfolio d'Augustin Briolon. Développeur web de passion et spécialisé en front-end, je transforme vos idées
          en sites performants.</h2>
        <h2>Prêt à concrétiser votre projet ? Prenons contact ⬇️ ⬇️</h2>

      </div>
      <div class="flex flex-col items-start gap-8">
        <Contact />
        <div class="hidden md:block">
          <Social />
        </div>
      </div>
    </div>

    <div class="flex flex-col w-full md:w-1/2 relative">
      <Projets />
      <div class="flex flex-col items justify-center md:hidden mb-8">
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
    dateValue() {
      const date1 = new Date("01/01/2020");
      const date2 = new Date();
      const diffTime = Math.abs(date2 - date1);
      const diffSecondes = Math.ceil(diffTime / 1000).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ') + " secondes";
      const diffMinutes = Math.ceil(diffTime / (1000 * 60)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ') + " minutes";
      const diffHours = Math.ceil(diffTime / (1000 * 60 * 60)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ') + " heures";
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ') + " jours";
      const diffYears = Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 365)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ') + " ans";

      const dateValue = [diffYears, diffDays, diffHours, diffMinutes, diffSecondes];
      const dateText = this.$refs.dateValue

      dateValue.forEach((date) => {
        const span = document.createElement("span");
        span.textContent = date;
        span.classList.add("word");
        dateText.appendChild(span);
      });
    },
  },
  mounted() {
    this.dateValue;
  },
};
</script>

<style>
.dark .dark-fill {
  filter: invert(1) grayscale(100%) brightness(1.5);
}

.noscroll::-webkit-scrollbar {
  display: none;
}

.word {
  display: block;
  height: 100%;
  animation: spin_words 8s infinite;
}

@keyframes spin_words {
  0% {
    transform: translateY(0);
  }

  10% {
    transform: translateY(0);
  }

  20% {
    transform: translateY(-100%);
  }

  30% {
    transform: translateY(-100%);
  }

  40% {
    transform: translateY(-200%);
  }

  50% {
    transform: translateY(-200%);
  }

  60% {
    transform: translateY(-300%);
  }

  70% {
    transform: translateY(-300%);
  }

  80% {
    transform: translateY(-400%);
  }

  90% {
    transform: translateY(-400%);
  }

  100% {
    transform: translateY(0);
  }
}
</style>