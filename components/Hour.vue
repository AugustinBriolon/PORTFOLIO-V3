<template>
  <Container class="justify-center">
    <h2 class="whitespace-nowrap">{{ localHour }} <span class="localHour">:</span> {{ localMinutes }} {{ localAMPM }}</h2>
  </Container>
</template>

<script>
export default {
  name: "Hour",
  data() {
    return {
      localHour: '',
      localMinutes: '',
      localAMPM: ''
    };
  },
  methods: {
    updateLocalTime() {
      const date = new Date();
      this.localHour = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
      this.localMinutes =
        date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
      this.localAMPM = date.getHours() > 12 ? "PM" : "AM";
    }
  },
  mounted() {
    this.updateLocalTime();
    setInterval(() => {
      this.updateLocalTime();
    }, 1000);
  }
};
</script>

<style>
.localHour {
  animation: blink 1s infinite;
}

@keyframes blink {
  0% {
    opacity: 0;
  }

  50% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
}
</style>