import { defineNuxtConfig } from 'nuxt/config'
export default defineNuxtConfig({
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    '@pinia/nuxt',
  ],
  pinia: {
    autoImports: [
      'defineStore',
    ],
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