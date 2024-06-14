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
  ],

  app: {
    head:{
      htmlAttrs:{
        lang: "en",
      },
      title: 'NomeSito',
      meta:[
        { charset: 'utf-8' },
        { name: 'nome', content: 'esempio content' },
      ]
    }
  },
})
