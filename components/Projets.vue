<template>
  <div class="no-scrollbar h-full flex flex-col md:max-h-screen md:overflow-y-scroll project-container" ref="projectContainer">
    <div class="mb-40 flex flex-col gap-4">

      <div
        class="cardProject flex h-fit cursor-pointer flex-col items-start gap-6 rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-500 dark:bg-black"
        :class="{ 'tets-project': index === 0 }" v-for="(project, index) in getProjects" :key="index" ref="project"
        @click="openModal(project)" :style="{ zIndex: `${index}` }">
        <div class="flex w-full flex-col gap-6">
          <div class="flex w-full items-center justify-between">
            <div class="rounded-md border border-gray-200 bg-white p-1 dark:bg-white">
              <img :src="`https:${project.icon.fields.file.url}`" :alt="project.title" class="h-5 w-5 rounded-sm" />
            </div>
            <svg width="30" height="30" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
              class="arrowIcon text-blue-default dark:text-blue-dark">
              <path fill="currentColor"
                d="M18 7.05a1 1 0 0 0-1-1L9 6a1 1 0 0 0 0 2h5.56l-8.27 8.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0L16 9.42V15a1 1 0 0 0 1 1a1 1 0 0 0 1-1Z" />
            </svg>
          </div>
          <h3 class="line-clamp-2 leading-none text-black dark:text-white md:line-clamp-none">
            {{ project.title }}
          </h3>
          <div class="grid grid-cols-2 items-start gap-6 sm:grid-cols-projets">
            <div class="flex flex-col items-start justify-center">
              <p class="text-sm font-bold text-blue-default dark:text-blue-dark">Date</p>
              <p class="whitespace-nowrap text-black dark:text-white">
                {{ formatProjectDate[index] }}
              </p>
            </div>
            <div class="flex flex-col items-start justify-center">
              <p class="text-sm font-bold text-blue-default dark:text-blue-dark">Type</p>
              <p class="capitalize text-black dark:text-white">{{ project.tag[0] }}</p>
            </div>
            <div
              class="col-span-2 hidden md:flex flex-col items-start justify-center sm:col-span-1 md:col-span-3 lg:col-auto">
              <p class="text-sm font-bold text-blue-default dark:text-blue-dark">Description</p>
              <p class="line-clamp-1 text-black dark:text-white" :title="project.description">
                {{ project.description }}
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
  <ProjectModal :show="modalVisible" @update:show="modalVisible = $event" :data="selectedProject" />
</template>

<script>
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default {
  name: 'Projets',
  data() {
    return {
      date: null,
      modalVisible: false,
      selectedProject: null,
    };
  },
  computed: {
    getProjects() {
      return useProjects().value;
    },
    formatProjectDate() {
      return this.getProjects.map((project) => {
        const date = new Date(project.date);
        const options = { year: 'numeric', month: 'short' };
        return new Intl.DateTimeFormat('fr-FR', options).format(date);
      });
    },
    animatedProjectDiv() {
      const projectContainer = this.$refs.projectContainer;
      const projectDiv = this.$refs.project;

      if (window.innerWidth > 768) {
        projectDiv.forEach((project) => {
          gsap.to(project, {
            scale: 0,
            y: 0,
            ease: 'power4.inOut',
            scrollTrigger: {
              scroller: projectContainer,
              trigger: project,
              // markers: true,
              scrub: true,
              pin: true,
              start: 'top top',
              end: `+=${project.clientHeight * 3}`,
            },
          });
        });
      }

      gsap.from(projectDiv, {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.05,
        ease: 'power4.out',
      });
    }
  },
  mounted() {
    this.getProjects;
  },
  methods: {
    openModal(project) {
      this.selectedProject = project;
      this.modalVisible = true;
      document.body.classList.add('overflow-hidden');
    },
  },
  watch: {
    getProjects() {
      this.$nextTick(() => {
        this.animatedProjectDiv;
      });
    }
  }
};
</script>

<style scoped>
.cardProject .arrowIcon {
  transition: transform 0.2s ease-in-out;
}

.cardProject:hover .arrowIcon {
  transform: translate(2px, -2px);
}

.bg-purple-card2 {
  background: #79ed754d;
}

.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter,
.list-leave-to {
  transform: scale(0.5) translateY(50%);
  opacity: 0;
}
</style>
