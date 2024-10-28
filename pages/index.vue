<template>
  <section
    class="h-screen max-h-fit max-w-screen-xl mx-auto w-full flex flex-col items-center">
    <Header />

    <div class="w-full flex flex-col md:flex-row gap-8 h-[90vh] px-2 md:px-4">
      <div class="flex flex-col w-full md:w-1/2 gap-8">
        <!-- <div class="hidden md:block h-11"></div> -->
        <div class="flex flex-col items-start justify-center">
          <div class="overflow-hidden">
            <h1 class="text-blue-default dark:text-blue-dark uppercase text-anim-b">Augustin Briolon</h1>
          </div>
          <div class="overflow-hidden">
            <h2 class="text-xl font-semibold dark:text-white text-anim-b">Développeur Web</h2>
          </div>
        </div>
        <div class="flex flex-col gap-4 text-black dark:text-white">
          <div class="overflow-hidden">
            <div class="h-8 box-content flex gap-2 text-anim-b">
              <p class="leading-8">Actif depuis</p>
              <p ref="dateValue" class="overflow-hidden text-blue-default dark:text-blue-dark  text-xl font-bold"></p>
            </div>
          </div>
          <div class="overflow-hidden">
            <h2 ref="descriptionRef" class="text-pretty">
              <span v-for="(word, index) in words" :key="index" class="inline-block overflow-hidden">
                <span class="anim-text inline-block ">
                  {{ word }}<span v-if="index !== words.length - 1">&nbsp;</span>
                </span>
              </span>
            </h2>
          </div>
        </div>
        <div class="flex flex-col items-start gap-8">
          <Contact />
        </div>
      </div>

      <div class="flex flex-col w-full md:w-1/2 h-full">
        <Projets />
      </div>
    </div>
  </section>
</template>

<script>
import { gsap } from "gsap";

export default {
  name: "Index",
  data() {
    return {
      words: "Portfolio d'Augustin Briolon. Développeur web de passion et spécialisé en front-end, je transforme vos projets en sites performants.".split(' ')
    }
  },
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
    textAnimFromBottom() {
      gsap.fromTo(
        '.text-anim-b',
        {
          y: 100,
        },
        {
          y: 0,
          stagger: 0.01,
          duration: 0.8,
          ease: 'power2.out',
        },
      )
    },
    descriptionAppear() {
      const descriptionRef = this.$refs.descriptionRef;
      const descriptionWords = descriptionRef.querySelectorAll('.anim-text');

      gsap.fromTo(
        descriptionWords,
        {
          y: 100,
        },
        {
          y: 0,
          stagger: 0.01,
          duration: 0.8,
          ease: 'power2.out',
        },
      )
    }
  },
  mounted() {
    this.dateValue;
    this.textAnimFromBottom;
    this.descriptionAppear;
  }
};
</script>

<style>
.dark .dark-fill {
  filter: invert(1) grayscale(100%) brightness(1.5);
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