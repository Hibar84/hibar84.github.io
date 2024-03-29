export default defineNuxtConfig({
  runtimeConfig: {
    // The private keys which are only available within server-side
    OPENAI_API_KEY: process.env.OPENAI_API_KEY,
  },

  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-lodash',
    'nuxt-icon',
    '@nuxt/image-edge',
    '@nuxtjs/supabase',
    "@nuxt/image"
  ],

  build: {
    transpile: ['chart.js']
  },

  lodash: {
    prefix: '_',
    prefixSkip: ['string'],
    upperAfterPrefix: false,
    exclude: ['map'],
    alias: [
      ['camelCase', 'stringToCamelCase'], // => stringToCamelCase
      ['kebabCase', 'stringToKebab'], // => stringToKebab
      ['isDate', 'isLodashDate'], // => _isLodashDate
    ],
  },

  tailwindcss: {
    configPath: 'tailwind.config',
    exposeConfig: false,
    injectPosition: 0,
    viewer: true,
  },

  typescript:{
    typeCheck: true,
    strict: false
  }
})