export default defineNuxtConfig({
  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/logo.svg' },
      ],
    },
  },
  buildModules: [],
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
  ],
})
