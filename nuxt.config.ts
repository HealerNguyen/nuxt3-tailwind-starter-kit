export default defineNuxtConfig({
  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/logo.svg' },
      ],
    },
  },
  css: [
    '@fortawesome/fontawesome-free/css/all.min.css'
  ],
  buildModules: [],
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
  ],
})
