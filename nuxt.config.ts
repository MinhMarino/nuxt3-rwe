import { defineNuxtConfig } from 'nuxt/config'
export default defineNuxtConfig({
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  plugins: [
    {
      src: '~/plugins/axiosInstance',
    }
  ],
  runtimeConfig: {
    apiSecret: '',
    public: {
      apiBaseUrl: '',
    }
  },
})