<template>
  <div class="flex flex-col overflow-y-scroll h-fit max-h-screen noscroll">
    <div class="sticky top-0 z-50 backdrop-blur-md rounded-medium">
      <div class="overflow-x-scroll flex noscroll">
        <Container class="flex flex-row items-center space-x-4" @click="filterProjects(all)">
          <p class="uppercase">all</p>
        </Container>
        <Container v-for="(projectTag, index) in uniqueTags" :key="index" class="flex flex-row items-center space-x-4"
          @click="filterProjects(projectTag)">
          <p class="uppercase">{{ projectTag }}</p>
        </Container>
      </div>
    </div>
    <Container class="flex flex-row justify-between hover:scale-[1.02] transition-transform space-x-4"
      v-for="(project, index) in filteredProjects" :key="index" :href="project.url">
      <div class="flex flex-col items-start">
        <div class="flex items-center space-x-4">
          <img :src="`https:${project.icon.fields.file.url}`" :alt="project.title" class="w-6 h-6" />
          <h3>{{ project.title }}</h3>
        </div>
        <p>{{ project.descriptionfr }}</p>
      </div>
      <img :src="`https:${project.image.fields.file.url}`" :alt="project.title" class="w-20 h-auto object-contain" />
    </Container>
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
