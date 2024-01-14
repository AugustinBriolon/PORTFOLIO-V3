<template>
  <div class="flex p-6 m-2 flex-col space-y-4">
    <div
      class="flex flex-col sm:flex-row md:flex-col lg:flex-row space-x-0 sm:space-x-4 md:space-x-0 lg:space-x-4 space-y-4 sm:space-y-0 md:space-y-4 lg:space-y-0 cursor-pointer">
      <div @click="handleCalendly"
        class="tremor w-fit flex items-center rounded-md px-4 py-2 text-blue-dark dark:text-dark-blue-light bg-blue-light dark:bg-dark-blue-dark ">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
          class="w-6 h-6 mr-2">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
        </svg>
        Prendre rdv
      </div>
      <div @click="openModal"
        class="tremor w-fit flex items-center rounded-md px-4 py-2 text-blue-dark dark:text-dark-blue-light bg-blue-light dark:bg-dark-blue-dark cursor-pointer">
        <svg xmlns="http://www.w3.org/light0/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
          class="w-6 h-6 mr-2">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
        </svg>
        M'envoyer un mail
      </div>
    </div>
    <div v-if="computedDispo.length != 0"
      class="w-fit py-1 px-2 rounded-md flex flex-row items-center justify-start space-x-4"
      :class="computedDispo[0].free ? 'bg-green-light dark:bg-dark-green-dark text-green-dark dark:text-dark-green-light' : 'bg-red-light dark:bg-dark-red-dark text-red-dark dark:text-dark-red-light'">
      <p>{{ computedDispo[0].free ? "Disponible pour une mission" : "Trop de travail en ce moment..." }}</p>
    </div>
  </div>
  <FormModal :show="modalVisible" @update:show="modalVisible = $event" />
</template>

<script>
export default {
  name: "Contact",
  data() {
    return {
      modalVisible: false,
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
  },
  computed: {
    computedDispo() {
      return useDispo().value;
    },
  },
};
</script>

<style scoped>
.tremor {
  animation: tremor 10s infinite;
}

@keyframes tremor {
  0% {
    transform: translate(0, 0) scale(1);
  }

  90% {
    transform: translate(0, 0);
  }

  91% {
    transform: translate(-2px, -2px);
  }

  92% {
    transform: translate(2px, 2px);
  }

  93% {
    transform: translate(2px, -2px);
  }

  94% {
    transform: translate(0, 0);
  }

  95% {
    transform: translate(-2px, 0) scale(1.02);
  }

  96% {
    transform: translate(2px, 0);
  }

  97% {
    transform: translate(0, -2px);
  }

  98% {
    transform: translate(0, 2px);
  }

  99% {
    transform: translate(-2px, 2px);
  }

  100% {
    transform: translate(0, 0) scale(1);
  }
}</style>