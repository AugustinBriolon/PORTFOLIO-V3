<template>
  <div class="flex flex-col h-full">
    <div class="flex flex-col w-full h-full relative overflow-x-scroll" ref="slider">
      <div class="flex h-full absolute" :style="`padding-left: ${paddingProjects}px`">
        <Container v-for="(project, index) in computedProjects" :key="index" ref="sliderItem"
          class="block relative aspect-[2/3]">
          <NuxtLink :to="`/${project.title}`" class="h-full flex flex-col justify-between">
            <h2 >{{ project.title }}</h2>
            <p >{{ project.descriptionfr }}</p>
            <img :src="`https:${project.image.fields.file.url}`" alt="" class="object-contain rounded-small" />
          </NuxtLink>
        </Container>
      </div>
    </div>
    <div class="flex w-full justify-between">
      <Container class="text-center w-1/2 cursor-pointer" @click="prev">
        <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path stroke="#0d2d44" d="M8.75 15L1.75 8L8.75 1" stroke-width="2" stroke-linecap="round"
            stroke-linejoin="round" />
        </svg>
      </Container>
      <Container class="text-center w-1/2 cursor-pointer" @click="next">
        <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path stroke="#0d2d44" d="M1.25 1L8.25 8L1.25 15" stroke-width="2" stroke-linecap="round"
            stroke-linejoin="round" />
        </svg>
      </Container>
    </div>
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
  methods: {
    next() {
      this.paddingProjects += this.$refs.sliderItem[0].$el.offsetWidth;
      this.$refs.slider[0].scrollTo({
        left: this.paddingProjects,
        behavior: "smooth",
      });
    },
    prev() {
      this.paddingProjects -= this.$refs.sliderItem[0].$el.offsetWidth;
      this.$refs.slider[0].scrollTo({
        left: this.paddingProjects,
        behavior: "smooth",
      });
    },
  },
  computed: {
    computedProjects() {
      console.log(useProjects().value)
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
