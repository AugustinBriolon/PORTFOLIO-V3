<template>
  <div class="noscroll flex flex-col md:max-h-screen md:overflow-y-scroll project-container" ref="projectContainer">
    <div class="max-w-screen noscroll absolute left-0 top-0 z-20 flex w-[-webkit-fill-available] justify-end gap-2">
      <div
        class="animate-in-left flex cursor-pointer flex-row items-center gap-4 rounded-xl bg-white p-2 ring-1 ring-gray-200 hover:ring-blue-default dark:bg-black dark:text-white"
        :class="{ '!border-blue-500 !ring-blue-default': currentTag === 'all' }" @click="filterProjects('all')"
        :style="{ animationDelay: `${0 * 0.1}s` }">
        <p class="uppercase">all</p>
      </div>


      <div v-for="(projectTag, index) in uniqueTags" :key="index"
        class="animate-in-left flex cursor-pointer flex-row items-center gap-4 rounded-xl bg-white p-2 ring-1 ring-gray-200 hover:ring-blue-default dark:bg-black dark:text-white"
        :class="{ '!border-blue-500 !ring-blue-default': currentTag === projectTag }"
        @click="filterProjects(projectTag)" :style="{ animationDelay: `${(index + 1) * 0.1}s` }">
        <p class="uppercase">{{ projectTag }}</p>
      </div>
    </div>

    <div class="no-scrollbar mb-40 flex flex-col gap-4">

      <div class="h-11"></div>

      <div
        class="cardProject flex h-fit cursor-pointer flex-col items-start gap-6 rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-500 dark:bg-black"
        :class="{ 'tets-project': index === 0 }" v-for="(project, index) in filteredProjects" :key="index" ref="project" 
        @click="openModal(project)" :style="{ animationDelay: `${index * animationDelayStep}s`, zIndex: `${index}` }">
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
      currentTag: null,
      date: null,
      modalVisible: false,
      animationDelayStep: 0.1,
      selectedProject: null,
    };
  },
  computed: {
    projects() {
      return useProjects().value;
    },
    uniqueTags() {
      const tagsSet = new Set();
      this.projects.forEach((project) => {
        project.tag.forEach((projectTag) => {
          tagsSet.add(projectTag);
        });
      });
      return [...tagsSet];
    },
    filteredProjects() {
      return this.computeFilteredProjects();
    },
    formatProjectDate() {
      return this.projects.map((project) => {
        const date = new Date(project.date);
        const options = { year: 'numeric', month: 'short' };
        return new Intl.DateTimeFormat('fr-FR', options).format(date);
      });
    },
    animatedProjectDiv() {
      const projectContainer = this.$refs.projectContainer;
      const projectDiv = this.$refs.project;

      projectDiv.forEach((project) => {
        gsap.to(project, {
          scale: 0,
          y: -175,
          ease: 'power4.inOut',
          scrollTrigger: {
            scroller: projectContainer,
            trigger: project,
            // markers: true,
            scrub: true,
            pin: true,
            start: 'top 5.8%',
            end: `+=${project.clientHeight * 5}`,
          },
        });
      });
    }
  },
  mounted() {
    this.filterProjects('all');
    this.projects;
    this.uniqueTags;
    this.filteredProjects;
  },
  methods: {
    openModal(project) {
      this.selectedProject = project;
      this.modalVisible = true;
      document.body.classList.add('overflow-hidden');
    },
    filterProjects(tag) {
      this.currentTag = tag;
    },
    computeFilteredProjects(project) {
      if (!this.currentTag || this.currentTag === 'all') {
        return this.projects;
      }
      return this.projects.filter((project) => {
        return project.tag.includes(this.currentTag);
      });
      // if (!this.currentTag || this.currentTag === 'all') {
      //   return false;
      // }
      // return !project.tag.includes(this.currentTag);
    }
  },
  watch: {
    projects() {
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
