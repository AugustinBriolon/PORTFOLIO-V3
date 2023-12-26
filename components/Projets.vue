<template>
  <div class="flex flex-col h-full overflow-y-auto noscroll">
    <Container class="flex flex-row justify-between hover:scale-[1.02] transition-transform space-x-4"
      v-for="(project, index) in computedProjects" :key="index" :href="project.url">
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
export default {
  name: "Projets",
  computed: {
    computedProjects() {
      console.log(useProjects().value);
      return useProjects().value;
    }
  },
  mounted() {
    this.computedProjects
  },
};
</script>

<style scoped>
@import "@/scss/main.scss";
</style>
