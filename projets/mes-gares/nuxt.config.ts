// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  router: {
    base: '/hibar84.github.io/projets/mes-gares/'
  },

  target: 'static',
  
  modules: [
    '@nuxtjs/tailwindcss', 
    '@nuxtjs/supabase'
  ]
})
