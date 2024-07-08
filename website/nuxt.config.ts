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

  ssr: true,

  app: {
    head:{
      htmlAttrs:{
        lang: "en",
      },
      title: 'Helping Hands',
      meta:[
        { charset: 'utf-8' },
        { name: 'description', content: 'Helping Hands website, where you can receive help against women abuse' },
        { name: 'keywords', content: 'Helping Hands,Projects, Services, Help, Support, Contacts, Association' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        //social media meta tags
        { name: 'og:title', content: 'Helping Hands' },
        { name: 'og:description', content: 'Helping Hands website, where you can receive help against women abuse' },
        { name: 'og:url', content: 'https://hypermedia-project-2024.vercel.app/' },
        { name: 'og:image', content: 'https://i.imgur.com/7VRkK7K.png' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'author', content: 'Thinking4Heads'}
      ]
    }
  },
})
