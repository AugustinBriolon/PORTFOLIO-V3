<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style lang="scss">
@use '@/scss/main.scss' as *;
</style>

<script setup>
const { $client } = useNuxtApp();

const formatDescription = (contentfulData) => {
  const formattedParagraphs = contentfulData.content.map((entry) => {
    const paragraphs = entry.content.map((paragraph) => {
      if (!isHyperlinkNode(paragraph)) {
        return isTextNode(paragraph) ? paragraph.value : '';
      }
      const linkText = extractTextContent(paragraph);
      const linkUrl = paragraph.data.uri;
      return createHyperlink(linkUrl, linkText);
    });
    const nonEmptyParagraphs = paragraphs.filter(Boolean);
    const formattedEntry = wrapInParagraph(nonEmptyParagraphs);
    return formattedEntry;
  });

  return formattedParagraphs.join('');
};

const isTextNode = (node) => node.nodeType === 'text';
const isHyperlinkNode = (node) => node.nodeType === 'hyperlink' && node.data && node.data.uri;
const extractTextContent = (node) => node.content.map((content) => content.value).join('');
const createHyperlink = (url, text) => `<a class="link" target="_blank" href="${url}">${text}</a>`;
const wrapInParagraph = (content) => `<p class="pb-4 text-pretty">${content.join('')}</p>`;

const fetchProjects = async ($client) => {
  try {
    const { data: projets } = await useAsyncData('projets', () =>
      $client.getEntries({ content_type: 'projets', order: '-fields.date' }),
    );
    const formattedData = projets._rawValue.items.map((item) => ({
      title: item.fields.title,
      description: item.fields.description,
      story: formatDescription(item.fields.story),
      image: item.fields.img,
      icon: item.fields.icon,
      url: item.fields.url,
      tag: item.fields.tag,
      date: item.fields.date,
      techno: item.fields.techno,
    }));
    return formattedData;
  } catch (error) {
    console.error('Error fetching projets:', error);
    return [];
  }
};

fetchProjects($client).then((project) => {
  useProjects().value = project;
});

const fetchDispo = async ($client) => {
  try {
    const { data: dispo } = await useAsyncData('dispo', () =>
      $client.getEntries({ content_type: 'dispo' }),
    );
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
