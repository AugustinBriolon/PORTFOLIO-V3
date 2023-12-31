<template>
  <div class="flex p-6 m-2 flex-col space-y-4">
    <div class="flex space-x-4">
      <a href="https://calendly.com/augustin-briolon/presentation-de-votre-projet"
        class="w-fit flex items-center rounded-md px-4 py-2 text-blue-dark dark:text-dark-blue-light bg-blue-light dark:bg-dark-blue-dark ">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
          class="w-6 h-6 mr-2">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
        </svg>
        Prendre rdv
      </a>
      <a class="w-fit flex items-center rounded-md px-4 py-2 text-blue-dark dark:text-dark-blue-light bg-blue-light dark:bg-dark-blue-dark "
        href="mailto:augustin.briolon@gmail.com" target="_blank">
        <svg xmlns="http://www.w3.org/light0/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
          class="w-6 h-6 mr-2">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
        </svg>
        M'envoyer un mail
      </a>
    </div>
    
    <div v-if="computedDispo.length != 0" class="w-fit py-1 px-2 rounded-md flex flex-row items-center justify-start space-x-4" :class="computedDispo[0].free ? 'bg-green-light dark:bg-dark-green-dark text-green-dark dark:text-dark-green-light' : 'bg-red'">
      <p>{{ computedDispo[0].free ? "Disponible pour une mission" : "Trop de travail en ce moment..." }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact",
  computed: {
    computedDispo() {
      return useDispo().value;
    },
  },
};
</script>