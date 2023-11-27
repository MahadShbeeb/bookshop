export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css',    
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
  ],
})
