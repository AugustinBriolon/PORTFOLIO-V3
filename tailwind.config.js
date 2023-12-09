/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue',
  ],
  theme: {
    extend: {
      colors: {
        black: '#0F172A',
        white: '#F8FAFC',
        gray: '#F5F5F5',
        'light-grey': '#9B9B9B',
        'dark-blue': '#1E293B',
        'light-blue': '#C0E4F8',
        green: '#6DDFA1',
        red: '#F96E46'
      },
      borderRadius: {
        small: '8px',
        medium: '18px',
      },
      maxWidth: {
        default: '1280px',
      },

      height: {
        'screen-header': 'calc(100vh - 90px)',
      },
      minHeight: {
        'screen-header': 'calc(100vh - 90px)',
      },
    },
  },
  plugins: [],
};
