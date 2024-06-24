// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Augustin Briolon - Portfolio Développeur Web Front-End',
      htmlAttrs: {
        lang: 'fr',
      },
      bodyAttrs: {
        class:'bg-white dark:bg-black bg-svgBg dark:bg-svgBgDark'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'msapplication-TileColor', content: '#a7904a' },
        { name: 'theme-color', content: '#ffffff' },
        {
          hid: 'description',
          name: 'description',
          content:
            "Portfolio d'Augustin Briolon. Développeur web de passion et spécialisé en front-end, je transforme vos idées en sites performants.",
        },
        {
          hid: 'keyword',
          name: 'keyword',
          content: 'augustin, briolon, portfolio, développeur, web, front-end',
        },

        // Open Graph
        {
          hid: 'og:site_name',
          property: 'og:site_name',
          content: 'Augustin Briolon - Portfolio Développeur Web Front-End',
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Augustin Briolon - Portfolio Développeur Web Front-End',
        },
        { hid: 'og:locale', property: 'og:locale', content: 'fr_FR' },
        {
          hid: 'og:description',
          property: 'og:description',
          content:
            "Portfolio d'Augustin Briolon. Développeur web de passion et spécialisé en front-end, je transforme vos idées en sites performants.",
        },
        { hid: 'og:image', property: 'og:image', content: '/images/ogimage.png' },
        { hid: 'og:url', property: 'og:url', content: 'https://august1.dev' },
        { hid: 'og:type', property: 'og:type', content: 'website' },

        // Twitter
        {
          hid: 'twitter:card',
          property: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          hid: 'twitter:creator',
          property: 'twitter:creator',
          content: '@AugustinBriolon',
        },
        {
          hid: 'twitter:title',
          property: 'twitter:title',
          content: 'Augustin Briolon - Portfolio Développeur Web Front-End',
        },
        {
          hid: 'twitter:description',
          property: 'twitter:description',
          content:
            "Portfolio d'Augustin Briolon. Développeur web de passion et spécialisé en front-end, je transforme vos idées en sites performants.",
        },
        {
          hid: 'twitter:image',
          property: 'twitter:image',
          content: '/images/ogimage.png',
        },
        {
          hid: 'twitter:url',
          property: 'twitter:url',
          content: 'https://august1.dev',
        },
        {
          hid: 'twitter:site',
          property: 'twitter:site',
          content: '@AugustinBriolon',
        },
        {
          hid: 'twitter:domain',
          property: 'twitter:domain',
          content: 'august1.dev',
        },
      ],
      link: [
        { rel: 'canonical', href: 'https://august1.dev' },
        {
          rel: 'preload',
          href: '/fonts/Switzer-Variable.ttf',
          as: 'font',
          type: 'font/ttf',
          crossorigin: 'anonymous',
        },
        {
          rel: 'preload',
          href: '/fonts/Antonio.ttf',
          as: 'font',
          type: 'font/ttf',
          crossorigin: 'anonymous',
        },
        {
          rel: 'shortcut icon',
          href: '/favicon/favicon.ico',
          type: 'image/x-icon',
        },
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
  modules: ['nuxt-calendly'],
  devtools: { enabled: true },
  experimental: { appManifest: false },
  css: ['@/css/main.css'],
  vite: {
    resolve: {
      alias: {
        '~': '/public',
        '@': '/assets',
      },
    },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  calendly: {
    /**
     * Setting to `false` disables the module.
     * @default true
     * @description Use this setting to disable the module.
     */
    isEnabled: true,
    /**
     * Loads the required CSS for Calendly directly into your app. Saves a HTTP Request.
     * @default true
     * @description Disable if you already load https://assets.calendly.com/assets/external/widget.css by yourself, or you want to load a custom CSS.
     */
    loadWidgetCSS: true,
    /**
     * Loads a required SVG Asset for Calendly directly into your app. Saves a HTTP Request.
     * @default true
     * @description Disable if you already load https://assets.calendly.com/assets/external/close-icon.svg by yourself, or you want to load a custom SVG.
     */
    loadWidgetCloseIconSvg: true,
  },
});
