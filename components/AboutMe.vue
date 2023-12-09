<template>
  <Container class="about flex-col justify-center items-start">
    <h2>AboutMe</h2>
    <div>
      <h4>Expérience</h4>

    </div>
    <div v-if="computedDispo.length != 0" class="flex flex-row items-start justify-center space-x-4">
      <div class="max-h-4 max-w-4 h-4 w-4 rounded-full" :class="computedDispo[0].free ? 'bg-green' : 'bg-red'"></div>
      <p>{{ computedDispo[0].free ? "Disponible pour une mission" : "Trop de travail en ce moment..." }}</p>
    </div>
  </Container>
</template>

<script>
export default {
  name: "AboutMe",
  computed: {
    computedDispo() {
      return useDispo().value
    }
  }
}

</script>