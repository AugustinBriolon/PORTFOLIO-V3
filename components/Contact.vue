<template>
  <div class="flex flex-col gap-8">
    <div class="flex items-center gap-4">

      <div @click="handleCalendly" @mouseover="handleHover" @mouseleave="resetHover"
        class="calendly-logo cursor-pointer flex items-center justify-center w-10 h-10 rounded-xl ring-1 hover:ring-2 ring-blue-default dark:ring-blue-dark text-blue-default dark:text-blue-dark backdrop-blur-sm overflow-hidden">

        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="logo-anim">
          <path d="M8 2v4" />
          <path d="M16 2v4" />
          <rect width="18" height="18" x="3" y="4" rx="2" />
          <path d="M3 10h18" />
          <path d="M8 14h.01" />
          <path d="M12 14h.01" />
          <path d="M16 14h.01" />
          <path d="M8 18h.01" />
          <path d="M12 18h.01" />
          <path d="M16 18h.01" />
        </svg>

      </div>

      <div @click="openModal" @mouseover="handleHover" @mouseleave="resetHover"
        class="mail-logo cursor-pointer flex items-center justify-center w-10 h-10 rounded-xl ring-1 hover:ring-2 ring-blue-default dark:ring-blue-dark text-blue-default dark:text-blue-dark backdrop-blur-sm overflow-hidden">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="logo-anim">
          <rect width="20" height="16" x="2" y="4" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
      </div>

      <div class="flex flex-col items-start h-full text-anim-l">
        <div class="flex items-center gap-2">
          <p class="text-black dark:text-white">Rentrons en contact</p>

          <div v-if="getDispo.length">
            <div v-if="getDispo[0].free" class="w-fit flex items-center justify-start gap-2">
              <div ref="dispo" class="w-2 h-2 rounded-full relative  bg-green-dark dark:bg-dark-green-light">
                <span
                  class="animate-ping absolute h-full w-full rounded-full opacity-75 bg-green-dark dark:bg-dark-green-light"></span>
              </div>
            </div>

            <div v-else class="w-fit flex items-center justify-start gap-2">
              <div ref="dispo" class="w-2 h-2 rounded-full relative  bg-red-dark dark:bg-dark-red-light">
                <span
                  class="animate-ping absolute h-full w-full rounded-full opacity-75 bg-red-dark dark:bg-dark-red-light"></span>
              </div>
            </div>
          </div>

        </div>
        <p class="canal-hover min-h-4 text-blue-default dark:text-blue-dark"
          :class="{ 'font-bold': canalHover !== 'Dès maintenant' }">
          {{ canalHover }}
        </p>
      </div>

    </div>



  </div>
  <FormModal :show="modalVisible" @update:show="modalVisible = $event" />
</template>

<script>
import { gsap } from "gsap";

export default {
  name: "Contact",
  data() {
    return {
      modalVisible: false,
      canalHover: "Dès maintenant",
    };
  },
  methods: {
    openModal() {
      this.modalVisible = true;
    },
    handleCalendly() {
      const calendly = useCalendly();
      calendly.initPopupWidget({
        url: 'https://calendly.com/augustin-briolon/presentation-de-votre-projet/30min'
      })
    },
    handleHover(event) {
      if (event.currentTarget.classList.contains("calendly-logo")) {
        this.canalHover = "Par rendez-vous";
      } else if (event.currentTarget.classList.contains("mail-logo")) {
        this.canalHover = "Par mail";
      }
    },
    resetHover() {
      this.canalHover = "Dès maintenant";
    },
  },
  computed: {
    getDispo() {
      return useDispo().value;
    },
    logoAppearAnimation() {
      gsap.fromTo(
        ".logo-anim",
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: .8,
          ease: "power2.out",
        }
      )
    },
    textAnimFromLeft() {
      gsap.fromTo(
        '.text-anim-l',
        {
          x: -50,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
        },
      )
    },
    dispoAnim() {
      const ref = this.$refs.dispo;
      if (!ref) return;
      gsap.fromTo(
        ref,
        {
          scale: 0,
        },
        {
          scale: 1,
          delay: .5,
          duration: 1,
          ease: 'power2.out',
        },
      )
    },
    emojiAnimRocket() {
      // when hover .emoji-anim => animate it
    }
  },
  mounted() {
    this.logoAppearAnimation;
    this.textAnimFromLeft;

    if (this.getDispo.length !== 0) {
      this.$nextTick(() => {
        this.dispoAnim;
      });
    }
  },

  watch: {
    getDispo() {
      this.$nextTick(() => {
        this.dispoAnim;
      });
    }
  }

};
</script>