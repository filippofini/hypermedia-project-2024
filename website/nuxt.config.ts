// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  css: [
    'vuetify/styles/main.sass',
],

build: {
    transpile: ["vuetify"],
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
