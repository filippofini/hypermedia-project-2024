// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  css: [
    '~/assets/css/default.css'
],

build: {

},

  devtools: { enabled: true },
  modules: ['@nuxtjs/supabase'],

  supabase: {
    redirect: false
  },

  components: [
    {path: '~/components',
      pathPrefix: false,
    }
  ]
})
