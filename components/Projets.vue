<template>
  <div class="flex flex-col overflow-y-scroll h-fit max-h-screen noscroll px-6 py-6">
    <div class="absolute pt-6 pl-2 w-[-webkit-fill-available] top-0 z-20 w bg-white dark:bg-black pb-2 overflow-x-scroll flex noscroll space-x-2 ">
      <div
        class="flex flex-row items-center space-x-4 p-2 border border-black dark:border-white dark:text-white bg-white hover:bg-blue-light dark:bg-black rounded-md cursor-pointer"
        @click="filterProjects(all)">
        <p class="uppercase">all</p>
      </div>
      <div v-for="(projectTag, index) in uniqueTags" :key="index" :class="[
        'flex', 'flex-row', 'items-center', 'space-x-4', 'p-2', 'border', 'border-black', 'dark:border-white', 'dark:text-white',
        { 'bg-blue-light dark:bg-dark-blue-dark': projectTag === currentTag, 'bg-white dark:bg-black': projectTag !== currentTag },
        'hover:bg-blue-light', 'rounded-md', 'cursor-pointer'
      ]" @click="filterProjects(projectTag)">
        <p class="uppercase">{{ projectTag }}</p>
      </div>
    </div>
    <div class="mt-12">
      <Container class="flex-row justify-between items-center hover:scale-[1.02] transition-transform space-x-4"
        v-for="(project, index) in filteredProjects" :key="index" :href="project.url" target="_blank">
        <div class="flex flex-col items-start">
          <div class="flex items-start space-x-2 my-1">
            <img :src="`https:${project.icon.fields.file.url}`" :alt="project.title"
              class="w-8 h-8 dark:bg-white rounded-md p-1" />
            <h3 class="leading-none">{{ project.title }}</h3>
          </div>
          <p class="text-gray-500 dark:text-gray-400">{{ project.descriptionfr }}</p>
        </div>
        <img :src="`https:${project.image.fields.file.url}`" :alt="project.title"
          class="w-20 h-fit object-contain rounded-md" />
      </Container>
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
  },
  mounted() {
    this.projects;
    this.uniqueTags;
    this.filteredProjects;
    this.projectImg;
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
