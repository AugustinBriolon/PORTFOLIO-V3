<template>
  <div
    v-show="show"
    @click="closeIfOutside"
    tabindex="-1"
    aria-hidden="true"
    data-modal="authentication-modal"
    class="fixed left-0 right-0 top-0 z-30 m-0 h-screen max-h-full w-full items-center justify-center overflow-y-auto overflow-x-hidden bg-gray-700/50 md:inset-0"
    :class="show ? 'flex' : 'hidden'"
  >
    <div class="max-h-full w-full max-w-md p-4">
      <div class="rounded-lg border bg-white shadow dark:border-slate-500 dark:bg-black-light">
        <div
          class="flex items-center justify-between rounded-t border-b p-4 dark:border-slate-500 md:p-5"
        >
          <h3 class="text-xl font-semibold text-black dark:text-white">
            {{ isFormSend ? 'À très vite !' : 'Rentrons en contact' }}
          </h3>
          <button
            type="button"
            @click="close"
            class="end-2.5 ms-auto inline-flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
            data-modal-hide="authentication-modal"
          >
            <svg
              class="h-3 w-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span class="sr-only">Close modal</span>
          </button>
        </div>
        <div class="p-4 md:p-5">
          <div v-if="isFormSend" class="flex flex-col gap-4">
            <div>
              <p class="text-black dark:text-white">
                Merci pour votre message, je vous recontacterai très vite !
              </p>
            </div>
            <button
              @click="close"
              class="flex w-fit items-center self-end rounded-md bg-red-light px-4 py-2 text-red-dark dark:bg-dark-red-dark dark:text-dark-red-light"
            >
              Fermer
            </button>
          </div>
          <div v-else class="flex flex-col gap-4">
            <div class="flex flex-col justify-between sm:flex-row">
              <div>
                <label
                  for="name"
                  class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >
                  Prénom
                </label>
                <input
                  type="name"
                  name="name"
                  id=""
                  placeholder="John"
                  ref="firstname"
                  class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:bg-black-light dark:text-black dark:placeholder-gray-400"
                  required
                />
                <span v-if="isError.firstname" class="pt-2 text-sm !text-red-500"
                  >Le prénom est requis</span
                >
              </div>
              <div>
                <label
                  for="name"
                  class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >
                  Nom
                </label>
                <input
                  type="name"
                  name="name"
                  id=""
                  placeholder="Doe"
                  ref="lastname"
                  class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:bg-black-light dark:text-black dark:placeholder-gray-400"
                  required
                />
              </div>
            </div>
            <div>
              <label for="email" class="mb-2 block text-sm font-medium text-black dark:text-white">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                ref="email"
                class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-black dark:bg-black-light dark:text-black dark:placeholder-gray-400"
                placeholder="johndoe@gmail.com"
                required
              />
              <span v-if="isError.email" class="pt-2 text-sm !text-red-500"
                >Le mail est requis</span
              >
              <span v-if="isError.isValidEmail" class="pt-2 text-sm !text-red-500"
                >Votre email n'est pas valide</span
              >
            </div>
            <div>
              <label
                for="description"
                class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >
                Décrivez votre Projet
              </label>
              <textarea
                name="description"
                id="description"
                ref="description"
                placeholder="Je souhaite faire un site vitrine pour mon entreprise"
                class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:bg-black-light dark:text-black dark:placeholder-gray-400"
                required
              ></textarea>
            </div>
            <button
              @click="sendEmail"
              class="bg-blue-light dark:bg-dark-blue-dark/60 flex w-fit items-center self-end rounded-md px-4 py-2 text-blue-default dark:text-blue-dark"
            >
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

      templateParams.firstname ? (this.isError.firstname = false) : (this.isError.firstname = true);
      templateParams.email ? (this.isError.email = false) : (this.isError.email = true);
      !this.isValidEmail(templateParams.email) && templateParams.email
        ? (this.isError.isValidEmail = true)
        : (this.isError.isValidEmail = false);

      if (
        templateParams.firstname &&
        this.isValidEmail(templateParams.email) &&
        templateParams.email
      ) {
        emailjs
          .send(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            templateParams,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
          )
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
