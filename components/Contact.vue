<template>
  <div class="flex p-6 flex-col space-y-4">
    <div
      class="flex flex-col sm:flex-row md:flex-col lg:flex-row space-x-0 sm:space-x-4 md:space-x-0 lg:space-x-4 space-y-4 sm:space-y-0 md:space-y-4 lg:space-y-0 cursor-pointer">
      <div @click="handleCalendly" v-if="computedDispo.length !== 0 && computedDispo[0].free"
        class="tremor w-fit flex items-center space-x-2 rounded-md px-2 py-2 text-blue-dark dark:text-dark-blue-light bg-blue-light dark:bg-dark-blue-dark ">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
          class="w-6 h-6">
          <path
            d="M1 11.8605C1 7.79942 1 5.76835 2.26215 4.50727C3.52323 3.24512 5.55431 3.24512 9.61539 3.24512H13.9231C17.9842 3.24512 20.0152 3.24512 21.2763 4.50727C22.5385 5.76835 22.5385 7.79942 22.5385 11.8605V14.0143C22.5385 18.0754 22.5385 20.1065 21.2763 21.3676C20.0152 22.6297 17.9842 22.6297 13.9231 22.6297H9.61539C5.55431 22.6297 3.52323 22.6297 2.26215 21.3676C1 20.1065 1 18.0754 1 14.0143V11.8605Z"
            stroke="currentColor" stroke-width="1.5" />
          <path d="M6.38461 3.24515V1.62976M17.1538 3.24515V1.62976M1.53845 8.62976H22" stroke="currentColor"
            stroke-width="1.5" stroke-linecap="round" />
          <path
            d="M17.7308 17.2451C17.7308 17.3981 17.67 17.5448 17.5618 17.653C17.4536 17.7612 17.3068 17.822 17.1538 17.822C17.0008 17.822 16.8541 17.7612 16.7459 17.653C16.6377 17.5448 16.5769 17.3981 16.5769 17.2451C16.5769 17.0921 16.6377 16.9453 16.7459 16.8371C16.8541 16.7289 17.0008 16.6682 17.1538 16.6682C17.3068 16.6682 17.4536 16.7289 17.5618 16.8371C17.67 16.9453 17.7308 17.0921 17.7308 17.2451ZM17.7308 12.9374C17.7308 13.0904 17.67 13.2371 17.5618 13.3453C17.4536 13.4535 17.3068 13.5143 17.1538 13.5143C17.0008 13.5143 16.8541 13.4535 16.7459 13.3453C16.6377 13.2371 16.5769 13.0904 16.5769 12.9374C16.5769 12.7844 16.6377 12.6376 16.7459 12.5295C16.8541 12.4213 17.0008 12.3605 17.1538 12.3605C17.3068 12.3605 17.4536 12.4213 17.5618 12.5295C17.67 12.6376 17.7308 12.7844 17.7308 12.9374ZM12.3461 17.2451C12.3461 17.3981 12.2854 17.5448 12.1772 17.653C12.069 17.7612 11.9222 17.822 11.7692 17.822C11.6162 17.822 11.4695 17.7612 11.3613 17.653C11.2531 17.5448 11.1923 17.3981 11.1923 17.2451C11.1923 17.0921 11.2531 16.9453 11.3613 16.8371C11.4695 16.7289 11.6162 16.6682 11.7692 16.6682C11.9222 16.6682 12.069 16.7289 12.1772 16.8371C12.2854 16.9453 12.3461 17.0921 12.3461 17.2451ZM12.3461 12.9374C12.3461 13.0904 12.2854 13.2371 12.1772 13.3453C12.069 13.4535 11.9222 13.5143 11.7692 13.5143C11.6162 13.5143 11.4695 13.4535 11.3613 13.3453C11.2531 13.2371 11.1923 13.0904 11.1923 12.9374C11.1923 12.7844 11.2531 12.6376 11.3613 12.5295C11.4695 12.4213 11.6162 12.3605 11.7692 12.3605C11.9222 12.3605 12.069 12.4213 12.1772 12.5295C12.2854 12.6376 12.3461 12.7844 12.3461 12.9374ZM6.96152 17.2451C6.96152 17.3981 6.90074 17.5448 6.79255 17.653C6.68435 17.7612 6.53761 17.822 6.3846 17.822C6.23159 17.822 6.08485 17.7612 5.97666 17.653C5.86846 17.5448 5.80768 17.3981 5.80768 17.2451C5.80768 17.0921 5.86846 16.9453 5.97666 16.8371C6.08485 16.7289 6.23159 16.6682 6.3846 16.6682C6.53761 16.6682 6.68435 16.7289 6.79255 16.8371C6.90074 16.9453 6.96152 17.0921 6.96152 17.2451ZM6.96152 12.9374C6.96152 13.0904 6.90074 13.2371 6.79255 13.3453C6.68435 13.4535 6.53761 13.5143 6.3846 13.5143C6.23159 13.5143 6.08485 13.4535 5.97666 13.3453C5.86846 13.2371 5.80768 13.0904 5.80768 12.9374C5.80768 12.7844 5.86846 12.6376 5.97666 12.5295C6.08485 12.4213 6.23159 12.3605 6.3846 12.3605C6.53761 12.3605 6.68435 12.4213 6.79255 12.5295C6.90074 12.6376 6.96152 12.7844 6.96152 12.9374Z"
            fill="currentColor" stroke="currentColor" />
        </svg>
        <p>Prendre rdv</p>
      </div>
      <div @click="openModal" v-if="computedDispo.length !== 0 && computedDispo[0].free"
        class="tremor w-fit flex space-x-2 items-center rounded-md px-2 py-2 text-blue-dark dark:text-dark-blue-light bg-blue-light dark:bg-dark-blue-dark cursor-pointer">
        <svg xmlns="http://www.w3.org/light0/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
          class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
        </svg>
        <p>M'envoyer un mail</p>
      </div>
    </div>
    <div v-if="computedDispo.length != 0"
      class="w-fit py-1 px-2 rounded-md flex flex-row items-center justify-start space-x-4"
      :class="computedDispo[0].free ? 'bg-green-light dark:bg-dark-green-dark text-green-dark dark:text-dark-green-light' : 'bg-red-light dark:bg-dark-red-dark text-red-dark dark:text-dark-red-light'">
      <p>{{ computedDispo[0].free ? "Disponible pour une mission" : "Pas de dispo, trop de travail en ce moment 😮‍💨" }}
      </p>
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
    transform: translate(0, 0) scale(1);
  }


  91% {
    transform: translate(-1px, -2px) rotate(-1deg);
  }

  92% {
    transform: translate(-3px, 0px) rotate(1deg);
  }

  93% {
    transform: translate(3px, 2px) rotate(0deg);
  }

  93% {
    transform: translate(1px, -1px) rotate(1deg);
  }

  94% {
    transform: translate(-1px, 2px) rotate(-1deg);
  }

  95% {
    transform: translate(-3px, 1px) rotate(0deg);
  }

  95% {
    transform: translate(3px, 1px) rotate(-1deg);
  }

  96% {
    transform: translate(-1px, -1px) rotate(1deg);
  }

  97% {
    transform: translate(1px, 2px) rotate(0deg);
  }

  98% {
    transform: translate(1px, 1px) rotate(0deg);
  }

  99% {
    transform: translate(0px, 1px) rotate(0deg);
  }

  100% {
    transform: translate(0, 0) scale(1);
  }


}
</style>