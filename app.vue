<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style lang="scss">
@import '@/scss/main.scss';
</style>

<script setup>
const { $client } = useNuxtApp();

const fetchProjects = async ($client) => {
  try {
    const { data: projets } = await useAsyncData('projets', () => $client.getEntries({ content_type: "projets" }));

    const formattedData = projets._rawValue.items.map((item) => ({
      title: item.fields.title,
      descriptionfr: item.fields.descriptionfr,
      descriptionen: item.fields.descriptionen,
      image: item.fields.img,
      icon: item.fields.icon,
      url: item.fields.url,
      tag: item.fields.tag,
    }));
    return formattedData;
  } catch (error) {
    console.error('Error fetching projets:', error);
    return [];
  }
};

fetchProjects($client).then((dispo) => {
  useProjects().value = dispo;
});

const fetchDispo = async ($client) => {
  try {
    const { data: dispo } = await useAsyncData('dispo', () => $client.getEntries({ content_type: "dispo" }));
    const formattedData = dispo._rawValue.items.map((item) => ({
      free: item.fields.free,
    }));
    return formattedData;
  } catch (error) {
    console.error('Error fetching dispo:', error);
    return [];
  }
};

fetchDispo($client).then((dispo) => {
  useDispo().value = dispo;
});

</script>