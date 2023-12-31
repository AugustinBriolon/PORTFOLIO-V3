<template>
  <div>
    <main class="min-h-screen bg-white dark:bg-black">
      <slot />
    </main>
  </div>
</template>

<style lang="scss">
@import "@/scss/main.scss";

.gradient-background {
  background: linear-gradient(180deg,#F1F2F6, #F1F2F6);
  background-size: 120% 120%;
  animation: gradient-animation 5s ease infinite;
}

.dark .gradient-background {
  background: linear-gradient(180deg,#333, #333);
}


@keyframes gradient-animation {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>
