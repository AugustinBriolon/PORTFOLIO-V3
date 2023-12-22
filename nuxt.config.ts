// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "BEL Bureau d'Études Legavre",
      htmlAttrs: {
        lang: 'fr',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'msapplication-TileColor', content: '#a7904a' },
        { name: 'theme-color', content: '#ffffff' },
        { name: 'keywords', content: '' },
        { hid: 'og:title', property: 'og:title', content: '' },
        { hid: 'og:description', property: 'og:description', content: '' },
        { hid: 'og:image', property: 'og:image', content: '/ogimage.png' },
        { hid: 'og:url', property: 'og:url', content: '' },
      ],
      link: [
        { rel: 'canonical', href: 'https://www.be-legavre.com/' },
        {
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: '/favicon/apple-touch-icon.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '32x32',
          href: '/favicon/favicon-32x32.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '16x16',
          href: '/favicon/favicon-16x16.png',
        },
        { rel: 'manifest', href: '/favicon/site.webmanifest' },
        {
          rel: 'mask-icon',
          href: '/favicon/safari-pinned-tab.svg',
          color: '#a7904a',
        },
      ],
    },
  },
  // PROD
  // ssr: true,
  // DEV
  ssr: false,
  modules: ["nuxt-calendly"],
  devtools: { enabled: true },
  css: ['@/css/main.css'],
  vite: {
    resolve: {
      alias: {
        '~': '/public',
        '@': '/assets',
      },
    },
  },
  calendly: {
    isEnabled: true,
    loadWidgetCSS: true,
    loadWidgetCloseIconSvg: true
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
