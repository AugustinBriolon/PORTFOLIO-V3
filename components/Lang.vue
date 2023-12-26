<template>
  <Container class="justify-center h-fit" @click="changeLang">
    <h3>{{ lang }}</h3>
  </Container>
</template>

<script>
export default {
  name: "Lang",
  data() {
    return {
      lang: "FR",
    };
  },
  methods: {
    changeLang() {
      if (this.lang === "FR") {
        this.lang = "EN";
      } else {
        this.lang = "FR";
      }
    },
  },
};
</script>