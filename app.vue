<template>
  <div>
    <NuxtPage />
  </div>
</template>

<style lang="scss">
@import '@/scss/main.scss';
</style>

<script setup>
const { $client } = useNuxtApp();

const fetchProjects = async ($client) => {
  try {
    const data = await $client.getEntries()
    const formattedData = data.items.map((item) => ({
      title: item.fields.title,
    }));
    return formattedData;
  } catch (error) {
    console.error(error);
    return [];
  }
};

fetchProjects($client).then((projets) => {
  useProjects().value = projets;
});

</script>