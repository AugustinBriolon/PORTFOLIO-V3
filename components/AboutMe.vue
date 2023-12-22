<template>
  <Container class="h-fit flex-col justify-start items-start space-y-8">
    <h2>AboutMe</h2>

    <div>
      <h3>Expérience</h3>
      <div class="ml-2">
        <div>
          <p>IIM - Mastère Ingénierie Web et Mobile</p>
          <span>2020-2025</span>
        </div>
        <div>
          <p>Fortuneo - Ingénieur Logiciel</p>
          <span>2023-2025</span>
        </div>
        <div>
          <p>TRYGR. - Développeur Web React</p>
          <span>2022-2023</span>
        </div>
      </div>
    </div>

    <div>
      <h3>Hobby</h3>
      <div class="ml-2">
        <p>Salle de sport</p>
        <p>Ski</p>
        <p>Natation</p>
        <p>Surf</p>
        <p>Voile</p>
      </div>
    </div>

    <div v-if="computedDispo.length != 0" class="flex flex-row items-center justify-center space-x-4">
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