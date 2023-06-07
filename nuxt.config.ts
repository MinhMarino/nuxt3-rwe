import { defineNuxtConfig } from 'nuxt/config'
export default defineNuxtConfig({
  render: 'ssr',
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
  ]
})