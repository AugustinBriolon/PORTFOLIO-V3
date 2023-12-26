<template>
  <div class="flex flex-col h-full overflow-y-auto noscroll">
    <Container class="flex flex-col justify-between hover:scale-[1.02] transition-transform	" v-for="(project, index) in computedProjects" :key="index" :href="project.url">
      <div class="flex items-center space-x-4">
        <img :src="`https:${project.icon.fields.file.url}`" :alt="project.title" class="w-6 h-6" />
        <h2>{{ project.title }}</h2>
      </div>
      <p>{{ project.descriptionfr }}</p>
    </Container>
  </div>
</template>

<script>
export default {
  name: "Projets",
  data() {
    return {
      paddingProjects: 0,
    };
  },
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
