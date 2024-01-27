<template>
  <div class="flex flex-col md:overflow-y-scroll md:max-h-screen noscroll px-6 py-6">
    <div
      class="absolute top-0 left-0 z-20 w-[-webkit-fill-available] max-w-screen  pl-6 lg:pr-4 md:py-6 overflow-x-scroll flex noscroll space-x-2">
      <div
        class="flex flex-row items-center p-2 border border-gray-300 dark:border-white dark:text-white bg-white dark:bg-black rounded-md cursor-pointer"
        @click="filterProjects(all)">
        <p class="uppercase">all</p>
      </div>

      <div v-for="(projectTag, index) in uniqueTags" :key="index"
        class="flex flex-row items-center space-x-4 p-2 rounded-md cursor-pointer bg-white dark:bg-black border border-gray-300 dark:text-white"
        :class="[{ 'border-blue-dark dark:border-dark-blue-light': projectTag === currentTag }]"
        @click="filterProjects(projectTag)">
        <p class="uppercase">{{ projectTag }}</p>
      </div>
    </div>
    <div class="mt-14 md:mt-[4.5rem] flex flex-col space-y-8">

      <div
        class=" flex flex-col items-start rounded-xl p-4 space-y-6 cardProject h-fit bg-white dark:bg-black border border-gray-200 dark:border-gray-500"
        v-for="(project, index) in filteredProjects" :key="index">
        <a :href="project.url" target="_blank" class="space-y-6 w-full">
          <div class="w-full flex justify-between items-center">
            <div class="bg-white dark:bg-blue-light border border-gray-200 rounded-full p-1">
              <img :src="`https:${project.icon.fields.file.url}`" :alt="project.title" class="w-5 h-5" />
            </div>
            <svg width="30" height="30" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
              class="arrowIcon text-blue-dark dark:text-blue-dark">
              <path fill="currentColor"
                d="M18 7.05a1 1 0 0 0-1-1L9 6a1 1 0 0 0 0 2h5.56l-8.27 8.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0L16 9.42V15a1 1 0 0 0 1 1a1 1 0 0 0 1-1Z" />
            </svg>
          </div>
          <h3 class="leading-none line-clamp-2 md:line-clamp-none text-black dark:text-blue-light">{{ project.title }}
          </h3>
          <div class="grid grid-cols-2 sm:grid-cols-projets items-start gap-6">
            <div class="flex flex-col items-start justify-center">
              <p class="text-blue-dark dark:text-blue-dark text-sm">Date</p>
              <p class="whitespace-nowrap text-black dark:text-blue-light">{{ formatProjectDate[index] }}</p>
            </div>
            <div class="flex flex-col items-start justify-center">
              <p class="text-blue-dark dark:text-blue-dark text-sm">Type</p>
              <p class="capitalize text-black dark:text-blue-light">{{ project.tag[0] }}</p>
            </div>
            <div class="flex flex-col items-start justify-center col-span-2 sm:col-span-1 md:col-span-3 lg:col-auto">
              <p class="text-blue-dark dark:text-blue-dark text-sm">Description</p>
              <p class="line-clamp-1 text-black dark:text-blue-light" :title="project.descriptionfr">{{
                project.descriptionfr }}</p>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
const all = 'all';

export default {
  name: "Projets",
  data() {
    return {
      currentTag: null,
      date: null,
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
        const options = { year: 'numeric', month: 'short', day: 'numeric' };
        const formatDate = new Intl.DateTimeFormat("fr-FR", options).format(date);
        return formatDate
      });
    },
  },
  mounted() {
    this.projects;
    this.uniqueTags;
    this.filteredProjects;
  },
  methods: {
    filterProjects(tag) {
      if (tag === all) {
        this.currentTag = null;
        return;
      }
      this.currentTag = tag;
    },
    computeFilteredProjects() {
      return this.currentTag
        ? this.projects.filter((project) => project.tag.includes(this.currentTag))
        : this.projects;
    },
  },
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
</style>