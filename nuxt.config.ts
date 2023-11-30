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
    '@nuxtjs/supabase'
  ],
  image: {
    glide: {
      baseURL: 'https://glide.herokuapp.com/1.0/'
    }
  },
  supabase: {
    redirect: false,
  }
})
