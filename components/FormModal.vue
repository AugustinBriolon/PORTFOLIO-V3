<template>
  <div v-show="show" @click="closeIfOutside" tabindex="-1" aria-hidden="true" data-modal="authentication-modal"
    class="m-0 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-30 justify-center items-center w-full md:inset-0 h-screen max-h-full bg-gray-700/50"
    :class="show ? 'flex' : 'hidden'">
    <div class="p-4 w-full max-w-md max-h-full">
      <div class="bg-white rounded-lg shadow dark:bg-black-light border dark:border-slate-500">
        <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-slate-500">
          <h3 class="text-xl font-semibold text-black dark:text-white">
            {{ isFormSend ? 'À très vite !' : 'Rentrons en contact' }}
          </h3>
          <button type="button" @click="close"
            class="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
            data-modal-hide="authentication-modal">
            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
            </svg>
            <span class="sr-only">Close modal</span>
          </button>
        </div>
        <div class="p-4 md:p-5">
          <div v-if="isFormSend" class="flex flex-col gap-4">
            <div>
              <p class="text-black dark:text-white">Merci pour votre message, je vous recontacterai très vite !</p>
            </div>
            <button @click="close"
              class="w-fit flex self-end items-center rounded-md px-4 py-2 bg-red-light dark:bg-dark-red-dark text-red-dark dark:text-dark-red-light">
              Fermer
            </button>
          </div>
          <div v-else class="flex flex-col gap-4">
            <div class="flex flex-col sm:flex-row justify-between">
              <div>
                <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Prénom
                </label>
                <input type="name" name="name" id="" placeholder="John" ref="firstname"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-white dark:placeholder-gray-400 dark:text-black"
                  required>
                <span v-if="isError.firstname" class="!text-red-500 text-sm pt-2">Le prénom est requis</span>
              </div>
              <div>
                <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Nom
                </label>
                <input type="name" name="name" id="" placeholder="Doe" ref="lastname"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-white dark:placeholder-gray-400 dark:text-black"
                  required>
              </div>
            </div>
            <div>
              <label for="email" class="block mb-2 text-sm font-medium text-black dark:text-white">
                Email
              </label>
              <input type="email" name="email" id="email" ref="email"
                class="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg block w-full p-2.5 dark:bg-white dark:placeholder-gray-400 dark:text-black"
                placeholder="johndoe@gmail.com" required>
              <span v-if="isError.email" class="!text-red-500 text-sm pt-2">Le mail est requis</span>
              <span v-if="isError.isValidEmail" class="!text-red-500 text-sm pt-2">Votre email n'est pas valide</span>
            </div>
            <div>
              <label for="description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Décrivez votre Projet
              </label>
              <textarea name="description" id="description" ref="description"
                placeholder="Je souhaite faire un site vitrine pour mon entreprise"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-white dark:placeholder-gray-400 dark:text-black"
                required></textarea>
            </div>
            <button @click="sendEmail"
              class="w-fit flex self-end items-center rounded-md px-4 py-2 text-blue-dark dark:text-dark-blue-light bg-blue-light dark:bg-dark-blue-dark">
              Envoyer
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import emailjs from '@emailjs/browser';

export default {
  name: 'FormModal',
  data() {
    return {
      isFormSend: false,
      isError: { firstname: false, email: false, isValidEmail: false },
    };
  },
  props: {
    show: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  methods: {
    closeIfOutside(event) {
      if (event.target === this.$el) {
        this.close();
      }
    },
    close() {
      this.$emit('update:show', false);
    },
    isValidEmail(email) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    },
    sendEmail() {
      const templateParams = {
        firstname: this.$refs.firstname.value,
        lastname: this.$refs.lastname.value,
        email: this.$refs.email.value,
        description: this.$refs.description.value,
      };

      templateParams.firstname ? this.isError.firstname = false : this.isError.firstname = true
      templateParams.email ? this.isError.email = false : this.isError.email = true
      !this.isValidEmail(templateParams.email) && templateParams.email ? this.isError.isValidEmail = true : this.isError.isValidEmail = false

      if (templateParams.firstname && this.isValidEmail(templateParams.email) && templateParams.email) {
        emailjs.send(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_TEMPLATE_ID, templateParams, import.meta.env.VITE_EMAILJS_PUBLIC_KEY)
          .then(() => {
            this.isFormSend = true;
            setTimeout(() => {
              this.close();
              this.isFormSend = false;
            }, 5000);
          })
          .catch((error) => {
            console.error('FAILED : ', error);
            alert('Une erreur est survenue, veuillez réessayer');
          });
      }
    },
  },
};
</script>