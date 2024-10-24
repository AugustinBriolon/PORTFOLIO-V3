<template>
  <div @click="closeIfOutside" role="dialog" tabindex="-1" aria-hidden="true" aria-modal="true"
    class="fixed left-0 right-0 top-0 z-30 m-0 flex h-screen max-h-full w-full items-end md:items-center justify-center overflow-y-auto overflow-x-hidden bg-gray-700/50 backdrop-blur-sm p-0 md:p-24 transition-[opacity,visibility] inset-0"
    :class="show ? 'visible opacity-100' : 'invisible opacity-0'">

    <div
      class="no-scrollbar flex h-[80%] md:h-full w-full max-w-screen-md flex-col items-start justify-start gap-10 overflow-x-scroll rounded-t-lg md:rounded-lg bg-white p-4 transition-transform border dark:bg-black "
      v-if="data"
      :class="show ? (isMobile ? 'translate-y-0' : 'scale-100') : (isMobile ? 'translate-y-full' : 'scale-50')">
      <div class="flex flex-col md:flex-row w-full items-start md:items-center justify-between">
        <div>
          <h2 class="text-2xl font-bold dark:text-white">{{ data.title }}</h2>
          <p class="mt-2 text-sm capitalize text-gray-500 dark:text-gray-400">
            {{ formattedDate }}
          </p>
        </div>
        <div class="flex items-center justify-between w-full md:w-fit gap-4">
          <a :href="data.url" rel="noopener noreferrer" target="_blank" title="Lien vers Github d'Augustin Briolon"
            class="flex aspect-square items-center justify-center rounded-full p-4 hover:bg-black/5 dark:hover:bg-white/10 sm:bg-transparent">
            <img src="/icons/github.svg" alt="Logo Github" class="dark-fill h-5 w-5 select-none" />
          </a>

          <a :href="data.url" rel="noopener noreferrer" target="_blank"
            class="sm:hidden ease-out-quad group flex h-12 w-12 select-none items-center justify-center gap-2 rounded-full bg-black font-medium text-white transition hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"
              class="rotate-[135deg] transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:scale-105">
              <path d="m12 19-7-7 7-7" />
              <path d="M19 12H5" />
            </svg>
          </a>

          <a :href="data.url" rel="noopener noreferrer" target="_blank"
            class="ease-out-quad group flex h-12 select-none items-center justify-center gap-2 rounded-full bg-black px-7 font-medium text-white transition hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200 max-sm:hidden ">
            Visiter
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"
              class="rotate-[135deg] transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:scale-105">
              <path d="m12 19-7-7 7-7" />
              <path d="M19 12H5" />
            </svg>
          </a>
        </div>
      </div>

      <div class="flex w-full items-center justify-center">
        <img :src="`https:${data.image.fields.file.url}`" :alt="data.title" class="w-full rounded-lg object-contain" />
      </div>

      <div class="flex w-full flex-wrap gap-2">
        <p v-for="(techno, index) in data.techno" :key="index"
          class="w-fit rounded-full border border-gray-400 px-3 py-1 text-sm text-black dark:text-gray-400"
          :class="show && 'animate-in-right'" :style="{ animationDelay: `${(index + 1) * 0.1}s` }">
          {{ techno }}
        </p>
      </div>

      <div class="w-full">
        <p v-html="data.story" class="text-pretty text-black dark:text-white"></p>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'ProjectModal',
  props: {
    show: {
      type: Boolean,
      required: true,
    },
    data: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    isMobile() {
      return window.innerWidth < 768;
    },
    formattedDate() {
      const date = new Date(this.data.date);
      const options = { year: 'numeric', month: 'long' };
      return new Intl.DateTimeFormat('fr-FR', options).format(date);
    },
  },
  methods: {
    closeIfOutside(event) {
      if (event.target === this.$el) {
        this.close();
        document.body.classList.remove('overflow-hidden');
      }
    },
    close() {
      this.$emit('update:show', false);
    },
  },
};
</script>
