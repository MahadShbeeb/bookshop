export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    '~/assets/css/main.css',    
  '@fortawesome/fontawesome-svg-core/styles.css'
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/supabase',
    'nuxt-swiper',
  ],
  swiper:{
    modules: ['navigation', 'pagination','a11y','scrollbar','keyboard'],
    
  },
  supabase: {
    redirect: false,
  },

})
