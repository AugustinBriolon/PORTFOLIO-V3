<template>
  <div>
    tets
    <h1>{{ computedProject.title }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Projet',
  computed: {
    computedProject() {
      return useProjects().value.find((project) => formatSlug(project.title) === formatSlug(useRoute().params.projet))
    },
  },
}
</script>


<style scoped lang='scss'>
@import "@/scss/main.scss";
</style>